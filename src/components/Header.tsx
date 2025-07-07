import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <nav className="flex flex-row items-center space-x-4 md:space-x-6">
            <a
              href="https://wa.me/919944827270"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 flex items-center"
            >
              <FaWhatsapp className="h-6 w-6 md:h-6 md:w-6 sm:h-4 sm:w-4 text-green-600" />
              <span className="hidden md:inline ml-1">WhatsApp</span>
            </a>
            <a
              href="tel:+919944827270"
              className="text-gray-600 hover:text-blue-600 flex items-center"
            >
              <Phone className="h-5 w-5 md:h-5 md:w-5 sm:h-3 sm:w-3 text-blue-600" />
              <span className="hidden md:inline ml-1">+91 99448 27270</span>
            </a>
            <a
              href="https://maps.app.goo.gl/jP7Ab41L7YuUhbMJA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 flex items-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1428px-Google_Maps_icon_%282020%29.svg.png"
                alt="Google Maps Pin"
                className="w-5 md:w-5 sm:w-3"
              />
              <span className="hidden md:inline ml-1">Map</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;