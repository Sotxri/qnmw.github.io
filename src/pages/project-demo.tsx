import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { useState, useEffect } from 'react';

export default function ProjectDemo() {
  const { id } = useParams();
  const project = projects[Number(id) as keyof typeof projects];

  const [DemoComponent, setDemoComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (project.demoComponent) {
      project.demoComponent().then(module => {
        setDemoComponent(() => module);
      });
    }
  }, [project.demoComponent]);

  if (!project) return <Navigate to="/projects" />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between p-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to={`/projects/${id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Project
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">{project.title} Demo</h1>
      </div>

      <div className="w-full min-h-[calc(100vh-8rem)]">
        {DemoComponent && <DemoComponent />}
      </div>
    </motion.div>
  );
} 