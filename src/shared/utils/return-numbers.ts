export function returnNumbers(phone: string): string {
  return phone.replace(/\D/g, "");
}
