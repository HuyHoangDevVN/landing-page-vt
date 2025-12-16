"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function GreenJourney() {
  const { t } = useTranslation();

  return (
    <section id="journey" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.greenJourney.title}
          </h2>
          <p className="text-xl text-[#80C242] dark:text-[#80C242]">
            {t.greenJourney.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#80C242] to-[#6AA635] hidden md:block" />

          <div className="space-y-12">
            {t.greenJourney.milestones.map((milestone, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-5/12">
                  <div className="bg-gradient-to-br from-white to-[#80C242]/5 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#80C242]">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-5 h-5 text-[#80C242] mr-2" />
                      <span className="text-2xl font-bold text-[#80C242]">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-[#80C242] rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10" />
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
