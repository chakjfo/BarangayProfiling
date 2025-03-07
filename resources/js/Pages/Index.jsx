import React, { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { Link } from "@inertiajs/react";


const Index = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Barangay Profiling System
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Manage and organize barangay records efficiently.
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            href="/login"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="w-full text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Index;
