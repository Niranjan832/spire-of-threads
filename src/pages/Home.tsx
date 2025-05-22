
import { Layout } from "@/components/layout/Layout";
import { ThreadCard } from "@/components/thread/ThreadCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { fetchFeaturedThreads } from "@/services/mockDataService";
import { ThreadCard as ThreadCardType } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [featuredThreads, setFeaturedThreads] = useState<ThreadCardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedThreads = async () => {
      try {
        setIsLoading(true);
        const threads = await fetchFeaturedThreads();
        setFeaturedThreads(threads);
      } catch (error) {
        console.error("Failed to load featured threads:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeaturedThreads();
  }, []);

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-gradient-to-b from-threadspire-100 to-white dark:from-threadspire-900 dark:to-threadspire-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-threadspire-700 dark:text-white leading-tight mb-6">
              Community Wisdom
              <span className="block text-threadspire-accent-500">
                Thoughtfully Shared
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-threadspire-600 dark:text-threadspire-200 mb-8 max-w-3xl mx-auto">
              Not rants or tweets, but structured insights worth keeping. Create, share, and collect wisdom threads.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/explore">
                <Button className="threadspire-button threadspire-button-primary text-lg px-8 py-6">
                  Explore Threads
                </Button>
              </Link>
              {!isAuthenticated && (
                <Link to="/register">
                  <Button className="threadspire-button threadspire-button-secondary text-lg px-8 py-6">
                    Join ThreadSpire
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured threads section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-threadspire-700 dark:text-threadspire-100">
              Featured Wisdom
            </h2>
            <Link
              to="/explore"
              className="text-threadspire-accent-500 hover:text-threadspire-accent-600 dark:hover:text-threadspire-accent-400 font-medium"
            >
              View all
            </Link>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="thread-card p-6 animate-pulse"
                >
                  <div className="h-7 bg-gray-200 dark:bg-threadspire-700 rounded mb-4"></div>
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-threadspire-700 mr-2"></div>
                    <div className="h-4 w-24 bg-gray-200 dark:bg-threadspire-700 rounded"></div>
                  </div>
                  <div className="mb-4 space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-threadspire-700 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-threadspire-700 rounded"></div>
                  </div>
                  <div className="flex mb-4 space-x-2">
                    <div className="h-6 w-16 bg-gray-200 dark:bg-threadspire-700 rounded-full"></div>
                    <div className="h-6 w-16 bg-gray-200 dark:bg-threadspire-700 rounded-full"></div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="h-4 w-8 bg-gray-200 dark:bg-threadspire-700 rounded"></div>
                    <div className="h-4 w-8 bg-gray-200 dark:bg-threadspire-700 rounded"></div>
                    <div className="h-4 w-8 bg-gray-200 dark:bg-threadspire-700 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredThreads.slice(0, 3).map((thread) => (
                <ThreadCard key={thread.id} thread={thread} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How it works section */}
      <section className="py-16 bg-gray-50 dark:bg-threadspire-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-threadspire-700 dark:text-threadspire-100 text-center mb-12">
            How ThreadSpire Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-threadspire-800 p-6 rounded-lg shadow-md">
              <div className="text-threadspire-accent-500 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-serif font-bold text-threadspire-700 dark:text-threadspire-100 mb-3">
                Create Thread
              </h3>
              <p className="text-threadspire-600 dark:text-threadspire-300">
                Structure your insights into connected segments that flow naturally from one to the next. Add a title and relevant tags.
              </p>
            </div>
            
            <div className="bg-white dark:bg-threadspire-800 p-6 rounded-lg shadow-md">
              <div className="text-threadspire-accent-500 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-serif font-bold text-threadspire-700 dark:text-threadspire-100 mb-3">
                React & Bookmark
              </h3>
              <p className="text-threadspire-600 dark:text-threadspire-300">
                Express appreciation for specific segments with emoji reactions. Save threads to your personal library for later reference.
              </p>
            </div>
            
            <div className="bg-white dark:bg-threadspire-800 p-6 rounded-lg shadow-md">
              <div className="text-threadspire-accent-500 text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-serif font-bold text-threadspire-700 dark:text-threadspire-100 mb-3">
                Remix & Organize
              </h3>
              <p className="text-threadspire-600 dark:text-threadspire-300">
                Fork threads to create your own version, adding your perspective. Organize threads into collections by theme or purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-threadspire-600 dark:bg-threadspire-700 rounded-lg overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to share your wisdom?
              </h2>
              <p className="text-xl text-threadspire-100 mb-8 max-w-2xl mx-auto">
                Join a community focused on thoughtful sharing and meaningful engagement. No noise, just signal.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {isAuthenticated ? (
                  <Link to="/create">
                    <Button className="threadspire-button threadspire-button-secondary text-lg px-6 py-4">
                      Create Your First Thread
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/register">
                      <Button className="threadspire-button threadspire-button-secondary text-lg px-6 py-4">
                        Sign Up Now
                      </Button>
                    </Link>
                    <Link to="/explore">
                      <Button variant="outline" className="bg-white text-threadspire-600 hover:bg-gray-100 text-lg px-6 py-4">
                        Browse Threads
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
