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
    make: "மகாராஜா",
    model: "Great King",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 1200,
    fuelType: "Diesel",
    transmission: "Manual",
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
    make: "வேகன்",
    model: "Speedster",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 800,
    fuelType: "Diesel",
    transmission: "Manual",
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
    make: "அழகு",
    model: "Beauty",
    year: 2023,
    price: 15,
    km: "KM",
    mileage: 2500,
    fuelType: "Diesel",
    transmission: "Manual",
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
    make: "சிங்கம்",
    model: "Lion",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 500,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Coupe",
    color: "Guards Red",
    image: "/images/CAR-4/001.jpg",
    features: ["Sport Chrono Package", "PASM", "Ceramic Brakes", "Bose Audio"],
    description:
      "The ultimate sports car combining legendary performance with everyday usability.",
  },
  {
    id: "5",
    make: "மின்னல்",
    model: "Lightning",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 300,
    fuelType: "Diesel",
    transmission: "Manual",
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
    make: "வீரன்",
    model: "Warrior",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 100,
    fuelType: "Diesel",
    transmission: "Manual",
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
    make: "தாரா",
    model: "Star",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 100,
    fuelType: "Diesel",
    transmission: "Manual",
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
    make: "இளவரசன்",
    model: "Prince",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 100,
    fuelType: "Diesel",
    transmission: "Manual",
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
    make: "கனிவு",
    model: "Thunder",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 100,
    fuelType: "Diesel",
    transmission: "Manual",
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
  {
    id: "10",
    make: "அமுதம்",
    model: "Nectar",
    year: 2023,
    price: 15,
    km: "KM",
    mileage: 1500,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Coupe",
    color: "Midnight Blue",
    image: "/images/CAR-1/001.jpg",
    features: [
      "Panoramic Sunroof",
      "Leather Seats",
      "Premium Audio",
      "Adaptive Cruise",
    ],
    description:
      "A divine blend of elegance and performance, perfect for a smooth and luxurious ride.",
  },
  {
    id: "11",
    make: "அருவி",
    model: "Waterfall",
    year: 2025,
    price: 15,
    km: "KM",
    mileage: 200,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "SUV",
    color: "Silver Mist",
    image: "/images/CAR-2/001.jpg",
    features: [
      "All-Wheel Drive",
      "Touchscreen Display",
      "Heated Seats",
      "Lane Assist",
    ],
    description:
      "Graceful and powerful, this SUV flows through any terrain with ease.",
  },
  {
    id: "12",
    make: "திருவிழா",
    model: "Festival",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 1800,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Hatchback",
    color: "Vibrant Red",
    image: "/images/CAR-3/001.jpg",
    features: [
      "Sunroof",
      "Smart Key",
      "Infotainment System",
      "Parking Sensors",
    ],
    description:
      "A vibrant and joyful ride, perfect for city adventures and celebrations.",
  },
  {
    id: "13",
    make: "இராசி",
    model: "Fortune",
    year: 2023,
    price: 15,
    km: "KM",
    mileage: 2200,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Sedan",
    color: "Emerald Green",
    image: "/images/CAR-4/001.jpg",
    features: [
      "Blind Spot Monitoring",
      // "Heated Steering Wheel",
      "Navigation System",
      "Ambient Lighting",
    ],
    description:
      "A stylish sedan that brings luck and luxury to every journey.",
  },
  {
    id: "14",
    make: "முரசு",
    model: "Drum",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 900,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "SUV",
    color: "Onyx Black",
    image: "/images/CAR-4/001.jpg",
    features: [
      "Power Tailgate",
      "Surround Camera",
      "Adaptive Suspension",
      "Premium Audio",
    ],
    description:
      "Powerful and rhythmic, this SUV commands attention on the road.",
  },
  {
    id: "15",
    make: "சுடர்",
    model: "Radiance",
    year: 2025,
    price: 15,
    km: "KM",
    mileage: 400,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Coupe",
    color: "Pearl White",
    image: "/images/CAR-5/001.jpg",
    features: [
      "Fast Charging",
      "Panoramic Roof",
      "Sport Seats",
      "Wireless Charging",
    ],
   description: "A sleek and radiant coupe that shines with futuristic elegance.",
  },
  {
    id: "16",
    make: "புழை",
    model: "Whirlwind",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 1200,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Wagon",
    color: "Storm Gray",
    image: "/images/CAR-6/001.jpg",
    features: [
      "Roof Rails",
      "Advanced Safety",
      "Infotainment System",
      "Heated Seats",
    ],
    description:
      "A dynamic and fast wagon, perfect for thrilling family adventures.",
  },
  {
    id: "17",
    make: "அணில்",
    model: "Squirrel",
    year: 2023,
    price: 15,
    km: "KM",
    mileage: 3000,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Hatchback",
    color: "Saffron Yellow",
    image: "/images/CAR-7/001.jpg",
    features: [
      "Keyless Entry",
      "Rear Camera",
      "Cruise Control",
      "Bluetooth Audio",
    ],
    description:
      "A quirky and agile hatchback, ideal for zipping through city streets.",
  },
  {
    id: "18",
    make: "விமானம்",
    model: "Aircraft",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 600,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Coupe",
    color: "Jet Black",
    image: "/images/CAR-8/001.jpg",
    features: [
      "Aerodynamic Design",
      "Touchscreen Interface",
      // "Lane Keep Assist",
      "Premium Sound",
    ],
    description:
      "A futuristic coupe that soars with cutting-edge technology.",
  },
  {
    id: "19",
    make: "சூரியன்",
    model: "Sun",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 800,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "SUV",
    color: "Solar Orange",
    image: "/images/CAR-9/001.jpg",
    features: [
      "Sunroof",
      "All-Wheel Drive",
      "Navigation System",
      "Heated Seats",
    ],
    description:
      "A bold and energetic SUV that radiates power and style.",
  },
  {
    id: "20",
    make: "முத்து",
    model: "Pearl",
    year: 2023,
    price: 15,
    km: "KM",
    mileage: 1400,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Sedan",
    color: "Pearl White",
    image: "/images/CAR-1/001.jpg",
    features: [
      "Leather Interior",
      "Adaptive Cruise",
      "Ambient Lighting",
      "Premium Audio",
    ],
    description:
      "A classy and smooth sedan with a luxurious pearlescent finish.",
  },
  {
    id: "21",
    make: "விக்ரம்",
    model: "Bravery",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 500,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Coupe",
    color: "Crimson Red",
    image: "/images/CAR-2/001.jpg",
    features: [
      "Sport Suspension",
      "Paddle Shifters",
      "Carbon Fiber Trim",
      "Bose Audio",
    ],
    description:
      "A bold and stylish coupe that embodies bravery and performance.",
  },
  {
    id: "22",
    make: "கதிர்",
    model: "Ray",
    year: 2025,
    price: 15,
    km: "KM",
    mileage: 300,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Sedan",
    color: "Radiant Silver",
    image: "/images/CAR-2/001.jpg",
    features: [
      "Fast Charging",
      "Panoramic Sunroof",
      "Lane Assist",
      "Wireless Charging",
    ],
    description:
      "A clean and modern sedan that shines with efficiency and elegance.",
  },
  {
    id: "23",
    make: "இசை",
    model: "Music",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 2000,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Hatchback",
    color: "Melody Blue",
    image: "/images/CAR-3/001.jpg",
    features: [
      "Premium Sound System",
      "Smart Key",
      "Rear Camera",
      "Heated Seats",
    ],
    description:
      "A smooth and artistic hatchback that resonates with style.",
  },
  {
    id: "24",
    make: "மழை",
    model: "Rain",
    year: 2023,
    price: 15,
    km: "KM",
    mileage: 2800,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Wagon",
    color: "Aqua Blue",
    image: "/images/CAR-4/001.jpg",
    features: [
      "Roof Rails",
      "Advanced Safety",
      "Infotainment System",
      "Cruise Control",
    ],
    description:
      "A cool and soothing wagon, perfect for family road trips.",
  },
  {
    id: "25",
    make: "புலி",
    model: "Tiger",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 700,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "SUV",
    color: "Tiger Orange",
    image: "/images/CAR-5/001.jpg",
    features: [
      "All-Wheel Drive",
      "Sport Mode",
      "Premium Leather",
      "Surround Camera",
    ],
    description:
      "A wild and strong SUV with commanding presence and power.",
  },
  {
    id: "26",
    make: "காளை",
    model: "Bull",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 900,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "SUV",
    color: "Matte Black",
    image: "/images/CAR-6/001.jpg",
    features: [
      "Tow Package",
      "Adaptive Suspension",
      "Heated Seats",
      "Navigation System",
    ],
    description:
      "A rugged and masculine SUV built for strength and durability.",
  },
  {
    id: "27",
    make: "வானம்",
    model: "Sky",
    year: 2025,
    price: 15,
    km: "KM",
    mileage: 400,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Coupe",
    color: "Sky Blue",
    image: "/images/CAR-7/001.jpg",
    features: [
      "Panoramic Roof",
      "Fast Charging",
      "Lane Keep Assist",
      "Premium Audio",
    ],
    description:
      "An expansive and open coupe with a futuristic driving experience.",
  },
  {
    id: "28",
    make: "நட்சத்திரம்",
    model: "Star",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 200,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Sedan",
    color: "Stellar Silver",
    image: "/images/CAR-8/001.jpg",
    features: [
      "Starlight Headliner",
      "Massage Seats",
      "Ambient Lighting",
      "Bespoke Interior",
    ],
    description:
      "A fancy and glamorous sedan that shines with luxury.",
  },
  {
    id: "29",
    make: "சுழல்",
    model: "Swirl",
    year: 2023,
    price: 15,
    km: "KM",
    mileage: 1600,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Coupe",
    color: "Swirl Gray",
    image: "/images/CAR-9/001.jpg",
    features: [
      "Sport Suspension",
      "Paddle Shifters",
      "Carbon Fiber Trim",
      "Bose Audio",
    ],
    description:
      "A sporty and fast coupe with dynamic swirl-like performance.",
  },
  {
    id: "30",
    make: "விரல்",
    model: "Speed",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 1000,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Hatchback",
    color: "Quick Silver",
    image: "/images/CAR-1/001.jpg",
    features: [
      "Keyless Entry",
      "Rear Camera",
      "Cruise Control",
      "Bluetooth Audio",
    ],
    description:
      "A quick and catchy hatchback designed for speed and agility.",
  },
  {
    id: "31",
    make: "அங்காடி",
    model: "Market",
    year: 2023,
    price: 15,
    km: "KM",
    mileage: 2400,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "SUV",
    color: "Urban Gray",
    image: "/images/CAR-2/001.jpg",
    features: [
      "Power Tailgate",
      "Infotainment System",
      "Heated Seats",
      "Lane Assist",
    ],
    description:
      "An urban and funky SUV, perfect for vibrant city life.",
  },
  {
    id: "32",
    make: "வெண்மதி",
    model: "White Moon",
    year: 2024,
    price: 15,
    km: "KM",
    mileage: 600,
    fuelType: "Diesel",
    transmission: "Manual",
    bodyType: "Sedan",
    color: "Moonlight White",
    image: "/images/CAR-3/001.jpg",
    features: [
      "Panoramic Sunroof",
      "Fast Charging",
      "Premium Audio",
      "Ambient Lighting",
    ],
    description:
      "An elegant and calm sedan that glows like a white moon.",
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
    <div className="min-h-screen bg-gradient-to-br from-[#edf2f7] via-[#dbe9f4] to-[#cbdced]">
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
