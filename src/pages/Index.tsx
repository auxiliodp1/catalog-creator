import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { CarGrid } from "@/components/CarGrid";
import { Footer } from "@/components/Footer";
import { catalogData } from "@/data/catalogData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header store={catalogData.store} />
      <main>
        <Banner banner={catalogData.banner} />
        <CarGrid cars={catalogData.cars} store={catalogData.store} />
      </main>
      <Footer store={catalogData.store} footer={catalogData.footer} />
    </div>
  );
};

export default Index;
