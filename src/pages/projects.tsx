import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  const projectsList = Object.entries(projects).map(([id, project]) => ({
    id: Number(id),
    ...project,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of my recent work and personal projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-6 pt-0">
              <Button asChild variant="ghost" size="sm">
                <Link to={`/projects/${project.id}`}>Learn More</Link>
              </Button>
              <div className="flex gap-2">
                {project.demoUrl && project.demoType === 'internal' ? (
                  <Button asChild size="icon" variant="ghost">
                    <Link to={project.demoUrl}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : project.demoUrl ? (
                  <Button asChild size="icon" variant="ghost">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
                {project.githubUrl && (
                  <Button asChild size="icon" variant="ghost">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}