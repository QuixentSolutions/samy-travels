// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // required CSS

// const images = [
//   "/images/banner.jpeg",
//   "/images/banner2.jpg",
// ];

// const BannerCarousel = () => {
//   return (
//     <div className="px-4 py-6 flex justify-center">
//       <div className="w-full max-w-6xl overflow-hidden rounded-lg">
//         <Carousel
//           autoPlay
//           infiniteLoop
//           interval={4000}
//           showThumbs={false}
//           showStatus={false}
//           showIndicators={true}
//           showArrows={true}
//           swipeable
//         >
//           {images.map((src, index) => (
//             <div key={index} className="w-full">
//               <img
//                 src={src}
//                 alt={`Banner ${index + 1}`}
//                 className="w-full max-h-64 object-contain rounded-lg"
//               />
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default BannerCarousel;


import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required CSS

const images = [
  "/images/banner.jpeg",
  "/images/banner2.jpg",
];

const BannerCarousel = () => {
  return (
    <div className="px-4 py-6 flex justify-center">
      <div className="w-full max-w-6xl overflow-hidden rounded-lg">
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
          {images.map((src, index) => (
            <div key={index} className="w-full flex justify-center">
              <img
                src={src}
                alt={`Banner ${index + 1}`}
                className="w-96 h-64 object-contain rounded-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BannerCarousel;