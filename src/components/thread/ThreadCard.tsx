
import { ThreadCard as ThreadCardType } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { BookmarkIcon, MessagesSquare, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

interface ThreadCardProps {
  thread: ThreadCardType;
}

export function ThreadCard({ thread }: ThreadCardProps) {
  const formattedDate = formatDistanceToNow(new Date(thread.createdAt), {
    addSuffix: true,
  });

  return (
    <Link to={`/thread/${thread.id}`}>
      <article className="thread-card p-6 mb-6 transition-all hover:translate-y-[-2px]">
        <h2 className="text-2xl font-serif font-bold text-threadspire-700 dark:text-threadspire-100 mb-3">
          {thread.title}
        </h2>
        
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 mr-2">
            {thread.authorAvatarUrl ? (
              <img
                src={thread.authorAvatarUrl}
                alt={thread.authorName}
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-threadspire-200 dark:bg-threadspire-700 flex items-center justify-center">
                <span className="text-xs font-medium">
                  {thread.authorName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div className="text-sm text-threadspire-500 dark:text-threadspire-300">
            <span className="font-medium">{thread.authorName}</span>
            <span className="mx-1">·</span>
            <span>{formattedDate}</span>
          </div>
        </div>
        
        <div className="mb-4">
          {thread.previewSegments.map((segment, index) => (
            <p 
              key={index} 
              className="text-threadspire-600 dark:text-threadspire-200 mb-2 line-clamp-2"
            >
              {segment}
            </p>
          ))}
          <p className="text-threadspire-accent-500 font-medium text-sm mt-2">
            Read more...
          </p>
        </div>
        
        <div className="flex flex-wrap mb-4">
          {thread.tags.map((tag) => (
            <span
              key={tag}
              className="tagPill bg-threadspire-100 text-threadspire-600 dark:bg-threadspire-700 dark:text-threadspire-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-sm text-threadspire-500 dark:text-threadspire-300">
          <div className="flex items-center mr-4">
            <BookmarkIcon className="h-4 w-4 mr-1" />
            <span>{thread.totalBookmarks}</span>
          </div>
          <div className="flex items-center mr-4">
            <RefreshCw className="h-4 w-4 mr-1" />
            <span>{thread.totalForks}</span>
          </div>
          <div className="flex items-center">
            <MessagesSquare className="h-4 w-4 mr-1" />
            <span>{thread.totalReactions}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
