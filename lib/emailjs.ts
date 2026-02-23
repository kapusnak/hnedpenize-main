import emailjs from "@emailjs/browser"

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

export type LeadParams = {
  source: "calculator" | "popup" | "cta"
  phone: string
  email?: string
  name?: string
  amount?: number
  assetType?: string
  serviceType?: string
}

const CALLBACK_ONLY_SERVICE = "Není relevantní (Callback)"
const CALLBACK_ONLY_AMOUNT = "--- Pouze požadavek na zavolání ---"
const PLACEHOLDER = "---"

/** Format amount for email: "1 800 000,- Kč" */
function formatAmountCzk(value: number): string {
  const integer = Math.round(value)
  const withSpaces = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  return `${withSpaces},- Kč`
}

export async function sendLead(params: LeadParams): Promise<void> {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    console.warn("EmailJS not configured: set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID")
    return
  }
  const isCallbackOnly = params.source === "cta" || params.source === "popup"
  const assetTypeValue = isCallbackOnly ? PLACEHOLDER : (params.assetType ?? "")
  const templateParams = {
    source: params.source,
    phone: params.phone,
    email: params.email ?? "",
    name: isCallbackOnly ? PLACEHOLDER : (params.name ?? ""),
    assetType: assetTypeValue,
    /** Alias for EmailJS templates that show "Typ zajištění" (Nemovitost / Automobil) */
    collateralType: assetTypeValue,
    serviceType: isCallbackOnly ? CALLBACK_ONLY_SERVICE : (params.serviceType ?? ""),
    amount:
      params.amount != null
        ? formatAmountCzk(params.amount)
        : isCallbackOnly
          ? CALLBACK_ONLY_AMOUNT
          : "",
  }
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
}
