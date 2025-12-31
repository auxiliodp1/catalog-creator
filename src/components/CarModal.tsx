import { Car, StoreInfo } from "@/types/catalog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Calendar, Gauge, Fuel, Settings2, Check, Play } from "lucide-react";

interface CarModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
  store: StoreInfo;
}

export const CarModal = ({ car, isOpen, onClose, store }: CarModalProps) => {
  if (!car) return null;

  const handleWhatsApp = () => {
    const phone = store.phone.replace(/\D/g, "");
    const message = encodeURIComponent(car.whatsappMessage);
    window.open(`https://wa.me/55${phone}?text=${message}`, "_blank");
  };

  const getYoutubeEmbedUrl = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const youtubeEmbedUrl = car.youtubeUrl ? getYoutubeEmbedUrl(car.youtubeUrl) : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-card border-border overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          <div className="relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero Image */}
            <div className="relative aspect-video bg-secondary">
              {car.image ? (
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-8xl opacity-30">
                  🚗
                </div>
              )}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="px-6 py-3 rounded-xl bg-gradient-gold text-primary-foreground font-bold text-2xl shadow-gold">
                  {car.price}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              <DialogHeader>
                <DialogTitle className="text-3xl font-serif font-bold text-foreground">
                  {car.title}
                </DialogTitle>
                <p className="text-lg text-muted-foreground">{car.subtitle}</p>
              </DialogHeader>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <Calendar className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Ano</p>
                  <p className="font-semibold text-foreground">{car.year}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <Gauge className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Quilometragem</p>
                  <p className="font-semibold text-foreground">{car.mileage}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <Fuel className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Combustível</p>
                  <p className="font-semibold text-foreground">{car.fuel}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <Settings2 className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Câmbio</p>
                  <p className="font-semibold text-foreground">{car.transmission}</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Descrição</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {car.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Opcionais</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* YouTube Video */}
              {youtubeEmbedUrl && (
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Play className="w-5 h-5 text-primary" />
                    Vídeo do Veículo
                  </h4>
                  <div className="aspect-video rounded-xl overflow-hidden border border-border">
                    <iframe
                      src={youtubeEmbedUrl}
                      title={`Vídeo ${car.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}

              {/* WhatsApp CTA */}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="whatsapp"
                  size="xl"
                  className="w-full"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-6 h-6" />
                  Chamar no WhatsApp
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  Mensagem personalizada: "{car.whatsappMessage.substring(0, 50)}..."
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
