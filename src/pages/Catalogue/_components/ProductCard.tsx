import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  src: string;
}

const ProductCard = ({ src }: ProductCardProps) => {
  const heights = ["h-96", "h-80", "h-72", "h-64", "h-60", "h-56", "h-52"];
  const colors = [
    "bg-stone-300",
    "bg-neutral-300",
    "bg-zinc-300",
    "bg-gray-300",
    "bg-slate-300",
  ];
  const [height, setHeight] = useState(heights[0]);
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const randomHeight = heights[Math.floor(Math.random() * heights.length)];
    setHeight(randomHeight);

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }, []);

  return (
    <div className={cn(height, bgColor, "w-full rounded-2xl overflow-hidden")}>
      <img src={src} className="h-full w-full object-cover text-xs" />
    </div>
  );
};

export default ProductCard;
