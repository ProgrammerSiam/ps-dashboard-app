"use client";

import { motion } from "framer-motion";
import UserHeaderSkeleton from "./UserHeaderSkeleton";
import InfoCardSkeleton from "./InfoCardSkeleton";

export default function UserDetailsSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto space-y-8"
    >
      {/* User Header Skeleton */}
      <UserHeaderSkeleton />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information Skeleton */}
        <InfoCardSkeleton delay={0.2} />

        {/* Company Information Skeleton */}
        <InfoCardSkeleton delay={0.3} />

        {/* Address Information Skeleton */}
        <InfoCardSkeleton delay={0.4} isFullWidth />
      </div>
    </motion.div>
  );
}
