
import { ThreadSegment as ThreadSegmentType, ReactionType } from "@/types";
import { ReactionButton } from "./ReactionButton";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ThreadSegmentProps {
  segment: ThreadSegmentType;
  onReact?: (segmentId: string, type: ReactionType) => void;
  userReactions?: ReactionType[];
  isAuthenticated?: boolean;
  showReactions?: boolean;
  className?: string;
}

export function ThreadSegment({
  segment,
  onReact,
  userReactions = [],
  isAuthenticated = false,
  showReactions = true,
  className,
}: ThreadSegmentProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleReaction = (type: ReactionType) => {
    if (onReact) {
      onReact(segment.id, type);
    }
  };

  // Function to convert markdown-like content to HTML
  const formatContent = (content: string) => {
    // Convert **bold** to <strong>bold</strong>
    let formattedContent = content.replace(
      /\*\*(.*?)\*\*/g,
      "<strong>$1</strong>"
    );
    
    // Convert numbered lists
    formattedContent = formattedContent.replace(
      /(\d+)\.\s+(.*?)(?=(\n\d+\.|$))/g,
      "<div class='flex mb-2'><span class='mr-2'>$1.</span><span>$2</span></div>"
    );
    
    // Replace newlines with breaks
    formattedContent = formattedContent.replace(/\n/g, "<br />");
    
    return formattedContent;
  };

  return (
    <div 
      className={cn(
        "thread-segment", 
        isHovered && "bg-gray-50 dark:bg-threadspire-800/50",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: formatContent(segment.content) }}
      />
      
      {showReactions && (
        <div className="mt-4 flex flex-wrap gap-2">
          {Object.entries(segment.reactions).map(([type, count]) => (
            <ReactionButton
              key={type}
              type={type as ReactionType}
              count={count}
              isActive={userReactions.includes(type as ReactionType)}
              onToggle={handleReaction}
              disabled={!isAuthenticated}
            />
          ))}
        </div>
      )}
    </div>
  );
}
