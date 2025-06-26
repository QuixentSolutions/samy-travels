const Banner = () => {
  return (
    <div className="px-4 py-6 flex justify-center">
      <div className="w-full max-w-5xl rounded-lg overflow-hidden shadow-md">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=534,fit=crop,q=95/mnlqnzOKlpTewN2O/whatsapp-image-2025-01-21-at-11.41.52_5431f042-dWxBBMNvgpfpNrr8.jpg" // Replace with your image path
          alt="Promotional Banner"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
