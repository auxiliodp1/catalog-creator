import { StoreInfo, FooterInfo } from "@/types/catalog";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";

interface FooterProps {
  store: StoreInfo;
  footer: FooterInfo;
}

export const Footer = ({ store, footer }: FooterProps) => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-2xl shadow-gold">
                {store.logo}
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                {store.name}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {footer.about}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {footer.socialLinks.instagram && (
                <a
                  href={footer.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {footer.socialLinks.facebook && (
                <a
                  href={footer.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {footer.socialLinks.youtube && (
                <a
                  href={footer.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <a
                href={`tel:${store.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{store.phone}</span>
              </a>
              <a
                href={`mailto:${store.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{store.email}</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Localização</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>{store.address}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{store.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
