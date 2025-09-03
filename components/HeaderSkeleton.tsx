"use client";

import { motion } from "framer-motion";

export default function HeaderSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6"
    >
      {/* Main title skeleton */}
      <div className="h-16 bg-gray-200 rounded-2xl animate-pulse w-80 mx-auto" />

      {/* Description skeleton */}
      <div className="h-7 bg-gray-200 rounded-xl animate-pulse w-96 mx-auto" />
    </motion.div>
  );
}
