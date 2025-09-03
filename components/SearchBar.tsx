"use client";

import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onClear: () => void;
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
  onClear,
}: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="relative group">
        {/* Search Icon */}
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors duration-200" />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search users by name, email, or company..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full text-black/90 pl-12 pr-16 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md focus:shadow-lg text-lg placeholder-gray-400 focus:placeholder-gray-300"
        />

        {/* Clear Button */}
        {searchTerm && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClear}
            className="absolute right-4 top-4 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Clear search"
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}

       
      </div>

      {/* Search Tips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-3 text-center"
      >
        <p className="text-sm text-gray-500">
          💡 Try searching by name, email, or company name
        </p>
      </motion.div>
    </motion.div>
  );
}
