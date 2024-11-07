import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Briefcase, PenTool } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-16"
    >
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          QNMW - Welcome
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I make stuff.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4 p-6 border rounded-lg">
          <Code2 className="h-10 w-10 text-primary" />
          <h2 className="text-xl font-semibold">Clean Code</h2>
          <p className="text-muted-foreground">
            Writing maintainable and scalable code is my top priority.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <Briefcase className="h-10 w-10 text-primary" />
          <h2 className="text-xl font-semibold">Professional</h2>
          <p className="text-muted-foreground">
            Delivering high-quality solutions on time and within budget.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <PenTool className="h-10 w-10 text-primary" />
          <h2 className="text-xl font-semibold">Creative</h2>
          <p className="text-muted-foreground">
            Bringing innovative ideas and solutions to every project.
          </p>
        </div>
      </section>
    </motion.div>
  );
}