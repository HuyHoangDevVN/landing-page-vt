"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, ChevronDown } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  const scrollToNext = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=2071&auto=format&fit=crop")',
          }}
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 dark:from-black/70 dark:via-black/60 dark:to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#80C242]/20 to-transparent" />
      </div>

      {/* Animated decorations */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#80C242]/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#80C242]/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#80C242] rounded-full blur-xl opacity-50"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-[#80C242] to-[#6AA635] rounded-full flex items-center justify-center">
                <Leaf className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-[#80C242] font-semibold mb-4 drop-shadow-md"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-white/90 mb-10 max-w-2xl drop-shadow-md"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <button
              className="group px-10 py-5 bg-gradient-to-r from-[#80C242] to-[#6AA635] text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-[#80C242]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ring-2 ring-white/20 hover:ring-white/40"
              onClick={scrollToNext}
              aria-label="Khám phá ngay"
            >
              {t.hero.cta}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={scrollToNext}
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-full border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105"
              aria-label="Tìm hiểu thêm"
            >
              {t.hero.learnMore}
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mb-12"
          >
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-10 h-10 rounded-full bg-[#80C242] flex items-center justify-center font-bold text-white text-lg shadow-lg">
                ✓
              </div>
              <span className="text-sm sm:text-base font-medium">
                100% Hữu cơ
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-10 h-10 rounded-full bg-[#80C242] flex items-center justify-center font-bold text-white text-lg shadow-lg">
                ✓
              </div>
              <span className="text-sm sm:text-base font-medium">
                Công nghệ cao
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-10 h-10 rounded-full bg-[#80C242] flex items-center justify-center font-bold text-white text-lg shadow-lg">
                ✓
              </div>
              <span className="text-sm sm:text-base font-medium">
                Truy xuất nguồn gốc
              </span>
            </div>
          </motion.div>

          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-[#80C242] transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
