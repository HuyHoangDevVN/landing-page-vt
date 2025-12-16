"use client";

import { motion } from "framer-motion";
import { Leaf, Factory, Plane, Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function OperationFields() {
  const { t } = useTranslation();

  const iconMap = {
    0: Leaf,
    1: Factory,
    2: Plane,
    3: Users,
  };

  return (
    <section
      id="operations"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.operationFields.title}
          </h2>
          <p className="text-xl text-[#80C242] dark:text-[#80C242]">
            {t.operationFields.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.operationFields.fields.map((field, index: number) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#80C242] group"
              >
                <div className="absolute top-0 right-0 bg-[#80C242] text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl font-bold">
                  {field.stats}
                </div>
                <div className="bg-gradient-to-br from-[#80C242] to-[#6AA635] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {field.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {field.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
