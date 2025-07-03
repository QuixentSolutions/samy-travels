import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Fuel,
  Gauge,
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
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [name, setName] = useState("");
  const [timing, setTiming] = useState("");
  const [nameError, setNameError] = useState("");
  const [fromDateError, setFromDateError] = useState("");
  const [toDateError, setToDateError] = useState("");

const handleWhatsAppBooking = () => {
  if (!name) {
      setNameError("Please fill your name");
      return;
    }
    setNameError("");

    if (!fromDate) {
      setFromDateError("Please select a from date");
      return;
    }
    setFromDateError("");

    if (!toDate) {
      setToDateError("Please select a to date");
      return;
    }
    setToDateError("");

  const message = `Hello, I am interested in booking the ${car.make}.
  - Customer Name: ${name}
  - Booking Period: From ${formatDate(fromDate)} to ${formatDate(toDate)}
  ${timing ? `- Preferred Timing: ${timing}` : ""}`;
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "919944827270";
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, "_blank");
  setIsBookingOpen(false);
  setName("");
  setFromDate(null);
  setToDate(null);
  setTiming("");
};

  const generateSampleImages = (baseImage: string): string[] => {
    const basePath = baseImage.substring(0, baseImage.lastIndexOf("/"));
    const imageCount = car.images?.length || 7;
    return Array.from({ length: imageCount }, (_, i) => 
      `${basePath}/${String(i + 1).padStart(3, "0")}.jpg`
    );
  };

  const today: any = new Date();

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const CustomInput = React.forwardRef<HTMLInputElement, { value?: string; onClick?: () => void }>(
    ({ value, onClick }, ref) => (
      <input
        type="text"
        value={value}
        onClick={onClick}
        onChange={() => {}}
        placeholder="Select a date"
        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ref={ref}
        readOnly
      />
    )
  );

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={`${car.make}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onClick={() => setIsGalleryOpen(true)}
        />
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {car.make} 
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

        <div className="flex flex-col gap-2">
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsGalleryOpen(true)}
          >
            Gallery
          </Button>
          <Button
            className="flex-1 bg-green-600 hover:bg-green-700"
            onClick={() => setIsBookingOpen(true)}
          >
            Create Booking
          </Button>
        </div>

        {isBookingOpen && (
          <dialog open className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-lg font-bold mb-4">Book Your Car</h2>
              <div className="space-y-4">
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameError && e.target.value) setNameError("");
                    }}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Enter your name"
                    required
                  />
                  {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
                   <DatePicker
                      selected={fromDate}
                      onChange={(date: Date | null) => {
                        setFromDate(date);
                        if (date && toDate && toDate < date) setToDate(null);
                        if (fromDateError && date) setFromDateError("");
                      }}
                      minDate={today}
                      customInput={<CustomInput value={formatDate(fromDate)} />}
                      dateFormat="dd-MM-yyyy"
                      placeholderText="Select a date"
                    />
                    {fromDateError && <p className="text-red-500 text-sm mt-1">{fromDateError}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
                    <DatePicker
                      selected={toDate}
                      onChange={(date: Date | null) => {
                        setToDate(date);
                        if (toDateError && date) setToDateError("");
                      }}
                      minDate={fromDate || today}
                      customInput={<CustomInput value={formatDate(toDate)} />}
                      dateFormat="dd-MM-yyyy"
                      placeholderText="Select a date"
                    />
                    {toDateError && <p className="text-red-500 text-sm mt-1">{toDateError}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Timing (Optional)</label>
                  <input
                    type="text"
                    value={timing}
                    onChange={(e) => setTiming(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="e.g., 10:00 AM - 2:00 PM"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsBookingOpen(false);
                      setName("");
                      setFromDate(null);
                      setToDate(null);
                      setTiming("");
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-green-600 hover:bg-green-700"
                    onClick={handleWhatsAppBooking}
                  >
                    <FaWhatsapp className="h-4 w-4 mr-2" /> Send Booking
                  </Button>
                </div>
              </div>
            </div>
          </dialog>
        )}
      </CardContent>
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