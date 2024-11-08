import matter from 'gray-matter';
import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;

export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface BlogPost extends BlogFrontmatter {
  id: string;
  content: string;
  abbreviations?: Record<string, string>;
}

export async function getBlogPosts(): Promise<Record<string, BlogPost>> {
  const posts: Record<string, BlogPost> = {};
  
  const blogFiles = import.meta.glob('/content/blog/*.md', { 
    eager: true,
    as: 'raw'
  });
  
  Object.entries(blogFiles).forEach(([filepath, content]) => {
    if (typeof content !== 'string') {
      console.warn(`Skipping ${filepath}: content is not a string`);
      return;
    }
    
    const slug = filepath.replace('/content/blog/', '').replace('.md', '');
    const { data: frontmatter, content: markdownContent } = matter(content);
    
    posts[slug] = {
      id: slug,
      content: markdownContent,
      ...(frontmatter as BlogFrontmatter)
    };
  });
  
  // Sort posts by date in descending order (newest first)
  const sortedPosts = Object.fromEntries(
    Object.entries(posts).sort(([, a], [, b]) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
  );
  
  return sortedPosts;
} 