import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "51999999999"; // Formato: código de país + número
    const message = encodeURIComponent(
      "Hola, estoy interesado en sus servicios de automatización, impresión y desarrollo web."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 shadow-elegant bg-[#25D366] text-white"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};
