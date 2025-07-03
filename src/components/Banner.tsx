// const Banner = () => {
//   return (
//     <div className="px-4 py-6 flex justify-center">
//       <div className="w-full max-w-5xl rounded-lg overflow-hidden shadow-md">
//         <img
//           src="/images/banner.jpeg"
//           alt="Promotional Banner"
//           className="w-full object-contain rounded-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required CSS

const images = [
  "/images/banner.jpeg",
  "/images/banner2.jpg"
];

const BannerCarousel = () => {
  // Group images into chunks of 2 for desktop, but show 1 on mobile
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    groupedImages.push(images.slice(i, i + 2));
  }

  return (
    <div className="px-4 py-6 flex justify-center">
      <div className="w-full max-w-6xl overflow-hidden rounded-lg shadow-md">
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          showArrows={true}
          swipeable
        >
          {groupedImages.map((group, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 items-center justify-center"
            >
              {group.map((src, i) => (
                <div key={i} className="w-full md:w-1/2">
                  <img
                    src={src}
                    alt={`Banner ${i}`}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BannerCarousel;
