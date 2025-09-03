"use client";

import { motion } from "framer-motion";

interface InfoCardSkeletonProps {
  delay: number;
  isFullWidth?: boolean;
}

export default function InfoCardSkeleton({
  delay,
  isFullWidth = false,
}: InfoCardSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-3xl shadow-xl p-8 border border-gray-100 ${
        isFullWidth ? "lg:col-span-2" : ""
      }`}
    >
      {/* Title skeleton */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gray-100 rounded-xl">
          <div className="w-6 h-6 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <div className="h-7 bg-gray-200 rounded-xl animate-pulse w-40" />
      </div>

      {/* Content skeleton */}
      <div className="space-y-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-2xl space-y-2">
            <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-24" />
            <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-full" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
