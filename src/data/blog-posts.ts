import { getBlogPosts } from '@/utils/blog-loader';

// Export a function to get posts instead of a static object
export async function getPosts() {
  return await getBlogPosts();
} 