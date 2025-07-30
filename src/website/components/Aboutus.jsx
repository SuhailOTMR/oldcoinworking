import React from 'react';
import { FaBolt, FaGlobe, FaGamepad, FaGift, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const features = [
    {
        icon: <FaBolt className="text-yellow-400 text-3xl" />,
        title: "Instant Payouts",
        description: "No delays, no hidden conditions — get your rewards instantly."
    },
    {
        icon: <FaGlobe className="text-green-400 text-3xl" />,
        title: "Global & Local Friendly",
        description: "From Delhi to Dallas — localized payouts for everyone, everywhere."
    },
    {
        icon: <FaGamepad className="text-pink-400 text-3xl" />,
        title: "Gamified Experience",
        description: "Earn with fun — lucky spins, streaks, loot boxes & more!"
    },
    {
        icon: <FaGift className="text-red-400 text-3xl" />,
        title: "Premium Offer Wall",
        description: "High-paying, reliable offers from top global brands."
    },
    {
        icon: <FaShieldAlt className="text-blue-400 text-3xl" />,
        title: "Safe & Transparent",
        description: "Zero spam. Zero bots. Just secure and honest rewards."
    },
    {
        icon: <FaUsers className="text-purple-400 text-3xl" />,
        title: "Community-Powered",
        description: "Real feedback, real stories, real support — your voice matters."
    }
];

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <section className="bg-[#141524] text-white py-16 px-6 md:px-20" style={{ paddingTop: "140px" }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h2 className="text-4xl font-extrabold mb-4" style={{ color: "#FFA900" }}>About Coinlooty</h2>
                <p className="text-lg mb-8  ">
                    Turn your time into treasure. Instantly. At Coinlooty, we believe your attention is valuable — and we make sure you get paid for it.
                </p>

                {/* Mission */}
                <div className=" p-6 rounded-xl border border-white/10 mb-12" style={{ backgroundColor: "#1E1E2E" }}>
                    <h3 className="text-2xl font-semibold mb-2" style={{ color: "#FFA900" }}>💡 Our Mission</h3>
                    <p>
                        To create a trusted, user-first, global rewards ecosystem where everyone — from students and gamers to influencers and casual users — can monetize their time effortlessly and enjoyably.
                    </p>
                </div>

                {/* Features */}
                <h3 className="text-2xl font-bold  mb-6" style={{ color: "#FFA900" }}>🚀 What Makes Coinlooty Different?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <div key={index} className=" p-5 rounded-xl border border-white/10 hover:scale-105 transition-all duration-300" style={{ backgroundColor: "#1E1E2E" }}>
                            <div className="mb-4">{feature.icon}</div>
                            <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                            <p className="text-sm text-white/80">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Who is it for */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#FFA900" }}>🌟 Who Is Coinlooty For?</h3>
                    <ul className="list-disc list-inside text-white/90 space-y-1">
                        <li>Students looking to earn extra pocket money</li>
                        <li>Gamers who want in-game currency or rewards</li>
                        <li>App explorers who love testing new tools</li>
                        <li>Influencers & creators who want to refer and earn</li>
                        <li>Anyone with a phone and free time!</li>
                    </ul>
                </div>

                {/* Final Words */}
                <div className=" p-6 rounded-xl border border-white/10" style={{ backgroundColor: "#1E1E2E" }}>
                    <h3 className="text-2xl font-semibold  mb-2" style={{ color: "#FFA900" }}>💬 Final Words</h3>
                    <p className="mb-2">
                        Coinlooty isn’t just another “earn coins” app — it’s a revolution in how digital time is valued. We’ve made earning online simple, safe, and seriously rewarding.
                    </p>
                    <p className="font-semibold text-green-300">
                        Join thousands who’ve discovered the smarter way to earn. Welcome to Coinlooty — where every tap counts.
                    </p>
                </div>
                <div className="text-center mt-10" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Link to="/" className="text-amber-400 underline hover:text-amber-300" style={{ display: "flex", textDecoration: "none" }}>
                        <IoMdArrowRoundBack style={{ fontSize: "22px" }} />Back to home
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
