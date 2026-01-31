"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background text-foreground py-24 px-6 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
                >
                    Let&apos;s work together.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mb-12"
                >
                    Currently open for internship and fresher opportunities. <br />
                    Feel free to reach out if you want to collaborate!
                </motion.p>

                <motion.a
                    href="https://www.facebook.com/huynguyen.122011/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-foreground text-background px-10 py-4 rounded-full font-bold text-lg mb-20 hover:opacity-90 transition-opacity"
                >
                    Say Hello
                </motion.a>

                <div className="w-full h-px bg-gray-200 dark:bg-white/10 mb-12" />

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Huy Nguyen. All Rights Reserved.
                    </p>

                    <div className="flex gap-6">
                        {[Github].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="https://github.com/Huy-Nguyen-Chualambo"
                                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                        {[Linkedin].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="https://www.linkedin.com/in/nguyen-xuan-huy-31180833a/"
                                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                        {[Facebook].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="https://www.facebook.com/huynguyen.122011/"
                                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon size={20} />
                            </a>
                        ))}

                    </div>
                </div>
            </div>
        </footer>
    );
}
