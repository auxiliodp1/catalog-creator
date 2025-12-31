import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { StoreInfo } from "@/types/catalog";

interface HeaderProps {
  store: StoreInfo;
}

export const Header = ({ store }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-secondary/50 py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href={`tel:${store.phone}`} className="flex items-center gap-2 hover:text-primary transition-smooth">
                <Phone className="w-4 h-4" />
                {store.phone}
              </a>
              <a href={`mailto:${store.email}`} className="flex items-center gap-2 hover:text-primary transition-smooth">
                <Mail className="w-4 h-4" />
                {store.email}
              </a>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {store.address}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {store.workingHours}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center text-3xl shadow-gold">
              {store.logo}
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-foreground">
                {store.name}
              </h1>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Veículos Premium
              </p>
            </div>
          </div>

          {/* Mobile contact */}
          <div className="md:hidden">
            <a
              href={`tel:${store.phone}`}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-gold"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${store.phone}`}
              className="px-6 py-3 rounded-lg bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:opacity-90 transition-smooth flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
