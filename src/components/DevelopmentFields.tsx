"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";

export default function DevelopmentFields() {
  const { t } = useTranslation();

  return (
    <section id="development" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.developmentFields.title}
          </h2>
          <p className="text-xl text-[#80C242] dark:text-[#80C242]">
            {t.developmentFields.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.developmentFields.fields.map((field, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-[#80C242]/5 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#80C242]"
            >
              <div className="text-6xl mb-6">{field.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {field.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {field.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
