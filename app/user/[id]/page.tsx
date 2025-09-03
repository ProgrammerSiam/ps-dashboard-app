"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Layout from "@/components/Layout";
import UserDetailsSkeleton from "@/skeletons/UserDetailsSkeleton";
import { fetchUserById } from "@/utils/api";
import { User } from "@/types/user.types";
import {
  Mail,
  Phone,
  Globe,
  Building,
  User as UserIcon,
  Navigation,
  ExternalLink,
  Briefcase,
  Map,
} from "lucide-react";
import Link from "next/link";

export default function UserDetailsPage() {
  const params = useParams();
  const userId = parseInt(params.id as string);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchUserById(userId);
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    if (userId) {
      loadUser();
    }
  }, [userId]);

  if (loading) {
    return (
      <Layout showBackButton backUrl="/" title="Loading User...">
        <UserDetailsSkeleton />
      </Layout>
    );
  }

  if (error || !user) {
    return (
      <Layout showBackButton backUrl="/" title="User Not Found">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 px-4"
        >
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-red-700 text-xl font-semibold mb-3">
              {error || "User not found"}
            </div>
            <div className="text-red-600 mb-6 leading-relaxed">
              The user you&apos;re looking for doesn&apos;t exist or
              couldn&apos;t be loaded.
            </div>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-200 font-medium"
            >
              Back to Dashboard
            </Link>
          </div>
        </motion.div>
      </Layout>
    );
  }

  return (
    <Layout showBackButton backUrl="/" title={user.name}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-8"
      >
        {/* User Header Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center text-white text-5xl font-bold mx-auto mb-6 shadow-2xl">
            {user.name.charAt(0)}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
            {user.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">@{user.username}</p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium">
              <Building className="w-4 h-4" />
              {user.company.name}
            </span>
            <span className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium">
              <Globe className="w-4 h-4" />
              <Link href={"https://" + user.website}>
                {user.website}
              </Link>         
                 </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-xl">
                <UserIcon className="w-6 h-6 text-blue-600" />
              </div>
              <span>Contact Information</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-200">
                <Mail className="w-6 h-6 text-gray-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    Email Address
                  </div>
                  <div className="text-gray-900 font-semibold break-all">
                   
                   <Link href={"mailto:" + user.email} target="_blank">{user.email}</Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-200">
                <Phone className="w-6 h-6 text-gray-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    Phone Number
                  </div>
                  <div className="text-gray-900 font-semibold">
                   
                   <Link href={"tel:" + user.phone} target="_blank">{user.phone}</Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-200">
                <Globe className="w-6 h-6 text-gray-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    Website
                  </div>
                  <div className="text-blue-600 font-semibold flex items-center space-x-2">
                    
                    <Link href={"https://" + user.website} target="_blank">{user.website}</Link>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Company Information Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-xl">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <span>Company Details</span>
            </h2>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Company Name
                </div>
                <div className="text-gray-900 font-semibold text-lg">
                  {user.company.name}
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Catch Phrase
                </div>
                <div className="text-gray-900 italic text-lg leading-relaxed">
                  &quot;{user.company.catchPhrase}&quot;
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Business Strategy
                </div>
                <div className="text-gray-900 leading-relaxed">
                  {user.company.bs}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Address Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-xl">
                <Map className="w-6 h-6 text-purple-600" />
              </div>
              <span>Address Information</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    Street Address
                  </div>
                  <div className="text-gray-900 font-semibold">
                    {user.address.street}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    Suite/Unit
                  </div>
                  <div className="text-gray-900 font-semibold">
                    {user.address.suite}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    City
                  </div>
                  <div className="text-gray-900 font-semibold">
                    {user.address.city}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    Zip Code
                  </div>
                  <div className="text-gray-900 font-semibold">
                    {user.address.zipcode}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    Geographic Coordinates
                  </div>
                  <div className="text-gray-900 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Navigation className="w-4 h-4 text-gray-400" />
                      <span className="font-semibold">
                        Latitude: {user.address.geo.lat}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <Navigation className="w-4 h-4 text-gray-400" />
                      <span className="font-semibold">
                        Longitude: {user.address.geo.lng}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
