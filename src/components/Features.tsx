"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { motion, useInView } from "framer-motion";
import { Recycle, Sparkles, Sprout, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Features() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Recycle,
      title: t.features.circular.title,
      description: t.features.circular.description,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: Sparkles,
      title: t.features.fertilizer.title,
      description: t.features.fertilizer.description,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      image:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074&auto=format&fit=crop",
    },
    {
      icon: Sprout,
      title: t.features.highTech.title,
      description: t.features.highTech.description,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 lg:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#80C242] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url("${feature.image}")` }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent`}
                    />

                    {/* Icon on image with animation */}
                    <motion.div
                      className="absolute bottom-4 left-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className={`inline-flex p-3 rounded-xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <Icon
                          className={`w-8 h-8 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}
                          strokeWidth={2.5}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} animate-pulse`}
                      />
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Read more link */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#80C242] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Tìm hiểu thêm</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
