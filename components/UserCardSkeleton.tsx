"use client";

import { motion } from "framer-motion";

interface UserCardSkeletonProps {
  index: number;
}

export default function UserCardSkeleton({ index }: UserCardSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
    >
      <div className="p-8">
        <div className="flex items-start space-x-6">
          {/* Avatar skeleton */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl animate-pulse" />
          </div>

          <div className="flex-1 min-w-0 space-y-4">
            {/* Name and Username skeleton */}
            <div className="space-y-2">
              <div className="h-7 bg-gray-200 rounded-xl animate-pulse w-3/4" />
              <div className="h-6 bg-gray-200 rounded-full animate-pulse w-1/3" />
            </div>

            {/* Info rows skeleton */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-2/3" />
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-1/2" />
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-3/4" />
              </div>
            </div>
          </div>
        </div>

        {/* Website skeleton */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-16" />
            <div className="flex items-center space-x-2">
              <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-20" />
              <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
