
export type User = {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  bio?: string;
  createdAt: string;
};

export type ThreadSegment = {
  id: string;
  content: string;
  order: number;
  reactions: Record<ReactionType, number>;
};

export type Thread = {
  id: string;
  title: string;
  authorId: string;
  author: User;
  segments: ThreadSegment[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
  totalBookmarks: number;
  totalForks: number;
  originalThreadId?: string;
  originalAuthor?: User;
};

export type ThreadCard = {
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  authorAvatarUrl?: string;
  previewSegments: string[];
  tags: string[];
  createdAt: string;
  totalBookmarks: number;
  totalForks: number;
  totalReactions: number;
};

export type Collection = {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  threadIds: string[];
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ReactionType = "mind_blown" | "light_bulb" | "relaxed" | "fire" | "heart";

export type ReactionEmoji = {
  type: ReactionType;
  emoji: string;
  label: string;
};

export const REACTION_EMOJIS: ReactionEmoji[] = [
  { type: "mind_blown", emoji: "🤯", label: "Mind Blown" },
  { type: "light_bulb", emoji: "💡", label: "Light Bulb" },
  { type: "relaxed", emoji: "😌", label: "Relaxed" },
  { type: "fire", emoji: "🔥", label: "Fire" },
  { type: "heart", emoji: "🫶", label: "Heart" },
];

export type SortOption = 'most_bookmarked' | 'most_forked' | 'newest';

export type UserStats = {
  threadsCreated: number;
  bookmarksReceived: number;
  reactionsReceived: number;
  mostForkedThread?: {
    id: string;
    title: string;
    forkCount: number;
  };
  topReactedSegment?: {
    threadId: string;
    threadTitle: string;
    segmentContent: string;
    reactionCount: number;
  };
  threadActivity: {
    date: string;
    count: number;
  }[];
};
