"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { Building2, Shield, Sprout, TrendingUp } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.about.title}
          </h2>
          <p className="text-xl text-[#80C242] dark:text-[#80C242] font-semibold mb-6">
            {t.about.subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
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
                className="bg-gradient-to-br from-[#80C242]/10 to-white dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border-2 border-[#80C242]/20 hover:border-[#80C242] transition-all duration-300 hover:shadow-xl"
              >
                <div className="bg-[#80C242] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2 text-center">
                  {highlight.title}
                </h3>
                <div className="text-4xl font-bold text-[#80C242] mb-2 text-center">
                  {highlight.value}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-center">
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
