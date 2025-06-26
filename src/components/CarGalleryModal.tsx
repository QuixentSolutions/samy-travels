import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface CarGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: {
    make: string;
    model: string;
    images: string[];
  };
}

const CarGalleryModal = ({ isOpen, onClose, car }: CarGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-4"
                >
                  {car.make} {car.model} - Gallery
                </Dialog.Title>

                <div className="relative">
                  <img
                    src={car.images[currentIndex]}
                    alt={`Car ${currentIndex + 1}`}
                    className={`w-full h-[400px] object-contain transition-transform duration-300 ${isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"}`}
                    onClick={toggleZoom}
                  />

                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-r hover:bg-opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-l hover:bg-opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={onClose}
                    className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-4 text-center text-sm text-gray-500">
                  Image {currentIndex + 1} of {car.images.length}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarGalleryModal;
