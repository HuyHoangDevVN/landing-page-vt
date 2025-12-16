"use client";

import { motion } from "framer-motion";
import { Handshake, Building, Users2, Store } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function PartnersCustomers() {
  const { t } = useTranslation();

  const iconMap = {
    0: Building,
    1: Users2,
    2: Store,
  };

  return (
    <section
      id="partners"
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
          <div className="flex items-center justify-center mb-6">
            <Handshake className="w-16 h-16 text-[#80C242]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.partners.title}
          </h2>
          <p className="text-xl text-[#80C242] dark:text-[#80C242]">
            {t.partners.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.partners.categories.map((category, index: number) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#80C242]"
              >
                <div className="bg-gradient-to-br from-[#80C242] to-[#6AA635] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.partners.map((partner: string, pIndex: number) => (
                    <motion.li
                      key={pIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: pIndex * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 bg-[#80C242] rounded-full mr-3 mt-2 shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {partner}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#80C242]/10 to-transparent dark:from-gray-800 dark:to-transparent px-8 py-4 rounded-full border-2 border-[#80C242]/30">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              🌟 Tin cậy bởi{" "}
              <span className="text-[#80C242] font-bold">100+</span> đối tác và
              khách hàng trên toàn quốc
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
