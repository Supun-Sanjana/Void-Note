import Image, { StaticImageData } from "next/image";

interface FeaturesCardProps {
  icon: StaticImageData;
  iconBg?: string;
  title: string;
  description: string;
}

const FeaturesCard = ({ icon, iconBg, title, description }: FeaturesCardProps) => {
  return (
    <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-200">
      <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 ${iconBg}`}>
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default FeaturesCard;
