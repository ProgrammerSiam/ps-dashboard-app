"use client";

import { motion } from "framer-motion";
import HeaderSkeleton from "./HeaderSkeleton";
import SearchBarSkeleton from "./SearchBarSkeleton";
import ResultsCountSkeleton from "./ResultsCountSkeleton";
import UserCardSkeleton from "./UserCardSkeleton";
import PaginationSkeleton from "./PaginationSkeleton";

export default function PageSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Header Section Skeleton */}
      <HeaderSkeleton />

      {/* Search Section Skeleton */}
      <div className="space-y-6">
        <SearchBarSkeleton />
        <ResultsCountSkeleton />
      </div>

      {/* User Grid Skeleton */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <UserCardSkeleton key={index} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Pagination Skeleton */}
      <div className="pt-8">
        <PaginationSkeleton />
      </div>
    </motion.div>
  );
}
