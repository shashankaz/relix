import Card from "./_components/Card";
import { services } from "./sampleData";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20">
      <div className="text-center mb-8">
        <h6 className="text-lg font-semibold mb-2">
          Our <span>Services</span>
        </h6>
        <h1
          className="text-4xl md:text-5xl font-semibold font-playwrite"
          style={{ lineHeight: "1.4" }}
        >
          Transforming Spaces with Style
        </h1>
        <p className="md:text-lg text-muted-foreground mt-4">
          Explore our expert interior design services tailored to your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {services.map((item, index) => (
          <Card key={index} data={item} idx={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Services;
