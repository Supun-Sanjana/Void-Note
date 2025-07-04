import React from 'react';
import FeaturesCard from './FeaturesCard';
import note from '../../../Images/note-icon.png';
import taskList from '../../../Images/tak-list.png';
import offline from '../../../Images/offline.png';
import support from '../../../Images/support.png';
import capture from '../../../Images/capture.png';
import sync from '../../../Images/sync.png';


const Features = () => {
    const featuresData = [
        {
            icon: note,
            iconBg: "w-[24px] h-[24px] ",
            title: "Distraction-Free Notes",
            description: "Organize your tasks with simple, drag-and-drop lists tailored to your workflow."
        },
        {
            icon: taskList,
            iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
            title: "Intuitive Task Lists",
            description: "Organize your tasks with simple, drag-and-drop lists tailored to your workflow."
        },
        {
            icon: offline,
            iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
            title: "Seamless Offline Mode",
            description: "Access your notes and tasks anytime, even without an internet connection."
        },
        {
            icon: support,
            iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
            title: "Markdown Support",
            description: "Format your notes with powerful Markdown syntax for richer, more structured content."
        },
        {
            icon: capture,
            iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
            title: "Quick Capture Widgets",
            description: "Jot down ideas instantly with desktop widgets, never miss a fleeting thought."
        },
        {
            icon: sync,
            iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
            title: "Cross-Device Sync",
            description: "Keep your notes synchronized across all your devices, from desktop to mobile, effortlessly.."
        },
        // Add more features...
    ];

    return (
        <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Unleash Your Productivity
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
                 ">
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