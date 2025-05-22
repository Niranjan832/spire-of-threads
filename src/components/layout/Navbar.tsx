
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun, Menu, X, BookMarked, User } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-threadspire-800 border-b border-gray-200 dark:border-threadspire-700 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-serif font-bold text-threadspire-600 dark:text-threadspire-100">
                Thread<span className="text-threadspire-accent-500">Spire</span>
              </h1>
            </Link>
            <div className="hidden sm:ml-6 sm:flex space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/explore"
                className="px-3 py-2 rounded-md text-sm font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700 transition-colors"
              >
                Explore
              </Link>
            </div>
          </div>

          {/* Right side nav items */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {isAuthenticated ? (
              <>
                <Link to="/create">
                  <Button className="threadspire-button threadspire-button-secondary">
                    New Thread
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="rounded-full h-8 w-8 overflow-hidden border border-gray-200 dark:border-threadspire-600"
                    >
                      {user?.avatarUrl ? (
                        <img
                          src={user.avatarUrl}
                          alt={user.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => navigate("/profile")}>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/collections")}>
                      My Collections
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/bookmarks")}>
                      Bookmarks
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/analytics")}>
                      Analytics
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button className="threadspire-button threadspire-button-primary">Sign up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full mr-2"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-threadspire-800 border-b border-gray-200 dark:border-threadspire-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="block px-3 py-2 rounded-md text-base font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700"
              onClick={toggleMobileMenu}
            >
              Explore
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/create"
                  className="block px-3 py-2 rounded-md text-base font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700"
                  onClick={toggleMobileMenu}
                >
                  New Thread
                </Link>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700"
                  onClick={toggleMobileMenu}
                >
                  Profile
                </Link>
                <Link
                  to="/collections"
                  className="block px-3 py-2 rounded-md text-base font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700"
                  onClick={toggleMobileMenu}
                >
                  My Collections
                </Link>
                <Link
                  to="/bookmarks"
                  className="block px-3 py-2 rounded-md text-base font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700"
                  onClick={toggleMobileMenu}
                >
                  Bookmarks
                </Link>
                <Link
                  to="/analytics"
                  className="block px-3 py-2 rounded-md text-base font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700"
                  onClick={toggleMobileMenu}
                >
                  Analytics
                </Link>
                <button
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700"
                  onClick={() => {
                    logout();
                    toggleMobileMenu();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700"
                  onClick={toggleMobileMenu}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium text-threadspire-500 dark:text-threadspire-50 hover:text-threadspire-700 hover:bg-gray-100 dark:hover:bg-threadspire-700"
                  onClick={toggleMobileMenu}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
