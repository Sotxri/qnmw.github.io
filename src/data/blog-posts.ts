import { BlogPost } from '@/types/blog';

export const posts: Record<number, BlogPost> = {
  1: {
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications with modern tools and techniques.',
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
    readTime: '5 min read',
    author: {
      name: 'QNMW',
      avatar: '/favicon.ico',
    },
  },
  2: {
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications with modern tools and techniques.',
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
    readTime: '5 min read',
    author: {
      name: 'QNMW',
      avatar: '/favicon.ico',
    },
  },
  // Add more blog posts here...
}; 