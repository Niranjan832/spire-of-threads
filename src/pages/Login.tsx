
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useState, FormEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // Get the redirect path from location state or default to home
  const from = (location.state as { from?: string })?.from || "/";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    const success = await login(email, password);
    if (success) {
      navigate(from);
    }
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white dark:bg-threadspire-800 rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-threadspire-700 dark:text-threadspire-100">
              Log in to ThreadSpire
            </h1>
            <p className="mt-2 text-threadspire-500 dark:text-threadspire-300">
              Welcome back! Please enter your details.
            </p>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                autoComplete="email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="text-sm text-threadspire-accent-500 hover:text-threadspire-accent-600 dark:hover:text-threadspire-accent-400"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full threadspire-button threadspire-button-primary"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-threadspire-500 dark:text-threadspire-300">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-threadspire-accent-500 hover:text-threadspire-accent-600 dark:hover:text-threadspire-accent-400 font-medium"
              >
                Sign up
              </Link>
            </p>
            
            <p className="mt-4 text-xs text-threadspire-400 dark:text-threadspire-500">
              Demo login: demo@threadspire.com / password123
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
