import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const posts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt:
      'Learn the best practices for building large-scale React applications with modern tools and techniques.',
    date: '2024-02-28',
    tags: ['React', 'Architecture', 'Performance'],
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Understanding TypeScript Generics',
    excerpt:
      'A comprehensive guide to TypeScript generics and how to use them effectively in your projects.',
    date: '2024-02-25',
    tags: ['TypeScript', 'Programming'],
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Modern CSS Techniques',
    excerpt:
      'Explore modern CSS features and techniques for building beautiful user interfaces.',
    date: '2024-02-20',
    tags: ['CSS', 'Web Design'],
    readTime: '4 min read',
  },
];

export default function Blog() {
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
          Thoughts, tutorials, showcases and insights about anything development.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <p className="text-sm text-muted-foreground mt-4">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}