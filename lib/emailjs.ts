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

export async function sendLead(params: LeadParams): Promise<void> {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    console.warn("EmailJS not configured: set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID")
    return
  }
  const templateParams = {
    source: params.source,
    phone: params.phone,
    email: params.email ?? "",
    name: params.name ?? "",
    amount: params.amount != null ? String(params.amount) : "",
    assetType: params.assetType ?? "",
    serviceType: params.serviceType ?? "",
  }
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
}
