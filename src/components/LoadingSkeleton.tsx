"use client";

import { motion } from "framer-motion";

export function ImageSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 dark:bg-gray-700 rounded-2xl w-full h-full" />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6 animate-pulse"
    >
      <div className="flex flex-col gap-4">
        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto" />
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto" />
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto" />
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
      </div>
    </motion.div>
  );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-300 dark:bg-gray-700 rounded"
          style={{ width: `${Math.random() * 30 + 70}%` }}
        />
      ))}
    </div>
  );
}
