
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Manual" | "Automatic";
  bodyType: "Sedan" | "SUV" | "Coupe" | "Convertible" | "Hatchback" | "Wagon";
  color: string;
  image: string;
  images?: string[];
  features: string[];
  km?:string;
  description: string;
}

export interface CarFilters {
  make?: string;
  bodyType?: string;
  fuelType?: string;
  priceRange?: [number, number];
  yearRange?: [number, number];
}
