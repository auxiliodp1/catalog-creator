import { Car } from "@/types/catalog";
import { Button } from "@/components/ui/button";
import { Eye, Fuel, Gauge, Calendar } from "lucide-react";

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
}

export const CarCard = ({ car, onViewDetails }: CarCardProps) => {
  return (
    <article className="group bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-gold transition-smooth border border-border hover:border-primary/50 animate-fade-in">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        {car.image ? (
          <img
            src={car.image}
            alt={car.title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl opacity-30">
            🚗
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="px-4 py-2 rounded-full bg-gradient-gold text-primary-foreground font-bold text-sm shadow-gold">
            {car.price}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-smooth">
            {car.title}
          </h3>
          <p className="text-muted-foreground">{car.subtitle}</p>
        </div>

        {/* Quick specs */}
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center p-2 rounded-lg bg-secondary/50">
            <Calendar className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs text-muted-foreground">{car.year}</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-secondary/50">
            <Gauge className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs text-muted-foreground truncate">{car.mileage}</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-secondary/50">
            <Fuel className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs text-muted-foreground">{car.fuel}</span>
          </div>
        </div>

        {/* CTA */}
        <Button
          variant="gold"
          size="lg"
          className="w-full"
          onClick={() => onViewDetails(car)}
        >
          <Eye className="w-5 h-5" />
          Ver Detalhes
        </Button>
      </div>
    </article>
  );
};
