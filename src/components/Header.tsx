import { useState } from "react";
import { Menu, X, Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold" style={{ color: "#2C3F6E" }}>
              <span style={{ color: "#8B132D" }}>Samy</span>Travels
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="https://wa.me/919944827270"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 flex items-center space-x-1"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://maps.app.goo.gl/jP7Ab41L7YuUhbMJA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 flex items-center space-x-1"
            >
              <MapPin className="h-5 w-5" />
              <span>Map</span>
            </a>
          </nav>

          {/* Contact Info & CTA */}

          <div className="hidden md:flex items-center space-x-4">
  <a href="tel:+919944827270">
    <Button className="bg-blue-600 hover:bg-blue-700">
      <Phone className="h-4 w-4" />
      <span className="ml-2">+91 99449 97733</span>
    </Button>
  </a>
</div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="https://wa.me/919944827270"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
              >
                <div className="flex items-center space-x-2">
                  <FaWhatsapp className="h-4 w-4" />
                  <span>WhatsApp</span>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/place/Your+Business+Location"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:text-red-600"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Map</span>
                </div>
              </a>
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>+91 9944997733</span>
                </div>
                {/* <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Schedule Test Drive
                </Button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
