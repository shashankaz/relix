const ProductCard = ({ idx }: { idx: number }) => {
  return (
    <div className="h-60 md:h-80 lg:h-96 w-full border-4 border-black">
      <div className="h-full w-full relative">
        <img
          src={`/catalogue/image (${idx}).jpg`}
          alt={`Product ${idx}`}
          className="h-full w-full object-cover md:grayscale md:hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gray-300 animate-pulse -z-10"></div>
      </div>
    </div>
  );
};

export default ProductCard;
