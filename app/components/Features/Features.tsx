import Image, { StaticImageData } from "next/image";
import FeaturesCard from "./FeaturesCard";

import note from "@/public/note.svg";
import taskList from "@/public/list.svg";
import offline from "@/public/offline.svg";
import support from "@/public/support.svg";
import capture from "@/public/capture.svg";
import sync from "@/public/sync.svg";

interface Feature {
  icon: StaticImageData;
  iconBg?: string;
  title: string;
  description: string;
}

const Features = () => {
  const featuresData: Feature[] = [
    {
      icon: note,
      title: "Distraction-Free Notes",
      description:
        "Organize your tasks with simple, drag-and-drop lists tailored to your workflow.",
    },
    {
      icon: taskList,
      title: "Intuitive Task Lists",
      description:
        "Organize your tasks with simple, drag-and-drop lists tailored to your workflow.",
    },
    {
      icon: offline,
      title: "Seamless Offline Mode",
      description:
        "Access your notes and tasks anytime, even without an internet connection.",
    },
    {
      icon: support,
      title: "Markdown Support",
      description:
        "Format your notes with powerful Markdown syntax for richer, more structured content.",
    },
    {
      icon: capture,
      title: "Quick Capture Widgets",
      description:
        "Jot down ideas instantly with desktop widgets, never miss a fleeting thought.",
    },
    {
      icon: sync,
      title: "Cross-Device Sync",
      description:
        "Keep your notes synchronized across all your devices, from desktop to mobile, effortlessly.",
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unleash Your Productivity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <FeaturesCard
              key={index}
              icon={feature.icon}
              iconBg={feature.iconBg}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
