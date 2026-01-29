"use client";
import { motion } from "framer-motion";

const skills = [
    "TypeScript", "Next.js", "React", "Tailwind CSS",
    "Node.js", "Express", "PostgreSQL", "Prisma",
    "Three.js", "Socket.IO", "Framer Motion", "Supabase",
    "Vercel", "Restful API", "Docker", "Git/GitHub"
];

const experiences = [
    {
        year: "2022 - Present",
        title: "Students majoring in computer science and computer engineering (Honors program)",
        company: "VNU Vietnam Japan University",
        description: "Academic Encouragement Scholarship - 2025."
    },
    {
        year: "9/2025 - 11/2025",
        title: "Web Development Intern",
        company: "DEHA Viet Nam",
        description: "Worked in an Agile/Scrum environment, collaborating with team members to develop web features. Integrated RESTful APIs, implemented CRUD functionalities, and improved frontend–backend interaction while following clean code practices."
    },

];

export default function About() {
    return (
        <section className="py-32 px-6 bg-neutral-50" id="about">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">

                {/* Left Column: Title & Tech Stack */}
                <div className="md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-12 tracking-tight"
                    >
                        Capabilities
                    </motion.h2>

                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-gray-200 px-6 py-3 rounded-lg text-sm font-medium hover:border-black transition-colors cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                    <p className="mt-12 text-gray-600 leading-relaxed max-w-md">
                        I am a Computer Science and Engineering student at VNU Vietnam Japan University. I have a genuine interest in web development and enjoy the process of learning how to build functional, user-friendly interfaces. I am always looking for ways to improve my skills and strive to write clear, maintainable code.
                    </p>
                </div>

                {/* Right Column: Experience Timeline */}
                <div className="md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-12 tracking-tight"
                    >
                        Journey
                    </motion.h2>

                    <div className="flex flex-col gap-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 border-l border-gray-200"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black rounded-full" />

                                <span className="text-sm font-bold text-gray-400 mb-2 block">{exp.year}</span>
                                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                                <h4 className="text-md font-medium text-gray-800 mb-4">{exp.company}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
