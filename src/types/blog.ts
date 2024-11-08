export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  abbreviations?: {
    category: string;
    items: {
      symbol: string;
      meaning: string;
    }[];
  }[];
} 