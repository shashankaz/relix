interface CardProps {
  data: {
    title: string;
  };
}

const Card = ({ data }: CardProps) => {
  return (
    <div className="h-40 relative overflow-hidden">
      <div className="bg-gray-100 h-full w-full rounded-md p-3">
        <h1 className="text-lg font-semibold w-1/2">{data.title}</h1>
      </div>
      <div className="size-32 bg-black absolute -bottom-6 -right-3 rotate-[30deg] rounded-md"></div>
    </div>
  );
};

export default Card;
