"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tech: string[];
    color: string; // Placeholder for image background
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Z4rum",
        category: "Social Network",
        description: "Z4rum is a modern social media web app. It combines a real-time chat system, anonymous matching like Omegle, and a clean dark UI.",
        tech: ["Next.js", "TypeScript", "Socket.IO", "Tailwind", "Express", "Prisma", "PostgreSQL", "JWT"],
        color: "bg-neutral-100",
        link: "https://z4rum.vercel.app/"
    },
    {
        id: 2,
        title: "Cosmos",
        category: "3D Web App",
        description: "A stunning interactive cosmos exploration platform featuring 3D planetary visualizations and educational content about celestial bodies. This full-stack web application combines beautiful 3D graphics with comprehensive astronomical data.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Radix UI", "Django", "PostgreSQL", "JWT"],
        color: "bg-neutral-200",
        link: "https://github.com/Huy-Nguyen-Chualambo/Cosmos"
    },
    {
        id: 3,
        title: "SkibidiRizz Token (SRT) Testnet",
        category: "Web3",
        description: "SkibidiRizz Token (SRT) is a Web3 decentralized application (dApp) that explores the intersection of modern Internet meme culture and Decentralized Finance (DeFi). The project implements a Task-to-Earn airdrop mechanism, allowing users to engage with social tasks to earn digital assets in a secure, transparent, and gamified environment.",
        tech: ["Solidity", "Hardhat", "Ethers.js", "OpenZeppelin", "Next.js", "Tailwind CSS", "Framer Motion", "JWT", "Cookies", "Supabase", "PostgreSQL", "Prisma ORM", "SIWE", "ECDSA"],
        color: "bg-neutral-100",
        link: "https://skibidi-rizz-coin.vercel.app/"
    },

];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-24 tracking-tighter"
                >
                    Selected Works <span className="text-gray-300">({projects.length})</span>
                </motion.h2>

                <div className="flex flex-col gap-20 md:gap-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group flex flex-col md:flex-row gap-8 md:gap-16 items-center"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`w-full md:w-3/5 aspect-[16/10] ${project.color} overflow-hidden rounded-lg relative`}>
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium tracking-widest uppercase">
                                    Project Image Placeholder
                                </div>
                                {/* Overlay effect on hover */}
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Project Info */}
                            <div className="w-full md:w-2/5 flex flex-col gap-6">
                                <div>
                                    <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:underline decoration-1 underline-offset-8 transition-all">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs font-medium border border-gray-200 px-3 py-1 rounded-full text-gray-600">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all w-fit"
                                >
                                    View Project <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
