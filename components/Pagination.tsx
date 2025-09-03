"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const visiblePages = pages.filter((page) => {
    if (totalPages <= 7) return true;
    if (page === 1 || page === totalPages) return true;
    if (page >= currentPage - 1 && page <= currentPage + 1) return true;
    return false;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-4"
    >
      {/* Page Info */}
      <div className="text-sm text-gray-600 font-medium">
        Page {currentPage} of {totalPages}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center space-x-2">
        {/* First Page Button */}
        <motion.button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
          whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
          className={`p-3 rounded-xl border-2 transition-all duration-200 ${
            currentPage === 1
              ? "border-gray-200 text-gray-400 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
          }`}
          title="Go to first page"
        >
          <ChevronsLeft className="w-4 h-4" />
        </motion.button>

        {/* Previous Button */}
        <motion.button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
          whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
          className={`p-3 rounded-xl border-2 transition-all duration-200 ${
            currentPage === 1
              ? "border-gray-200 text-gray-400 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
          }`}
          title="Go to previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {visiblePages.map((page, index) => {
            const isCurrentPage = page === currentPage;
            const showEllipsis =
              index > 0 && page - visiblePages[index - 1] > 1;

            return (
              <div key={page} className="flex items-center">
                {showEllipsis && (
                  <span className="px-3 py-2 text-gray-400 font-medium">
                    ...
                  </span>
                )}
                <motion.button
                  onClick={() => onPageChange(page)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-3 rounded-xl border-2 font-medium transition-all duration-200 ${
                    isCurrentPage
                      ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                      : "border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {page}
                </motion.button>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
          whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
          className={`p-3 rounded-xl border-2 transition-all duration-200 ${
            currentPage === totalPages
              ? "border-gray-200 text-gray-400 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
          }`}
          title="Go to next page"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>

        {/* Last Page Button */}
        <motion.button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
          whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
          className={`p-3 rounded-xl border-2 transition-all duration-200 ${
            currentPage === totalPages
              ? "border-gray-200 text-gray-400 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
          }`}
          title="Go to last page"
        >
          <ChevronsRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
