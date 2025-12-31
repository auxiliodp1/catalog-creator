import { useState } from "react";
import { Car, StoreInfo } from "@/types/catalog";
import { CarCard } from "./CarCard";
import { CarModal } from "./CarModal";

interface CarGridProps {
  cars: Car[];
  store: StoreInfo;
}

export const CarGrid = ({ cars, store }: CarGridProps) => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCar(null), 300);
  };

  return (
    <section id="carros" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            <span className="text-gradient-gold">Nosso</span>{" "}
            <span className="text-foreground">Estoque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veículos selecionados com garantia de procedência e qualidade
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cars.map((car, index) => (
            <div
              key={car.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="opacity-0 animate-slide-up"
            >
              <CarCard car={car} onViewDetails={handleViewDetails} />
            </div>
          ))}
        </div>

        {/* Modal */}
        <CarModal
          car={selectedCar}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          store={store}
        />
      </div>
    </section>
  );
};
