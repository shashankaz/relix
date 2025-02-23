import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  src: string;
  alt: string;
}

const ProductCard = ({ src, alt }: ProductCardProps) => {
  const heights = ["h-96", "h-80", "h-72", "h-64", "h-60", "h-56", "h-52"];
  const [height, setHeight] = useState(heights[0]);

  useEffect(() => {
    const randomHeight = heights[Math.floor(Math.random() * heights.length)];
    setHeight(randomHeight);
  }, []);

  return (
    <div
      className={cn(height, "w-full rounded-2xl overflow-hidden bg-gray-300")}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
};

export default ProductCard;
