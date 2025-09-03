"use client";

import { motion } from "framer-motion";

export default function SearchBarSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="relative">
        {/* Search icon skeleton */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gray-200 rounded-full animate-pulse" />

        {/* Input field skeleton */}
        <div className="w-full h-16 bg-gray-200 rounded-2xl animate-pulse" />

        {/* Filter icon skeleton */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
      </div>

      {/* Search tips skeleton */}
      <div className="mt-3 text-center">
        <div className="h-5 bg-gray-200 rounded-lg animate-pulse w-64 mx-auto" />
      </div>
    </motion.div>
  );
}
