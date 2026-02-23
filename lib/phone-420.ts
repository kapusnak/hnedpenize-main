const PREFIX = "+420 "
const MAX_DIGITS = 9

/**
 * Format 0–9 digits as "+420 XXX XXX XXX" (spaces every 3 digits).
 */
export function formatPhoneDisplay(digits: string): string {
  const d = digits.replace(/\D/g, "").slice(0, MAX_DIGITS)
  const groups = d.match(/.{1,3}/g) ?? []
  return PREFIX + groups.join(" ")
}

/**
 * From raw input, return only the digits the user entered after +420 (max 9).
 * Strips the +420 prefix first so we never treat it as user input.
 */
export function parsePhoneDigits(raw: string): string {
  const afterPrefix = raw.replace(/^\s*\+420\s*/, "")
  return afterPrefix.replace(/\D/g, "").slice(0, MAX_DIGITS)
}

/**
 * Full number for submit / tel: links: "+420" + 9 digits, no spaces.
 */
export function toFullPhone(digits: string): string {
  const d = digits.replace(/\D/g, "").slice(0, MAX_DIGITS)
  return d.length === MAX_DIGITS ? "+420" + d : ""
}
