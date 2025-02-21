const reviews = [
  {
    text: "Absolutely love the transformation! The team truly understood my style and created a space that feels elegant yet cozy. Highly professional and detail-oriented. Would definitely recommend!",
    name: "Aisha Sharma",
    location: "Mumbai, India",
    profileUrl: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    text: "Their creativity and attention to detail exceeded my expectations. The process was seamless, and the final result is simply stunning. My home finally feels complete!",
    name: "Rohan Patel",
    location: "Delhi, India",
    profileUrl: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    text: "Exceptional design and execution! The team made the entire experience stress-free. Every detail was thoughtfully planned, and my space looks incredible. Thank you for making my dream home a reality!",
    name: "Priya Menon",
    location: "Bangalore, India",
    profileUrl: "https://randomuser.me/api/portraits/women/30.jpg",
  },
];

const Testimonials = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-medium capitalize md:w-1/2">
        What Our Customers Say
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className={index === 0 ? "" : "hidden lg:block"}>
            <Card
              text={review.text}
              name={review.name}
              location={review.location}
              profileUrl={review.profileUrl}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 mt-4">
        <div className="size-2 bg-zinc-100 rounded-full"></div>
        <div className="size-2 bg-zinc-300 rounded-full"></div>
        <div className="size-2 bg-zinc-500 rounded-full"></div>
        <div className="size-2 bg-zinc-300 rounded-full"></div>
        <div className="size-2 bg-zinc-100 rounded-full"></div>
      </div>
    </div>
  );
};

export default Testimonials;

interface CardProps {
  text: string;
  name: string;
  location: string;
  profileUrl: string;
}

const Card = ({ text, name, location, profileUrl }: CardProps) => {
  return (
    <div className="bg-zinc-200 h-48 flex flex-col justify-between p-4 rounded-2xl">
      <p className="text-sm">{text}</p>
      <div className="flex items-center gap-2">
        <div className="size-12 rounded-full overflow-hidden bg-black">
          <img src={profileUrl} alt="" className="h-full w-full object-cover" />
        </div>
        <div>
          <h5 className="text-sm font-semibold">{name}</h5>
          <h6 className="text-sm font-light">{location}</h6>
        </div>
      </div>
    </div>
  );
};
