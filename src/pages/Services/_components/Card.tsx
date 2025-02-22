interface CardProps {
  data: {
    title: string;
  };
  idx: number;
}

const Card = ({ data, idx }: CardProps) => {
  return (
    <div className="h-40 relative overflow-hidden group">
      <div className="bg-gray-100 group-hover:bg-gray-200 transition-all duration-300 h-full w-full rounded-md p-3">
        <h1 className="text-lg font-semibold w-2/3 md:w-1/2">{data.title}</h1>
      </div>
      <div className="size-32 bg-black absolute -bottom-6 -right-3 rotate-[30deg] rounded-md overflow-hidden">
        <img
          src={`/catalogue/image (${idx}).jpg`}
          alt={`Product ${idx}`}
          className="h-full w-full object-cover rotate-[-30deg] scale-150 md:grayscale md:group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Card;
