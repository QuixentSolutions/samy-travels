import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterSidebar from "@/components/FilterSidebar";
import CarGrid from "@/components/CarGrid";
import { Car } from "@/types/car";
import Banner from "@/components/Banner";

// Sample car data
const sampleCars: Car[] = [
  {
    id: "1",
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    price: 120000,
    mileage: 1200,
    fuelType: "Hybrid",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Obsidian Black",
    image: "/images/CAR-1/001.jpg",
    features: [
      "Panoramic Sunroof",
      "Massage Seats",
      "Night Vision",
      "Burmester Sound",
    ],
    description:
      "The epitome of luxury and sophistication, featuring cutting-edge technology and unparalleled comfort.",
  },
  {
    id: "2",
    make: "BMW",
    model: "X7",
    year: 2024,
    price: 95000,
    mileage: 800,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Alpine White",
    image: "/images/CAR-2/001.jpg",
    features: [
      "Adaptive Suspension",
      "Gesture Control",
      "Wireless Charging",
      "Harman Kardon Audio",
    ],
    description:
      "Commanding presence with innovative technology and spacious luxury for the modern family.",
  },
  {
    id: "3",
    make: "Audi",
    model: "RS6 Avant",
    year: 2023,
    price: 115000,
    mileage: 2500,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Wagon",
    color: "Nardo Gray",
    image: "/images/CAR-3/001.jpg",
    features: [
      "Carbon Fiber Trim",
      "Sport Exhaust",
      "Matrix LED",
      "Bang & Olufsen",
    ],
    description:
      "Performance wagon that combines everyday practicality with exhilarating driving dynamics.",
  },
  {
    id: "4",
    make: "Porsche",
    model: "911 Turbo S",
    year: 2024,
    price: 230000,
    mileage: 500,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Coupe",
    color: "Guards Red",
    image: "/images/CAR-4/001.jpg",
    features: ["Sport Chrono Package", "PASM", "Ceramic Brakes", "Bose Audio"],
    description:
      "The ultimate sports car combining legendary performance with everyday usability.",
  },
  {
    id: "5",
    make: "Bentley",
    model: "Continental GT",
    year: 2024,
    price: 250000,
    mileage: 300,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Coupe",
    color: "Beluga Black",
    image: "/images/CAR-5/001.jpg",
    features: [
      "Diamond Quilted Leather",
      "Naim Audio",
      "Mood Lighting",
      "Massage Seats",
    ],
    description:
      "Handcrafted luxury grand tourer that exemplifies British refinement and performance.",
  },
  {
    id: "6",
    make: "Rolls-Royce",
    model: "Ghost",
    year: 2024,
    price: 350000,
    mileage: 100,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Arctic White",
    image: "/images/CAR-6/001.jpg",
    features: [
      "Starlight Headliner",
      "Spirit of Ecstasy",
      "Bespoke Interior",
      "Whisper Quiet Cabin",
    ],
    description:
      "The pinnacle of automotive luxury, where every journey becomes an extraordinary experience.",
  },
  {
    id: "7",
    make: "Rolls-Royce",
    model: "Ghost",
    year: 2024,
    price: 350000,
    mileage: 100,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Arctic White",
    image: "/images/CAR-7/001.jpg",
    features: [
      "Starlight Headliner",
      "Spirit of Ecstasy",
      "Bespoke Interior",
      "Whisper Quiet Cabin",
    ],
    description:
      "The pinnacle of automotive luxury, where every journey becomes an extraordinary experience.",
  },
  {
    id: "8",
    make: "Rolls-Royce",
    model: "Ghost",
    year: 2024,
    price: 350000,
    mileage: 100,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Arctic White",
    image: "/images/CAR-8/001.jpg",
    features: [
      "Starlight Headliner",
      "Spirit of Ecstasy",
      "Bespoke Interior",
      "Whisper Quiet Cabin",
    ],
    description:
      "The pinnacle of automotive luxury, where every journey becomes an extraordinary experience.",
  },
  {
    id: "9",
    make: "Rolls-Royce",
    model: "Ghost",
    year: 2024,
    price: 350000,
    mileage: 100,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Arctic White",
    image: "/images/CAR-9/001.jpg",
    features: [
      "Starlight Headliner",
      "Spirit of Ecstasy",
      "Bespoke Interior",
      "Whisper Quiet Cabin",
    ],
    description:
      "The pinnacle of automotive luxury, where every journey becomes an extraordinary experience.",
  },
];

const Index = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(sampleCars);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredCars(sampleCars);
    } else {
      const filtered = sampleCars.filter(
        (car) =>
          car.make.toLowerCase().includes(query.toLowerCase()) ||
          car.model.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  const handleFilter = (filters: any) => {
    let filtered = sampleCars;

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (car) =>
          car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.model.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.make && filters.make !== "all") {
      filtered = filtered.filter((car) => car.make === filters.make);
    }

    if (filters.bodyType && filters.bodyType !== "all") {
      filtered = filtered.filter((car) => car.bodyType === filters.bodyType);
    }

    if (filters.fuelType && filters.fuelType !== "all") {
      filtered = filtered.filter((car) => car.fuelType === filters.fuelType);
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (car) =>
          car.price >= filters.priceRange[0] &&
          car.price <= filters.priceRange[1]
      );
    }

    if (filters.yearRange) {
      filtered = filtered.filter(
        (car) =>
          car.year >= filters.yearRange[0] && car.year <= filters.yearRange[1]
      );
    }

    setFilteredCars(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      <Hero onSearch={handleSearch} />
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 justify-center max-w-7xl mx-auto">
          <div className="lg:w-3/4">
            {/* <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Premium Collection
              </h2>
              <p className="text-gray-600">
                {filteredCars.length} exceptional vehicles available
              </p>
            </div> */}

            <CarGrid cars={filteredCars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
