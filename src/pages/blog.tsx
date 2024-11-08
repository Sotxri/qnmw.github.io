import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getPosts } from '@/data/blog-posts';
import type { BlogPost } from '@/utils/blog-loader';

export default function Blog() {
  const [posts, setPosts] = useState<Record<string, BlogPost>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const loadedPosts = await getPosts();
        setPosts(loadedPosts);
      } catch (error) {
        console.error('Failed to load posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const postsList = Object.values(posts);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about development.
        </p>
      </div>

      <div className="grid gap-6">
        {postsList.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  {post.readTime && (
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {post.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  {post.author?.avatar && (
                    <img
                      src={post.author.avatar}
                      alt={post.author?.name || 'Author'}
                      className="w-6 h-6 rounded-full"
                    />
                  )}
                  <span>{post.author?.name || 'Anonymous'}</span>
                  <span>•</span>
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}