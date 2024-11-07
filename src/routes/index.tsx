import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '@/pages/home';
import Projects from '@/pages/projects';
import ProjectDetail from '@/pages/project-detail';
import ProjectDemo from '@/pages/project-demo';
import Blog from '@/pages/blog';
import BlogPost from '@/pages/blog-post';
import Contact from '@/pages/contact';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/projects/:id/demo" element={<ProjectDemo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}