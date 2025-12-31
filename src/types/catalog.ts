export interface StoreInfo {
  logo: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

export interface Banner {
  image: string;
  title: string;
  subtitle: string;
}

export interface Car {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  year: string;
  mileage: string;
  fuel: string;
  transmission: string;
  description: string;
  features: string[];
  youtubeUrl?: string;
  whatsappMessage: string;
}

export interface FooterInfo {
  about: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  copyright: string;
}

export interface CatalogData {
  store: StoreInfo;
  banner: Banner;
  cars: Car[];
  footer: FooterInfo;
}
