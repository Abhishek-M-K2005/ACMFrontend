import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import Hero from '../ui/Hero';

// --- DUMMY DATA ---
const dummyEvents = [
    {
        id: 1,
        title: "Innovision 2026: Hack the Future",
        date: "October 15-17, 2026",
        time: "48 Hour Hackathon",
        location: "Main Auditorium, NITK",
        category: "Flagship Event",
        description: "Join the largest annual hackathon at NITK. Build cutting-edge solutions using AI, Web3, and Cloud native technologies. Massive prizes to be won!",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "System Design Masterclass",
        date: "September 24, 2026",
        time: "5:30 PM - 7:30 PM",
        location: "LHC-C, Seminar Hall",
        category: "Workshop",
        description: "An intensive teardown of distributed systems. Learn how companies like Netflix and Uber design for scale, fault tolerance, and high availability.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Open Source Contrib-a-thon",
        date: "November 5, 2026",
        time: "10:00 AM - 5:00 PM",
        location: "CCC / Online",
        category: "Community",
        description: "Kickstart your open-source journey. We will be guiding beginners through their first PRs in major repositories, celebrating Hacktoberfest.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
    }
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    },
};

export default function EventsPage() {
    return (
        <main className="flex-grow w-full">
            {/* 1. HERO SECTION */}
            <Hero>
                <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-navy dark:text-white mb-2 transition-colors duration-300">
                    Discover our
                </span>
                <span className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-blue drop-shadow-[0_0_30px_rgba(108,180,238,0.3)] dark:drop-shadow-[0_0_30px_rgba(108,180,238,0.6)]">
                    Events
                </span>
            </Hero>

            {/* 2. EVENTS GRID SECTION */}
            <section className="relative w-full pb-32 px-6 md:px-12 lg:px-24 bg-white text-brand-navy dark:bg-black dark:text-white transition-colors duration-300">

                {/* Ambient Background Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none z-0" />

                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="flex items-center gap-3 mb-16">
                        <div className="h-[1px] w-8 bg-brand-blue"></div>
                        <h2 className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase">
                            Upcoming & Ongoing
                        </h2>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {dummyEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                variants={cardVariants}
                                className="group flex flex-col rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-brand-blue/50 transition-all duration-500 shadow-lg"
                            >
                                {/* Event Image */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-brand-navy/20 dark:bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider uppercase">
                                        {event.category}
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-4 transition-colors duration-300">
                                        {event.title}
                                    </h3>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                            <Calendar className="w-4 h-4 text-brand-blue shrink-0" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                            <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                            <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                        {event.description}
                                    </p>

                                    <button className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-blue uppercase group-hover:text-indigo-400 transition-colors duration-300 mt-auto w-fit">
                                        View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </main>
    );
}