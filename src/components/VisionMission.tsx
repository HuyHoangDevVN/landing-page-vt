"use client";

import { motion } from "framer-motion";
import { Target, Heart, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function VisionMission() {
  const { t } = useTranslation();

  return (
    <section
      id="vision"
      className="py-20 bg-gradient-to-br from-[#80C242]/5 via-white to-[#80C242]/5 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.visionMission.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-[#80C242]/20 hover:border-[#80C242] transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#80C242] w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#80C242]">
                {t.visionMission.vision.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              {t.visionMission.vision.description}
            </p>
            <ul className="space-y-4">
              {t.visionMission.vision.points.map(
                (point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#80C242] mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {point}
                    </span>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-[#80C242]/20 hover:border-[#80C242] transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#80C242] w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#80C242]">
                {t.visionMission.mission.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              {t.visionMission.mission.description}
            </p>
            <ul className="space-y-4">
              {t.visionMission.mission.points.map(
                (point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#80C242] mr-3 shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {point}
                    </span>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
