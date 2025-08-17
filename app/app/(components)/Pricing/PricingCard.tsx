"use client";

import Image, { StaticImageData } from "next/image";
import tick from "@/public/tick.svg"; // move tick.svg to /public
import { useRouter } from "next/navigation";

interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  button: string;
  featured: boolean;
}


const PricingCard = ({
  title,
  price,
  duration,
  features,
  button,
  featured,
}: PricingCardProps) => {


const route = useRouter();

  return (
    <div
      className={`
        relative bg-white/10 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300
        w-full max-w-sm h-full flex flex-col
        sm:w-80 lg:w-96 mt-8 sm:mt-20
        ${featured
          ? "border-blue-400 shadow-xl shadow-blue-400/20 lg:scale-105 lg:-translate-y-4"
          : "border-white/20 hover:border-white/40"
        }
      `}
    >
      {/* Popular Badge for Featured Plan */}
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#676BEB] text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Title */}
      <h2 className="text-white text-xl font-semibold mb-2 text-center">{title}</h2>

      {/* Price Section */}
      <div className="text-white mb-6 text-center">
        <div className="text-3xl sm:text-4xl font-bold mb-1">{price}</div>
        <div className="text-white/70 text-sm">{duration}</div>
      </div>

      {/* Features List */}
      <ul className="text-white/80 mb-8 space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Image src={tick} alt="check icon" width={20} height={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`
          w-full font-semibold py-3 px-4 cursor-pointer rounded-lg transition-all duration-300 text-sm sm:text-base
          ${featured
            ? "bg-[#676BEB] hover:bg-[#5a5ed6] text-white shadow-lg"
            : "bg-white/10 hover:bg-white/20 text-white border border-white/30"
          }
        `}
        onClick={() => {route.push("/registration")}}
      >
        {button}
      </button>
    </div>
  );
};

export default PricingCard;
