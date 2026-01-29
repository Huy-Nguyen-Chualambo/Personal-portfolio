"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Background decoration - subtle gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-50/50 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm md:text-base text-gray-500 uppercase tracking-[0.2em] mb-6 block font-medium"
        >
          Frontend Developer
        </motion.span>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-black">
          Hello, I&apos;m <br className="md:hidden" /> Huy.
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          A <span className="text-black font-medium">passionate</span> and <span className="text-black font-medium">enthusiastic</span> young developer.
          Currently seeking <span className="text-black font-medium">Intern/Fresher</span> opportunities.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 group cursor-pointer"
          >
            See My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-black border border-gray-200 px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 hover:border-black transition-colors cursor-pointer"
          >
            Download CV
            <Download size={20} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
