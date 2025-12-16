"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { motion, useInView } from "framer-motion";
import { Building2, Shield, Sprout, TrendingUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Counter animation component
function AnimatedCounter({
  end,
  duration = 2,
}: {
  end: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(end.replace(/\D/g, ""));
  const suffix = end.replace(/[\d,]/g, "");
  const isValidNumber = Number.isFinite(numericValue);

  useEffect(() => {
    if (!isInView || !isValidNumber) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(numericValue * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count > 0 && count?.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  const { t } = useTranslation();

  const iconMap = {
    0: Building2,
    1: Sprout,
    2: TrendingUp,
    3: Shield,
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1587735243495-95d52a7c7822?q=80&w=2070&auto=format&fit=crop")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {t.about.title}
                </h2>
                <p className="text-xl md:text-2xl text-[#80C242] font-semibold mb-4">
                  {t.about.subtitle}
                </p>
                <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
                  {t.about.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.about.highlights.map((highlight, index: number) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-br from-[#80C242]/10 to-white dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border-2 border-[#80C242]/20 hover:border-[#80C242] transition-all duration-300 hover:shadow-2xl cursor-pointer"
              >
                <motion.div
                  className="bg-gradient-to-br from-[#80C242] to-[#6AA635] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl group-hover:shadow-[#80C242]/50 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-3 text-center">
                  {highlight.title}
                </h3>

                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#80C242] to-[#6AA635] mb-3 text-center">
                  <AnimatedCounter end={highlight?.value} />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
