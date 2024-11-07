import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';

type Project = {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  demoType?: 'internal' | 'external';
  demoComponent?: React.ComponentType;
  githubUrl?: string;
  tags: string[];
  features: string[];
  technologies: string[];
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects[Number(id) as keyof typeof projects] as unknown as Project;

  if (!project) return <div>Project not found</div>;

  const DemoButton = () => {
    if(!project.demoComponent || !project.demoUrl) return null;

    if (project.demoType === 'internal') {
      return (
        <Button asChild>
          <Link to={`/projects/${id}/demo`}>
            Try it!
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      );
    }

    return (
      <Button asChild>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8 max-w-4xl mx-auto"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[400px] object-cover rounded-lg"
      />

      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        <div className="flex gap-4">
          <DemoButton />
          {project.githubUrl && (
            <Button asChild variant="outline">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              View Code
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}