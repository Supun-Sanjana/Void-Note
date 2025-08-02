// Pricing.jsx
import React from 'react'
import PricingCard from './PricingCard'

const Pricing = () => {
    const prices = [
        {
            title: "Free",
            price: "$0",
            duration: "per month",
            features: [
                "Basic task management",
                "Unlimited notes",
                "Offline access",
                "Standard themes",
                "Community support"
            ],
            button: "Get Started Free",
            featured: false
        },
        {
            title: "Pro",
            price: "$4.99",
            duration: "per month",
            features: [
                "Advanced task management",
                "Smart notifications",
                "Cloud syncing",
                "Premium themes",
                "Priority support",
                "Cross-device syncing"
            ],
            button: "Start 7-Day Free Trial",
            featured: true
        },
        {
            title: "Premium",
            price: "$9.99",
            duration: "per month",
            features: [
                "All Pro features",
                "Collaborative lists",
                "Custom integration",
                "Dedicated account manager",
                "Early access to new features"
            ],
            button: "Get Premium Access",
            featured: false
        }
    ]

    return (
        <div className='relative z-10 px-4 sm:px-6 lg:px-8 py-20'>
            {/* Header Section */}
            <div className="text-center mb-xl">
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4'>
                    Simple Plans for Focused Productivity
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4">
                    Choose the plan that best fits your needs and unlock your full potential with VoidNote.
                </p>
            </div>

            {/* Cards Container */}
            <div className='flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto '>
                {prices.map((price, index)=>(
                    <PricingCard key={index} {...price} />
                ))}
            </div>
        </div>
    )
}

export default Pricing