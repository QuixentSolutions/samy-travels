
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { CarFilters } from "@/types/car";

interface FilterSidebarProps {
  onFilter: (filters: CarFilters) => void;
}

const FilterSidebar = ({ onFilter }: FilterSidebarProps) => {
  const [filters, setFilters] = useState<CarFilters>({
    make: "all",
    bodyType: "all",
    fuelType: "all",
    priceRange: [0, 500000],
    yearRange: [2020, 2024]
  });

  const handleFilterChange = (key: keyof CarFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters: CarFilters = {
      make: "all",
      bodyType: "all", 
      fuelType: "all",
      priceRange: [0, 500000],
      yearRange: [2020, 2024]
    };
    setFilters(defaultFilters);
    onFilter(defaultFilters);
  };

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Filters</span>
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            Reset
          </Button>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Make Filter */}
        <div className="space-y-2">
          <Label htmlFor="make">Make</Label>
          <Select value={filters.make} onValueChange={(value) => handleFilterChange("make", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select make" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Makes</SelectItem>
              <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
              <SelectItem value="BMW">BMW</SelectItem>
              <SelectItem value="Audi">Audi</SelectItem>
              <SelectItem value="Porsche">Porsche</SelectItem>
              <SelectItem value="Bentley">Bentley</SelectItem>
              <SelectItem value="Rolls-Royce">Rolls-Royce</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Body Type Filter */}
        <div className="space-y-2">
          <Label htmlFor="bodyType">Body Type</Label>
          <Select value={filters.bodyType} onValueChange={(value) => handleFilterChange("bodyType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select body type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Sedan">Sedan</SelectItem>
              <SelectItem value="SUV">SUV</SelectItem>
              <SelectItem value="Coupe">Coupe</SelectItem>
              <SelectItem value="Convertible">Convertible</SelectItem>
              <SelectItem value="Wagon">Wagon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Fuel Type Filter */}
        <div className="space-y-2">
          <Label htmlFor="fuelType">Fuel Type</Label>
          <Select value={filters.fuelType} onValueChange={(value) => handleFilterChange("fuelType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select fuel type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Petrol">Petrol</SelectItem>
              <SelectItem value="Diesel">Diesel</SelectItem>
              <SelectItem value="Electric">Electric</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <Label>Price Range</Label>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => handleFilterChange("priceRange", value)}
              min={0}
              max={500000}
              step={10000}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>${filters.priceRange?.[0]?.toLocaleString()}</span>
            <span>${filters.priceRange?.[1]?.toLocaleString()}</span>
          </div>
        </div>

        {/* Year Range */}
        <div className="space-y-3">
          <Label>Year Range</Label>
          <div className="px-2">
            <Slider
              value={filters.yearRange}
              onValueChange={(value) => handleFilterChange("yearRange", value)}
              min={2018}
              max={2024}
              step={1}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{filters.yearRange?.[0]}</span>
            <span>{filters.yearRange?.[1]}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;
