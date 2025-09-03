"use client";

import { motion } from "framer-motion";

export default function UserHeaderSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100"
    >
      {/* Avatar skeleton */}
      <div className="w-32 h-32 bg-gray-200 rounded-3xl mx-auto mb-6 animate-pulse" />

      {/* Name skeleton */}
      <div className="h-10 bg-gray-200 rounded-2xl animate-pulse w-64 mx-auto mb-3" />

      {/* Username skeleton */}
      <div className="h-7 bg-gray-200 rounded-xl animate-pulse w-40 mx-auto mb-6" />

      {/* Company and website skeleton */}
      <div className="flex items-center justify-center space-x-8 text-sm">
        <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
          <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-5 bg-gray-200 rounded-lg animate-pulse w-28" />
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
          <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-5 bg-gray-200 rounded-lg animate-pulse w-24" />
        </div>
      </div>
    </motion.div>
  );
}
