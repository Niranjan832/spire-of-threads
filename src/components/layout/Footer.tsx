
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-threadspire-800 border-t border-gray-200 dark:border-threadspire-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-threadspire-600 dark:text-threadspire-100 mb-4">
              ThreadSpire
            </h3>
            <p className="text-sm text-threadspire-500 dark:text-threadspire-300 mb-4">
              A thoughtful corner of the internet for sharing wisdom and insights
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-threadspire-600 dark:text-threadspire-100 mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-threadspire-500 dark:text-threadspire-300 hover:text-threadspire-700 dark:hover:text-threadspire-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="text-sm text-threadspire-500 dark:text-threadspire-300 hover:text-threadspire-700 dark:hover:text-threadspire-100"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/create"
                  className="text-sm text-threadspire-500 dark:text-threadspire-300 hover:text-threadspire-700 dark:hover:text-threadspire-100"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-threadspire-600 dark:text-threadspire-100 mb-4">
              Account
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/login"
                  className="text-sm text-threadspire-500 dark:text-threadspire-300 hover:text-threadspire-700 dark:hover:text-threadspire-100"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-sm text-threadspire-500 dark:text-threadspire-300 hover:text-threadspire-700 dark:hover:text-threadspire-100"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-threadspire-700 mt-8 pt-6 text-center">
          <p className="text-sm text-threadspire-500 dark:text-threadspire-300">
            © {new Date().getFullYear()} ThreadSpire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
