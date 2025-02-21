const Services = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl md:text-6xl font-medium">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        <div className="flex gap-4">
          <div>
            <img src="/services/Lighting design icon.png" alt="Our Services" />
          </div>
          <div className="space-y-3">
            <h1 className="font-medium text-lg">Lighting Design</h1>
            <p className="text-gray-500">
              Achieve the perfect balance of ambient, task, and accent lighting
              for a functional atmosphere
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <img
              src="/services/Interior design icon.png"
              alt="Interior Design"
            />
          </div>
          <div className="space-y-3">
            <h1 className="font-medium text-lg">Interior Design</h1>
            <p className="text-gray-500">
              From concept to completion, we oversee every detail to bring your
              vision to life efficiently
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <img src="/services/Outdoor design icon.png" alt="Outdoor Design" />
          </div>
          <div className="space-y-3">
            <h1 className="font-medium text-lg">Outdoor Design</h1>
            <p className="text-gray-500">
              Celebrate the changing seasons with our seasonal outdoor decor
              services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
