import { Link } from "@inertiajs/react";


const Index = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Barangay Profiling System
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage and organize barangay records efficiently.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Total Population */}
          <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Total Population</h4>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">12,345</div>
          </div>

          {/* Card 2: Registered Residents */}
          <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Registered Residents</h4>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">10,234</div>
          </div>

          {/* Card 3: Active Services */}
          <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Active Services</h4>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">8</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/login"
            className="w-1/2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="w-1/2 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Index;
