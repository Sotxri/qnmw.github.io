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
} 