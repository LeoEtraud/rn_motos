import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message =
      "Olá! Gostaria de solicitar um atendimento da RN Motos, peças e serviços. Podem me ajudar?";
    const phoneNumber = "5511999999999";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors floating-animation group relative"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={24} />
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale conosco no WhatsApp
        </div>
      </button>
    </div>
  );
}
