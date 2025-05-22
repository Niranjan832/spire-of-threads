import { Collection, ReactionType, Thread, ThreadCard, User, UserStats } from "../types";

// Sample users
const users: User[] = [
  {
    id: "user1",
    email: "sophia@example.com",
    name: "Sophia Chen",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    bio: "Product manager with a passion for thoughtful design and user experience.",
    createdAt: "2023-01-15T08:30:00Z",
  },
  {
    id: "user2",
    email: "marcus@example.com",
    name: "Marcus Johnson",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    bio: "Leadership coach and writer exploring the intersection of technology and humanity.",
    createdAt: "2023-02-20T14:15:00Z",
  },
  {
    id: "user3",
    email: "aisha@example.com",
    name: "Aisha Patel",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    bio: "Software engineer and mindfulness practitioner. I write about productivity and focus.",
    createdAt: "2023-03-10T11:45:00Z",
  },
  // Current user will be added from auth context
  {
    id: "current-user",
    email: "you@example.com",
    name: "You",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    bio: "Wisdom seeker and collector.",
    createdAt: "2023-05-01T09:20:00Z",
  }
];

// Sample threads
const threads: Thread[] = [
  {
    id: "thread1",
    title: "The 5 Mental Models That Changed My Life",
    authorId: "user1",
    author: users[0],
    segments: [
      {
        id: "segment1-1",
        content: "Mental models are frameworks for thinking. They simplify complex situations so you can reason through them intuitively. Over the years, I've collected dozens, but these five have transformed how I make decisions daily.",
        order: 0,
        reactions: { "mind_blown": 24, "light_bulb": 18, "relaxed": 5, "fire": 12, "heart": 8 }
      },
      {
        id: "segment1-2",
        content: "1. **Inversion**: Instead of asking 'How do I solve this problem?', ask 'How do I avoid making it worse?' Thinking backwards identifies non-obvious solutions and prevents errors. For every decision, I consider: 'What would ensure the worst possible outcome?', then avoid those actions.",
        order: 1,
        reactions: { "mind_blown": 31, "light_bulb": 27, "relaxed": 3, "fire": 15, "heart": 9 }
      },
      {
        id: "segment1-3",
        content: "2. **Circle of Competence**: Know the boundaries of your knowledge. The most dangerous decisions happen at the edge of your expertise, where you have just enough knowledge to feel confident but not enough to be accurate. I now ask: 'Is this genuinely within my circle of competence?' before making major decisions.",
        order: 2,
        reactions: { "mind_blown": 18, "light_bulb": 33, "relaxed": 7, "fire": 9, "heart": 12 }
      },
      {
        id: "segment1-4",
        content: "3. **Probabilistic Thinking**: Life isn't black and white, but shades of probability. Instead of asking 'Will this work?', I now ask 'What's the probability this will work? And what's the magnitude of the outcome?' This prevents binary thinking and improves risk assessment.",
        order: 3,
        reactions: { "mind_blown": 21, "light_bulb": 19, "relaxed": 4, "fire": 7, "heart": 5 }
      },
      {
        id: "segment1-5",
        content: "4. **Opportunity Costs**: Every 'yes' is a 'no' to something else. Time and resources spent on one option mean those resources aren't available for another. I regularly audit my commitments by asking, 'If I didn't already own this / do this / commit to this, how much would I pay to acquire it now?'",
        order: 4,
        reactions: { "mind_blown": 26, "light_bulb": 23, "relaxed": 8, "fire": 14, "heart": 10 }
      },
      {
        id: "segment1-6",
        content: "5. **Compounding**: Small actions, consistently taken, yield enormous results given enough time. The most powerful results in life come from consistent small improvements. I've shifted focus from grand gestures to sustainable daily habits with this understanding.",
        order: 5,
        reactions: { "mind_blown": 29, "light_bulb": 31, "relaxed": 12, "fire": 18, "heart": 22 }
      },
    ],
    tags: ["mental-models", "decision-making", "productivity"],
    createdAt: "2023-08-15T09:45:00Z",
    updatedAt: "2023-08-15T09:45:00Z",
    isPublished: true,
    totalBookmarks: 127,
    totalForks: 43
  },
  {
    id: "thread2",
    title: "How I Built a Second Brain",
    authorId: "user3",
    author: users[2],
    segments: [
      {
        id: "segment2-1",
        content: "Information overload is the defining challenge of our era. We consume 5x more information daily than people did in 1986. After years of struggling to retain what I learn, I built a 'Second Brain' - a personal knowledge management system that changed everything.",
        order: 0,
        reactions: { "mind_blown": 15, "light_bulb": 22, "relaxed": 7, "fire": 9, "heart": 11 }
      },
      {
        id: "segment2-2",
        content: "The fundamental principle: **Don't try to remember everything**. Our brains evolved for creative connections, not storage. My system has four components, which I call CODE: Capture, Organize, Distill, Express.",
        order: 1,
        reactions: { "mind_blown": 18, "light_bulb": 27, "relaxed": 6, "fire": 12, "heart": 8 }
      },
      {
        id: "segment2-3",
        content: "**1. Capture**: I save anything potentially useful—quotes, ideas, observations, screenshots—into a digital tool. The key is having a frictionless capture system. My rule: if something resonates, save it immediately. Don't overthink whether you'll need it; that creates decision fatigue.",
        order: 2, 
        reactions: { "mind_blown": 13, "light_bulb": 19, "relaxed": 5, "fire": 8, "heart": 7 }
      },
      {
        id: "segment2-4",
        content: "**2. Organize**: I use PARA—Projects, Areas, Resources, Archives. Projects are active with deadlines. Areas are ongoing responsibilities. Resources are topics of interest. Archives are completed or inactive items. Everything goes into one of these four categories.",
        order: 3,
        reactions: { "mind_blown": 22, "light_bulb": 26, "relaxed": 4, "fire": 11, "heart": 9 }
      },
      {
        id: "segment2-5",
        content: "**3. Distill**: The magic happens here. For notes I want to keep, I highlight the key points. For articles, I write a 1-paragraph summary. For books, I extract the main ideas. This creates a personal knowledge library that's easily searchable and digestible.",
        order: 4,
        reactions: { "mind_blown": 19, "light_bulb": 24, "relaxed": 6, "fire": 10, "heart": 8 }
      },
      {
        id: "segment2-6",
        content: "**4. Express**: Creation becomes easier when you're remixing existing ideas rather than starting from scratch. When writing an article or preparing a presentation, I search my second brain for relevant notes and assemble them as a starting point.",
        order: 5,
        reactions: { "mind_blown": 16, "light_bulb": 21, "relaxed": 7, "fire": 9, "heart": 12 }
      },
      {
        id: "segment2-7",
        content: "The true value isn't just organization—it's connecting ideas across domains. When your digital notes reach critical mass, unexpected connections emerge. The Second Brain doesn't just store information; it generates insights that wouldn't occur to you otherwise.",
        order: 6,
        reactions: { "mind_blown": 24, "light_bulb": 29, "relaxed": 8, "fire": 14, "heart": 13 }
      }
    ],
    tags: ["productivity", "knowledge-management", "note-taking"],
    createdAt: "2023-09-03T14:20:00Z",
    updatedAt: "2023-09-05T08:10:00Z",
    isPublished: true,
    totalBookmarks: 215,
    totalForks: 76
  },
  {
    id: "thread3",
    title: "Career Advice I Wish I'd Received at 25",
    authorId: "user2",
    author: users[1],
    segments: [
      {
        id: "segment3-1",
        content: "After 20 years navigating corporate leadership, founding startups, and coaching executives, I've learned career lessons I wish someone had told me at 25. Here's what I'd tell my younger self:",
        order: 0,
        reactions: { "mind_blown": 8, "light_bulb": 17, "relaxed": 5, "fire": 11, "heart": 14 }
      },
      {
        id: "segment3-2",
        content: "**Optimize for learning, not earning in your 20s.** The skills, perspectives, and connections you build early compound dramatically. I turned down a higher-paying role for one where I'd learn a new industry. That knowledge became invaluable later. Your 20s are for acquiring career capital; monetization comes later.",
        order: 1,
        reactions: { "mind_blown": 22, "light_bulb": 31, "relaxed": 9, "fire": 17, "heart": 23 }
      },
      {
        id: "segment3-3",
        content: "**Your network is your career insurance policy.** Technical skills get outdated, but relationships don't. I made the mistake of network-building only when job hunting. Now I invest 3-5 hours weekly in relationships regardless of need. The best opportunities in my career came through 2nd and 3rd-degree connections.",
        order: 2,
        reactions: { "mind_blown": 19, "light_bulb": 26, "relaxed": 7, "fire": 13, "heart": 15 }
      },
      {
        id: "segment3-4",
        content: "**Rare and valuable combinations create career moats.** Specialists are vulnerable to change; polymaths are adaptable. Develop skills in two complementary domains. I combined psychology with data analytics, creating a specialized niche. These intersections are where innovation happens and competition thins out.",
        order: 3,
        reactions: { "mind_blown": 27, "light_bulb": 24, "relaxed": 6, "fire": 16, "heart": 11 }
      },
      {
        id: "segment3-5",
        content: "**Writing well is a career superpower.** Clear writing demonstrates clear thinking. Whether crafting proposals, documentation, or emails, strong writing distinguishes you. I've seen average performers leapfrog more technically skilled peers through communication ability alone.",
        order: 4,
        reactions: { "mind_blown": 18, "light_bulb": 29, "relaxed": 8, "fire": 14, "heart": 19 }
      },
      {
        id: "segment3-6",
        content: "**Career trajectories aren't linear; they're stepwise functions.** Progress happens in jumps after plateaus. There were years where my skills and income barely changed, followed by rapid advancement. During plateaus, keep building skills and relationships. The jump is coming.",
        order: 5,
        reactions: { "mind_blown": 23, "light_bulb": 26, "relaxed": 11, "fire": 18, "heart": 16 }
      },
      {
        id: "segment3-7",
        content: "**The most successful people I know are simply willing to be uncomfortable more often.** They ask questions others don't, take calculated risks, have difficult conversations, and pursue ambitious goals. Discomfort is the price of growth. Get comfortable being uncomfortable.",
        order: 6,
        reactions: { "mind_blown": 31, "light_bulb": 33, "relaxed": 12, "fire": 27, "heart": 23 }
      }
    ],
    tags: ["career", "career-advice", "leadership", "personal-growth"],
    createdAt: "2023-07-22T11:40:00Z",
    updatedAt: "2023-07-22T11:40:00Z", 
    isPublished: true,
    totalBookmarks: 187,
    totalForks: 59
  },
  {
    id: "thread4",
    title: "My Framework for Deep Work in a Distracted World",
    authorId: "user3",
    author: users[2],
    segments: [
      {
        id: "segment4-1",
        content: "We're living through a grand experiment: what happens when you give humans godlike access to information and connection while optimizing for distraction? The result: fractured attention and diminished ability to think deeply. Here's the system I've built to protect my cognitive abilities:",
        order: 0,
        reactions: { "mind_blown": 14, "light_bulb": 23, "relaxed": 6, "fire": 11, "heart": 9 }
      },
      {
        id: "segment4-2",
        content: "**The Deep Work Formula: Time × Intensity × Recovery = Insight**. Deep work isn't just about setting aside hours, but ensuring both intense focus and sufficient recovery. My approach centers on all three variables.",
        order: 1,
        reactions: { "mind_blown": 19, "light_bulb": 27, "relaxed": 8, "fire": 12, "heart": 11 }
      },
      {
        id: "segment4-3",
        content: "**First, time blocking.** My calendar has 2-3 hour blocks labeled 'Deep Work' scheduled 3-4 days in advance. These are non-negotiable appointments with myself. I work in 90-minute cycles (aligned with ultradian rhythms) with 30-minute breaks between. This replaced my previous ad-hoc approach.",
        order: 2,
        reactions: { "mind_blown": 12, "light_bulb": 31, "relaxed": 7, "fire": 9, "heart": 8 }
      },
      {
        id: "segment4-4",
        content: "**Second, intensity enablers:** Before each deep work session, I follow a 15-minute ritual: clear desk, fill water bottle, set phone to 'Do Not Disturb', close unnecessary tabs, and write the specific outcome I'm seeking. During sessions, I use noise-canceling headphones playing instrumental music. I track focus scores after each session.",
        order: 3,
        reactions: { "mind_blown": 16, "light_bulb": 29, "relaxed": 11, "fire": 8, "heart": 13 }
      },
      {
        id: "segment4-5",
        content: "**Third, strategic recovery:** Between deep work blocks, I take true breaks—no email, social media, or reactive tasks. Instead: walking outside, light stretching, or breathing exercises. These aren't luxury items but cognitive necessities that prevent diminishing returns.",
        order: 4,
        reactions: { "mind_blown": 21, "light_bulb": 25, "relaxed": 19, "fire": 6, "heart": 17 }
      },
      {
        id: "segment4-6",
        content: "**Fourth, environment design:** I've created two physical spaces: one for deep work (minimal, no phone allowed) and another for shallow work. This environmental separation creates psychological triggers that prime my brain for different modes of thinking.",
        order: 5,
        reactions: { "mind_blown": 18, "light_bulb": 23, "relaxed": 9, "fire": 7, "heart": 11 }
      },
      {
        id: "segment4-7",
        content: "**Monthly focus audit:** On the last Friday of each month, I analyze my calendar against RescueTime data to see if my intended deep work time matched reality. This accountability prevents self-deception and guides adjustments.",
        order: 6,
        reactions: { "mind_blown": 15, "light_bulb": 22, "relaxed": 7, "fire": 10, "heart": 9 }
      },
      {
        id: "segment4-8",
        content: "The capacity for sustained concentration is becoming increasingly rare and increasingly valuable. In a world engineered for distraction, protecting this ability isn't just productivity advice—it's a radical act of self-preservation.",
        order: 7,
        reactions: { "mind_blown": 24, "light_bulb": 26, "relaxed": 8, "fire": 17, "heart": 21 }
      }
    ],
    tags: ["productivity", "deep-work", "focus"],
    createdAt: "2023-10-14T16:30:00Z", 
    updatedAt: "2023-10-15T08:45:00Z",
    isPublished: true,
    totalBookmarks: 172,
    totalForks: 53
  },
];

// Sample collections
const collections: Collection[] = [
  {
    id: "collection1",
    name: "Career Wisdom",
    description: "Insights on professional growth and leadership",
    ownerId: "current-user",
    threadIds: ["thread3"],
    isPublic: true,
    createdAt: "2023-10-20T14:30:00Z",
    updatedAt: "2023-10-20T14:30:00Z"
  },
  {
    id: "collection2",
    name: "Productivity Hacks",
    description: "Methods for getting more done with less stress",
    ownerId: "current-user",
    threadIds: ["thread2", "thread4"],
    isPublic: false,
    createdAt: "2023-11-05T09:15:00Z",
    updatedAt: "2023-11-07T11:20:00Z"
  }
];

// Map threads to thread cards
const mapThreadToCard = (thread: Thread): ThreadCard => {
  const previewSegments = thread.segments.slice(0, 2).map(segment => segment.content);
  const totalReactions = thread.segments.reduce((total, segment) => {
    return total + Object.values(segment.reactions).reduce((sum, count) => sum + count, 0);
  }, 0);
  
  return {
    id: thread.id,
    title: thread.title,
    authorId: thread.authorId,
    authorName: thread.author.name,
    authorAvatarUrl: thread.author.avatarUrl,
    previewSegments,
    tags: thread.tags,
    createdAt: thread.createdAt,
    totalBookmarks: thread.totalBookmarks,
    totalForks: thread.totalForks,
    totalReactions
  };
};

const threadCards: ThreadCard[] = threads.map(mapThreadToCard);

// Mock user bookmarks and reactions
const userBookmarks: Record<string, string[]> = {
  "current-user": ["thread1", "thread3"]
};

const userReactions: Record<string, Record<string, ReactionType[]>> = {
  "current-user": {
    "segment1-1": ["light_bulb", "fire"],
    "segment3-2": ["mind_blown"],
    "segment3-7": ["fire"]
  }
};

// Mock service functions
export const fetchFeaturedThreads = async (): Promise<ThreadCard[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...threadCards].sort((a, b) => b.totalBookmarks - a.totalBookmarks));
    }, 500);
  });
};

export const fetchThreadsByTags = async (tags: string[]): Promise<ThreadCard[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredThreads = threadCards.filter(thread => 
        tags.length === 0 || tags.some(tag => thread.tags.includes(tag))
      );
      resolve(filteredThreads);
    }, 500);
  });
};

export const fetchThreadById = async (threadId: string): Promise<Thread | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const thread = threads.find(t => t.id === threadId) || null;
      resolve(thread);
    }, 300);
  });
};

export const fetchUserCollections = async (userId: string): Promise<Collection[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userCollections = collections.filter(c => c.ownerId === userId);
      resolve(userCollections);
    }, 400);
  });
};

export const fetchUserBookmarks = async (userId: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userBookmarks[userId] || []);
    }, 200);
  });
};

export const fetchUserReactions = async (userId: string): Promise<Record<string, ReactionType[]>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userReactions[userId] || {});
    }, 200);
  });
};

export const addBookmark = async (userId: string, threadId: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!userBookmarks[userId]) {
        userBookmarks[userId] = [];
      }
      if (!userBookmarks[userId].includes(threadId)) {
        userBookmarks[userId].push(threadId);
        const thread = threads.find(t => t.id === threadId);
        if (thread) {
          thread.totalBookmarks += 1;
        }
      }
      resolve();
    }, 300);
  });
};

export const removeBookmark = async (userId: string, threadId: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (userBookmarks[userId]) {
        userBookmarks[userId] = userBookmarks[userId].filter(id => id !== threadId);
        const thread = threads.find(t => t.id === threadId);
        if (thread && thread.totalBookmarks > 0) {
          thread.totalBookmarks -= 1;
        }
      }
      resolve();
    }, 300);
  });
};

export const addReaction = async (
  userId: string, 
  segmentId: string, 
  reactionType: ReactionType
): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Update user reactions
      if (!userReactions[userId]) {
        userReactions[userId] = {};
      }
      if (!userReactions[userId][segmentId]) {
        userReactions[userId][segmentId] = [];
      }
      if (!userReactions[userId][segmentId].includes(reactionType)) {
        userReactions[userId][segmentId].push(reactionType);
        
        // Update thread segment reactions
        for (const thread of threads) {
          const segment = thread.segments.find(s => s.id === segmentId);
          if (segment) {
            segment.reactions[reactionType] += 1;
            break;
          }
        }
      }
      resolve();
    }, 300);
  });
};

export const removeReaction = async (
  userId: string, 
  segmentId: string, 
  reactionType: ReactionType
): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Update user reactions
      if (userReactions[userId] && userReactions[userId][segmentId]) {
        userReactions[userId][segmentId] = userReactions[userId][segmentId].filter(
          type => type !== reactionType
        );
        
        // Update thread segment reactions
        for (const thread of threads) {
          const segment = thread.segments.find(s => s.id === segmentId);
          if (segment && segment.reactions[reactionType] > 0) {
            segment.reactions[reactionType] -= 1;
            break;
          }
        }
      }
      resolve();
    }, 300);
  });
};

export const fetchUserStats = async (userId: string): Promise<UserStats> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Find user's threads
      const userThreads = threads.filter(thread => thread.authorId === userId);
      
      // Calculate total bookmarks received
      const bookmarksReceived = userThreads.reduce(
        (total, thread) => total + thread.totalBookmarks, 
        0
      );
      
      // Calculate total reactions received
      let reactionsReceived = 0;
      userThreads.forEach(thread => {
        thread.segments.forEach(segment => {
          reactionsReceived += Object.values(segment.reactions).reduce(
            (sum, count) => sum + count, 
            0
          );
        });
      });
      
      // Find most forked thread
      let mostForkedThread;
      if (userThreads.length > 0) {
        const mostForked = userThreads.reduce(
          (prev, current) => prev.totalForks > current.totalForks ? prev : current,
          userThreads[0]
        );
        mostForkedThread = {
          id: mostForked.id,
          title: mostForked.title,
          forkCount: mostForked.totalForks
        };
      }
      
      // Find top reacted segment
      let topReactedSegment;
      let maxReactions = 0;
      userThreads.forEach(thread => {
        thread.segments.forEach(segment => {
          const totalReactions = Object.values(segment.reactions).reduce(
            (sum, count) => sum + count, 
            0
          );
          if (totalReactions > maxReactions) {
            maxReactions = totalReactions;
            topReactedSegment = {
              threadId: thread.id,
              threadTitle: thread.title,
              segmentContent: segment.content,
              reactionCount: totalReactions
            };
          }
        });
      });
      
      // Generate thread activity data (last 6 months)
      const threadActivity = [];
      const today = new Date();
      for (let i = 5; i >= 0; i--) {
        const month = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const monthThreads = userThreads.filter(thread => {
          const threadDate = new Date(thread.createdAt);
          return threadDate.getMonth() === month.getMonth() && 
                 threadDate.getFullYear() === month.getFullYear();
        });
        
        threadActivity.push({
          date: month.toISOString().split('T')[0].substring(0, 7), // YYYY-MM format
          count: monthThreads.length
        });
      }
      
      resolve({
        threadsCreated: userThreads.length,
        bookmarksReceived,
        reactionsReceived,
        mostForkedThread,
        topReactedSegment,
        threadActivity
      });
    }, 600);
  });
};

// Available tags for filtering
export const availableTags = [
  "mental-models", 
  "decision-making", 
  "productivity", 
  "knowledge-management", 
  "note-taking",
  "career", 
  "career-advice", 
  "leadership", 
  "personal-growth",
  "deep-work", 
  "focus"
];

export const createNewThread = async (
  userId: string,
  title: string,
  segments: Omit<ThreadSegment, "reactions">[],
  tags: string[],
  isPublished: boolean = false
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newThreadId = `thread${threads.length + 1}`;
      const user = users.find(u => u.id === userId) || users[0];
      
      const newThread: Thread = {
        id: newThreadId,
        title,
        authorId: userId,
        author: user,
        segments: segments.map(segment => ({
          ...segment,
          reactions: { "mind_blown": 0, "light_bulb": 0, "relaxed": 0, "fire": 0, "heart": 0 }
        })),
        tags,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isPublished,
        totalBookmarks: 0,
        totalForks: 0
      };
      
      threads.push(newThread);
      threadCards.push(mapThreadToCard(newThread));
      
      resolve(newThreadId);
    }, 800);
  });
};

export const updateThread = async (
  threadId: string,
  updates: Partial<{
    title: string;
    segments: Omit<ThreadSegment, "reactions">[];
    tags: string[];
    isPublished: boolean;
  }>
): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const threadIndex = threads.findIndex(t => t.id === threadId);
      if (threadIndex !== -1) {
        const thread = threads[threadIndex];
        
        if (updates.title) {
          thread.title = updates.title;
        }
        
        if (updates.segments) {
          // Keep reactions for existing segments
          const updatedSegments = updates.segments.map(segment => {
            const existingSegment = thread.segments.find(s => s.id === segment.id);
            return {
              ...segment,
              reactions: existingSegment?.reactions || 
                { "mind_blown": 0, "light_bulb": 0, "relaxed": 0, "fire": 0, "heart": 0 }
            };
          });
          
          thread.segments = updatedSegments;
        }
        
        if (updates.tags) {
          thread.tags = updates.tags;
        }
        
        if (updates.isPublished !== undefined) {
          thread.isPublished = updates.isPublished;
        }
        
        thread.updatedAt = new Date().toISOString();
        
        // Update the corresponding thread card
        const cardIndex = threadCards.findIndex(c => c.id === threadId);
        if (cardIndex !== -1) {
          threadCards[cardIndex] = mapThreadToCard(thread);
        }
      }
      
      resolve();
    }, 600);
  });
};

export const forkThread = async (
  originalThreadId: string,
  userId: string,
  customizations?: Partial<{
    title: string;
    segments: Omit<ThreadSegment, "reactions" | "id">[];
  }>
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const originalThread = threads.find(t => t.id === originalThreadId);
      if (!originalThread) {
        throw new Error("Thread not found");
      }
      
      const user = users.find(u => u.id === userId) || users[0];
      const newThreadId = `thread${threads.length + 1}`;
      
      const title = customizations?.title || `${originalThread.title} (Remix)`;
      const originalSegments = originalThread.segments;
      
      // Create new segment IDs for the fork
      const segments = (customizations?.segments || originalSegments.map(s => ({
        content: s.content,
        order: s.order
      }))).map((segment, index) => ({
        id: `segment-${newThreadId}-${index}`,
        content: segment.content,
        order: segment.order,
        reactions: { "mind_blown": 0, "light_bulb": 0, "relaxed": 0, "fire": 0, "heart": 0 }
      }));
      
      const newThread: Thread = {
        id: newThreadId,
        title,
        authorId: userId,
        author: user,
        segments,
        tags: [...originalThread.tags],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isPublished: false,
        totalBookmarks: 0,
        totalForks: 0,
        originalThreadId,
        originalAuthor: originalThread.author
      };
      
      // Increment fork count on original thread
      originalThread.totalForks += 1;
      
      threads.push(newThread);
      threadCards.push(mapThreadToCard(newThread));
      
      resolve(newThreadId);
    }, 800);
  });
};

export const createCollection = async (
  userId: string,
  name: string,
  description: string = "",
  isPublic: boolean = false
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newCollectionId = `collection${collections.length + 1}`;
      
      const newCollection: Collection = {
        id: newCollectionId,
        name,
        description,
        ownerId: userId,
        threadIds: [],
        isPublic,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      collections.push(newCollection);
      
      resolve(newCollectionId);
    }, 500);
  });
};

export const updateCollection = async (
  collectionId: string,
  updates: Partial<{
    name: string;
    description: string;
    isPublic: boolean;
    threadIds: string[];
  }>
): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const collectionIndex = collections.findIndex(c => c.id === collectionId);
      if (collectionIndex !== -1) {
        const collection = collections[collectionIndex];
        
        if (updates.name) {
          collection.name = updates.name;
        }
        
        if (updates.description !== undefined) {
          collection.description = updates.description;
        }
        
        if (updates.isPublic !== undefined) {
          collection.isPublic = updates.isPublic;
        }
        
        if (updates.threadIds) {
          collection.threadIds = updates.threadIds;
        }
        
        collection.updatedAt = new Date().toISOString();
      }
      
      resolve();
    }, 400);
  });
};

export const addToCollection = async (
  collectionId: string,
  threadId: string
): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const collection = collections.find(c => c.id === collectionId);
      if (collection && !collection.threadIds.includes(threadId)) {
        collection.threadIds.push(threadId);
        collection.updatedAt = new Date().toISOString();
      }
      resolve();
    }, 300);
  });
};

export const removeFromCollection = async (
  collectionId: string,
  threadId: string
): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const collection = collections.find(c => c.id === collectionId);
      if (collection) {
        collection.threadIds = collection.threadIds.filter(id => id !== threadId);
        collection.updatedAt = new Date().toISOString();
      }
      resolve();
    }, 300);
  });
};

// Mock auth service
export const login = async (email: string, password: string): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "demo@threadspire.com" && password === "password123") {
        resolve(users.find(u => u.id === "current-user") || null);
      } else {
        resolve(null);
      }
    }, 800);
  });
};

export const register = async (
  email: string, 
  password: string, 
  name: string
): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(u => u.id === "current-user") || users[3];
      resolve(user);
    }, 1000);
  });
};

export const getCurrentUser = async (): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.find(u => u.id === "current-user") || null);
    }, 500);
  });
};
