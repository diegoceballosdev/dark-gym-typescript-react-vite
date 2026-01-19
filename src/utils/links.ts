export function waQuickLink(whatsappNumber: string, message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}
