import React,{ useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Eye,
  Phone,
  Calendar,
  Fuel,
  Gauge,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Car } from "@/types/car";
import CarGalleryModal from "./CarGalleryModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  // const [fromDate, setFromDate] = useState(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  // const [fromDate, setFromDate] = useState<Date[]>([])
  // const [toDate, setToDate] = useState("");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // const today = new Date().toISOString().split("T")[0];

  const handleWhatsAppBooking = () => {
    if (!fromDate || !toDate) {
      alert("Please select both from and to dates.");
      return;
    }

    const message = `Hello, I would like to book the ${car.make} ${car.model} from ${formatDate(fromDate)} to ${formatDate(toDate)}.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "919944827270";
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
  };


  const generateSampleImages = (baseImage: string): string[] => {
  const basePath = baseImage.substring(0, baseImage.lastIndexOf("/")); // /images/CAR-1
  return [1, 2, 3, 4, 5].map(
    (i) => `${basePath}/${String(i).padStart(3, "0")}.jpg`
  );
};

// const [fromDate, setFromDate] = useState(null); // Use null for no initial date
  const today:any = new Date();

  // Format date as DD-MM-YYYY
  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Custom input to prevent keyboard
  const CustomInput = React.forwardRef<HTMLInputElement, { value?: string; onClick?: () => void }>(
    ({ value, onClick }, ref) => (
      <input
        type="text"
        value={value}
        onClick={onClick}
        onChange={() => {}} // Prevent manual typing
        placeholder="Select a date"
        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ref={ref}
        readOnly // Prevent keyboard
      />
    )
  );


  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onClick={() => setIsGalleryOpen(true)}
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-blue-600 text-white">
            {car.year}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-white/90 hover:bg-white"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className={`h-4 w-4 ${
                isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-white/90 hover:bg-white"
          >
            <Eye className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            ₹ {car.price.toLocaleString()} / {car.km}
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {car.make} {car.model}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {car.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Gauge className="h-4 w-4" />
            <span>{car.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Fuel className="h-4 w-4" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span
              className="w-4 h-4 rounded-full"
              style={{
                backgroundColor: car.color.toLowerCase().replace(/\s+/g, ""),
              }}
            ></span>
            <span>{car.color}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {car.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {car.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{car.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Date Range Picker */}
        {/* <div className="mb-4 flex flex-col md:flex-row gap-2">
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            min={today}
            className="border px-2 py-1 rounded-md text-sm w-full md:w-1/2"
          />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            min={fromDate || today}
            className="border px-2 py-1 rounded-md text-sm w-full md:w-1/2"
          />
        </div> */}
<div className="mb-4 w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* From Date */}
    {/* <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        From Date
      </label>
      <input
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        min={today}
        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
      />
    </div> */}
<div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        From Date
      </label>

      {/* <DatePicker
        selected={fromDate}
        onChange={(date: Date | null) => setFromDate(date)}
        minDate={today}
        placeholderText="Select a date"
        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        dateFormat="yyyy-MM-dd"
      /> */}
      <DatePicker
          selected={fromDate}
          onChange={(date: Date | null) => {
            setFromDate(date);
            // Reset To Date if it's before From Date
            if (date && toDate && toDate < date) {
              setToDate(null);
            }
          }}
          minDate={today}
          customInput={<CustomInput value={formatDate(fromDate)} />}
          dateFormat="dd-MM-yyyy"
          placeholderText="Select a date"
        />
    </div>
    {/* To Date */}
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        To Date
      </label>
      <DatePicker
          selected={toDate}
          onChange={(date: Date | null) => setToDate(date)}
          minDate={fromDate || today} // Ensure To Date is after From Date
          customInput={<CustomInput value={formatDate(toDate)} />}
          dateFormat="dd-MM-yyyy"
          placeholderText="Select a date"
        />
      {/* <input
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        min={fromDate || today}
        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
      /> */}
    </div>
  </div>
</div>

        <div className="flex gap-2">
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsGalleryOpen(true)}
          >
            Gallery
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleWhatsAppBooking}
            title="Send booking on WhatsApp"
          >
            <FaWhatsapp className="h-4 w-4 text-green-600" />
          </Button>
        </div>
      </CardContent>

      {/* <CarGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        car={{
          make: car.make,
          model: car.model,
          images: car.images || [car.image],
        }}
      /> */}
      <CarGalleryModal
  isOpen={isGalleryOpen}
  onClose={() => setIsGalleryOpen(false)}
  car={{
    make: car.make,
    model: car.model,
    images: car.images || generateSampleImages(car.image),
  }}
/>

    </Card>
  );
};

export default CarCard;
