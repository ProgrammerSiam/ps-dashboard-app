"use client";

import { motion } from "framer-motion";

export default function PaginationSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-4"
    >
      {/* Page info skeleton */}
      <div className="h-5 bg-gray-200 rounded-lg animate-pulse w-24" />

      {/* Pagination controls skeleton */}
      <div className="flex items-center justify-center space-x-2">
        {/* First page button skeleton */}
        <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse" />

        {/* Previous button skeleton */}
        <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse" />

        {/* Page numbers skeleton */}
        <div className="flex space-x-1">
          <div className="w-14 h-12 bg-gray-200 rounded-xl animate-pulse" />
          <div className="w-14 h-12 bg-gray-200 rounded-xl animate-pulse" />
          <div className="w-14 h-12 bg-gray-200 rounded-xl animate-pulse" />
        </div>

        {/* Next button skeleton */}
        <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse" />

        {/* Last page button skeleton */}
        <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse" />
      </div>
    </motion.div>
  );
}
