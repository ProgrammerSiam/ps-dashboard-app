"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import UserCard from "@/components/UserCard";
import Pagination from "@/components/Pagination";
import PageSkeleton from "@/skeletons/PageSkeleton";
import { useUsers } from "@/hooks/useUsers";
import { useSearch } from "@/hooks/useSearch";
import { paginateUsers } from "@/utils/api";

const USERS_PER_PAGE = 6;

export default function HomePage() {
  const { users, loading, error } = useUsers();
  const { searchTerm, setSearchTerm, filteredUsers, clearSearch } =
    useSearch(users);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to first page when search changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { users: paginatedUsers, totalPages } = paginateUsers(
    filteredUsers,
    currentPage,
    USERS_PER_PAGE
  );

  if (loading) {
    return (
      <Layout>
        <PageSkeleton />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 px-4"
        >
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-red-700 text-xl font-semibold mb-3">
              Error Loading Users
            </div>
            <div className="text-red-600 mb-6 leading-relaxed">{error}</div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Try Again
            </button>
          </div>
        </motion.div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Header Section */}
        <div className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            User Dashboard 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Discover and manage user information with our intuitive dashboard
            interface
          </motion.p>
        </div>

        {/* Search Section */}
        <div className="space-y-6">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onClear={clearSearch}
          />

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            {searchTerm ? (
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                <span>
                  Found {filteredUsers.length} user
                  {filteredUsers.length !== 1 ? "s" : ""} for &quot;{searchTerm}
                  &quot;
                </span>
              </div>
            ) : (
              <div className="inline-flex items-center px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-medium">
                <span>Showing all {users.length} users</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* User Grid Section */}
        {paginatedUsers.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedUsers.map((user, index) => (
                <UserCard key={user.id} user={user} index={index} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center py-16"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12 max-w-md mx-auto">
              <div className="text-gray-500 text-xl font-medium mb-4">
                No users found
              </div>
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="px-6 py-3 text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium border border-blue-200 rounded-xl hover:bg-blue-50"
                >
                  Clear search
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div className="pt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </motion.div>
    </Layout>
  );
}
