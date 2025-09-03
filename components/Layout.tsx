"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home, Users } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  backUrl?: string;
  title?: string;
}

export default function Layout({
  children,
  showBackButton = false,
  backUrl = "/",
  title,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-6">
              {showBackButton && (
                <Link
                  href={backUrl}
                  className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              )}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl group-hover:scale-110 transition-transform duration-200">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    User Dashboard
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    Manage your users
                  </span>
                </div>
              </Link>
            </div>
            {title && (
              <motion.h1
                className="text-xl font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.h1>
            )}
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        {children}
      </main>

   
    </div>
  );
}
