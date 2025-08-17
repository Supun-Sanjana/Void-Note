import Image, { StaticImageData } from "next/image";

interface Props {
  icon: StaticImageData;
  image: StaticImageData;
  description: string;
  user: string;
  role: string;
}

const TestermonialCard = ({ icon, image, description, user, role }: Props) => (
  <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md shadow-lg flex flex-col items-center text-center">
    <Image src={icon} alt="quote" width={24} height={24} className="mb-4" />
    <p className="text-white/80 mb-4">{description}</p>
    <Image src={image} alt={user} width={80} height={80} className="rounded-full mb-2" />
    <h4 className="text-white font-semibold">{user}</h4>
    <span className="text-white/70 text-sm">{role}</span>
  </div>
);

export default TestermonialCard;
