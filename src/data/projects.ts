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
    githubUrl: '',
    demoType: 'internal',
    demoComponent: () => import('../demos/sorting-demo').then(mod => mod.default), // Dynamic import
  },
  2: {
    title: 'Mock Exam Generator',
    description:
      'A tool to generate mock exams for a basic Computer Science course.',
    image: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['React','LaTex', 'Java', 'Bash'],
    features: [
        'Automated PDF file generation',
        'Includes solutions',
        'GitHub Actions integration',
        'Real-time file downloads',
        'Daily refresh of the exam',
        'Additional options for the exam are available on github',
    ],
    technologies: [
        'React',
        'TypeScript',
        'GitHub Actions',
        'LaTeX',
        'Java'
    ],
    demoUrl: '/projects/2/demo',
    demoComponent: () => import('../demos/latex-demo').then(mod => mod.default),
    githubUrl: 'https://github.com/Sotxri/probeklausurgenerator',
    demoType: 'internal',
  },
  // ... other projects
} as const;

export type Project = typeof projects[keyof typeof projects]; 