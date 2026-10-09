// Placeholder destinations: replace these values before launch.
export const store = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9779800000000",
  facebook:
    process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://m.me/premiumaihub.example",
};
export const whatsappUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent("Hi Premium AI Hub! I would like the Gemini Advanced / Pro 18-month offer for Rs. 699.")}`;
