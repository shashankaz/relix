import ProductCard from "./_components/ProductCard";

const Catalogue = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20">
      <div className="text-center mb-8">
        <h6 className="text-lg font-semibold mb-2">
          Our <span>Catalogue</span>
        </h6>
        <h1
          className="text-4xl md:text-5xl font-semibold font-playwrite"
          style={{ lineHeight: "1.4" }}
        >
          Explore Our Curated Collections
        </h1>
        <p className="md:text-lg text-muted-foreground mt-4">
          Discover a wide range of designs, furniture, and decor to elevate your
          space.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-4 border-black w-full">
        {[...Array(12)].map((_, index) => (
          <ProductCard key={index} idx={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
