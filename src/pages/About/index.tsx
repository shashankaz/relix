const About = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20">
      <div className="text-center mb-8">
        <h6 className="text-lg font-semibold mb-2">
          About <span>Us</span>
        </h6>
        <h1 className="text-4xl md:text-5xl font-semibold font-playwrite">
          Creating Beautiful Spaces
        </h1>
        <p className="md:text-lg text-muted-foreground mt-4">
          Learn more about our passion for design and commitment to excellence.
        </p>
      </div>
      <div className="space-y-6 max-w-4xl mx-auto">
        <p className="font-light text-center">
          Our journey began with a passion for transforming ordinary spaces into
          extraordinary experiences. What started as a small passion project
          helping friends and family design their homes quickly grew into a
          full-scale interior design business. We believe that great design has
          the power to improve how people feel, work, and live, and our goal is
          to bring beauty and purpose to every space we touch.
        </p>
        <p className="font-light text-center">
          We approach interior design with a focus on creating harmony, balance,
          and reflecting the unique personality and lifestyle of each client.
          From cozy homes to inspiring offices, we treat every project with
          personal care and dedication. Our team of designers, architects, and
          craftsmen brings creativity and technical precision to each project,
          ensuring fresh ideas and excellence in every design.
        </p>
        <p className="font-light text-center">
          Collaboration is at the heart of our process. We take the time to
          understand our clients' vision and preferences, curating designs that
          not only look stunning but also enhance the way people interact with
          their surroundings. We combine aesthetics with functionality, creating
          spaces that are both beautiful and practical.
        </p>
        <p className="font-light text-center">
          Quality and sustainability are key to our work. We source the finest
          materials and craftsmanship, while also staying ahead of trends and
          eco-friendly practices. Our ultimate goal is to design spaces that
          tell a story—whether it's a sanctuary, an inspiring office, or a
          memorable commercial space. The greatest reward is seeing the joy in
          our clients when they step into a space that feels truly their own.
        </p>
      </div>
    </div>
  );
};

export default About;
