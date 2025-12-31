import { Banner as BannerType } from "@/types/catalog";
import { ChevronDown } from "lucide-react";

interface BannerProps {
  banner: BannerType;
}

export const Banner = ({ banner }: BannerProps) => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background">
        {banner.image && (
          <img
            src={banner.image}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
            <span className="text-gradient-gold">{banner.title.split(" ").slice(0, 2).join(" ")}</span>
            <br />
            <span className="text-foreground">{banner.title.split(" ").slice(2).join(" ")}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {banner.subtitle}
          </p>
          <div className="pt-4">
            <a
              href="#carros"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:opacity-90 transition-smooth text-lg"
            >
              Ver Estoque
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
