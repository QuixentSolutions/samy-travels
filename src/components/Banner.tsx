const Banner = () => {
  return (
    <div className="px-4 py-6 flex justify-center">
      <div className="w-full max-w-5xl rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/banner.jpeg"
          alt="Promotional Banner"
          className="w-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;

// const Banner = () => {
//   return (
//     <div className="px-4 py-6 flex justify-center bg-gray-100">
//       <div className="w-full max-w-screen-xl px-2 md:px-4">
//         <img
//           src="/images/banner.jpeg"
//           alt="Promotional Banner"
//           className="w-full h-[220px] object-contain rounded-lg shadow-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;

