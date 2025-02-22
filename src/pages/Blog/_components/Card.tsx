import { Link } from "react-router";

interface CardProps {
  category: string;
  date: string;
  title: string;
  description: string;
  author: string;
  coverImg: string;
  profileImg: string;
  slug: string;
}

const Card = ({
  category,
  date,
  title,
  description,
  author,
  coverImg,
  profileImg,
  slug,
}: CardProps) => {
  return (
    <Link to={`/blog/${slug}`}>
      <div className="h-96 p-3 rounded-xl border border-black hover:cursor-pointer">
        <div className="h-3/5 bg-black rounded-xl mb-3 overflow-hidden">
          <img
            src={coverImg}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="h-2/5 flex flex-col justify-between pb-3">
          <div className="flex justify-between items-center">
            <h6 className="bg-black text-white px-2 py-1 w-fit rounded-sm text-xs">
              {category}
            </h6>
            <span className="text-xs font-light">{date}</span>
          </div>
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <p className="text-sm line-clamp-2">{description}</p>

          <div className="flex items-center gap-2 mt-1">
            <div className="bg-black rounded-full size-7 overflow-hidden">
              <img
                src={profileImg}
                alt={author}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-sm">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
