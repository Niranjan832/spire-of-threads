
import { REACTION_EMOJIS, ReactionType } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ReactionButtonProps {
  type: ReactionType;
  count: number;
  isActive?: boolean;
  onToggle: (type: ReactionType) => void;
  disabled?: boolean;
}

export function ReactionButton({
  type,
  count,
  isActive = false,
  onToggle,
  disabled = false,
}: ReactionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const reaction = REACTION_EMOJIS.find((r) => r.type === type);
  if (!reaction) return null;
  
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        "reaction-button",
        isActive && "reaction-button-active",
        isHovered && "scale-110",
        "transition-transform"
      )}
      onClick={(e) => {
        e.preventDefault();
        onToggle(type);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
    >
      <span className="mr-1">{reaction.emoji}</span>
      <span className="text-xs">{count}</span>
    </Button>
  );
}
