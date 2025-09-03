"use client";

import { motion } from "framer-motion";

export default function ResultsCountSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-center"
    >
      <div className="h-8 bg-gray-200 rounded-full animate-pulse w-56 mx-auto" />
    </motion.div>
  );
}
