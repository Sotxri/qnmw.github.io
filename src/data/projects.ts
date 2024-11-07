export const projects = {
  1: {
    title: 'Sorting Algorithms Visualizer',
    description:
      'A visualizer for sorting algorithms that allows you to see how different sorting algorithms work.',
    image: 'https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['React', 'Node.js', 'Vite'],
    features: [
      'Different sorting algorithms',
      'Different array sizes',
      'Different speeds',
      'Responsive design',
      'Comprehensive information about each algorithm',
      'Elapsed time and step count'
    ],
    technologies: [
      'React',
      'Node.js',
      'Tailwind CSS',
      'Typescript',
      'Vite',
    ],
    demoUrl: '/projects/1/demo', //kleiner button links to this
    githubUrl: 'https://github.com',
    demoType: 'internal',
    demoComponent: () => import('../demos/sorting-demo').then(mod => mod.default), // Dynamic import
  },
  2: {
    title: 'Sorting Algorithms Visualizer',
    description:
      'A visualizer for sorting algorithms that allows you to see how different sorting algorithms work.',
    image: 'https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['React', 'Node.js', 'Vite'],
    features: [
      'Different sorting algorithms',
      'Different array sizes',
      'Different speeds',
      'Responsive design',
      'Comprehensive information about each algorithm',
      'Elapsed time and step count'
    ],
    technologies: [
      'React',
      'Node.js',
      'Tailwind CSS',
      'Typescript',
      'Vite',
    ],
    demoUrl: '',
    demoComponent: null,
    githubUrl: '',
    demoType: 'internal',
  },
  // ... other projects
} as const;

export type Project = typeof projects[keyof typeof projects]; 