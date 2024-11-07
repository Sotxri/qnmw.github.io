import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';

const posts = {
  1: {
    title: 'Building Scalable React Applications',
    content: `
# Building Scalable React Applications

A comprehensive guide to building maintainable and scalable React applications.

## Component Architecture

When building large-scale React applications, following proper component architecture is crucial:

- **Keep components small and focused**
  - Single responsibility principle
  - Easier testing and maintenance
  - Better reusability

- **Use composition over inheritance**
  - Flexible component combinations
  - Avoid deep inheritance chains
  - Better code organization

## State Management

Choose the right state management solution based on your needs:

### Local State
- Use \`useState\` for component-level state
- Perfect for simple UI states
- No additional dependencies

### Global State
- Context API for simple global state
- Redux for complex state management
- React Query for server state

## Performance Optimization

Optimize your React application with these techniques:

1. **Code Splitting**
   - Use dynamic imports
   - Lazy load components
   - Route-based splitting

2. **Memoization**
   - Use React.memo wisely
   - Implement useMemo for expensive calculations
   - Optimize callback functions with useCallback

3. **Virtual List**
   - Implement virtualization for long lists
   - Only render visible items
   - Improve scrolling performance

## Best Practices

Follow these best practices for maintainable code:

\`\`\`typescript
// Bad
const Component = (props: any) => {
  return <div>{props.data}</div>
}

// Good
interface Props {
  data: string;
}

const Component = ({ data }: Props) => {
  return <div>{data}</div>
}
\`\`\`

Remember to:
- Use TypeScript for better type safety
- Implement proper error boundaries
- Write comprehensive tests
- Document your components
    `,
    date: '2024-02-28',
    tags: ['React', 'Architecture', 'Performance'],
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
  },
};

export default function BlogPost() {
  const { id } = useParams();
  const post = posts[Number(id) as keyof typeof posts];

  if (!post) return <div>Post not found</div>;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl mx-auto space-y-8"
    >
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center gap-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="prose dark:prose-invert">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </motion.article>
  );
}