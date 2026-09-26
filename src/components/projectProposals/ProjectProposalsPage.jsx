import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Cpu, Wrench, Briefcase, ArrowRight } from 'lucide-react';
import Hero from '../ui/Hero';

// Hardcoded SIG data referencing your public/images folder
const sigs = [
    {
        id: "sanganitra",
        name: "Sanganitra",
        focus: "Software & Web Development",
        description: "Explore proposals involving scalable web architectures, AI/ML models, and cutting-edge software solutions.",
        image: "/logos/sanganitra.png",
        icon: Code2
    },
    {
        id: "yantrika",
        name: "Yantrika",
        focus: "Robotics & Mechanics",
        description: "Dive into the world of autonomous rovers, mechanical design, and core engineering project proposals.",
        image: "/logos/yantrika.png",
        icon: Wrench
    },
    {
        id: "vidyuth",
        name: "Vidyuth",
        focus: "Electronics & IoT",
        description: "Review proposals focused on embedded systems, IoT infrastructure, and hardware-software interfacing.",
        image: "/logos/vidyuth.png",
        icon: Cpu
    },
    {
        id: "karyavarta",
        name: "Karyavarta",
        focus: "Management & Strategy",
        description: "Discover strategic initiatives, product management proposals, and cross-disciplinary operations.",
        image: "/logos/karyavarta.png",
        icon: Briefcase
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function ProjectProposalsPage() {
    return (
        <main className="flex-grow w-full">
            <Hero>
                <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-navy dark:text-white mb-2 transition-colors duration-300">
                    Explore our
                </span>
                <span className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-blue drop-shadow-[0_0_30px_rgba(108,180,238,0.3)] dark:drop-shadow-[0_0_30px_rgba(108,180,238,0.6)]">
                    Proposals
                </span>
            </Hero>

            <section className="relative w-full pb-32 px-6 md:px-12 lg:px-24 bg-white text-brand-navy dark:bg-black dark:text-white transition-colors duration-300">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-16">
                        <div className="h-[1px] w-8 bg-brand-blue"></div>
                        <h2 className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase">
                            Filter by Yantra (SIG)
                        </h2>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {sigs.map((sig) => {
                            // 1. Assign the icon to a Capitalized variable!
                            const Icon = sig.icon;

                            return (
                                <motion.div variants={cardVariants} key={sig.id}>
                                    <Link to="/documents" className="group flex flex-col md:flex-row h-full rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-brand-blue/50 transition-all duration-500 shadow-lg">

                                        {/* SIG Image */}
                                        <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden shrink-0">
                                            <div className="absolute inset-0 bg-brand-navy/30 dark:bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                            <img
                                                src={sig.image}
                                                alt={`${sig.name} Cover`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out fallback-bg"
                                                style={{ backgroundColor: '#1e293b' }}
                                            />
                                            <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                                {/* 2. Render it using the Capitalized variable */}
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex flex-col justify-center flex-grow">
                                            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-1 transition-colors duration-300">
                                                {sig.name}
                                            </h3>
                                            <p className="text-xs font-bold tracking-widest text-brand-blue uppercase mb-4">
                                                {sig.focus}
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                                {sig.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-blue uppercase mt-auto">
                                                View Proposals <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
