"use client";

import { motion } from "framer-motion";
import { Mail, Building, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";
import { User } from "@/types/user.types";

interface UserCardProps {
  user: User;
  index: number;
}

export default function UserCard({ user, index }: UserCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:border-blue-200"
    >
      <Link href={`/user/${user.id}`} className="block p-8">
        <div className="flex items-start space-x-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              {user.name.charAt(0)}
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* Name and Username */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                {user.name}
              </h3>
              <p className="text-sm font-medium text-blue-500 bg-blue-50 px-3 py-1 rounded-full inline-block">
                @{user.username}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                <Mail className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                <span className="truncate font-medium">{user.email}</span>
              </div>

              <div className="flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                <Building className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                <span className="truncate font-medium">
                  {user.company.name}
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                <Phone className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                <span className="truncate font-medium">{user.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Website Section */}
        <motion.div
          className="mt-6 pt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Website:</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                {user.website}
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
