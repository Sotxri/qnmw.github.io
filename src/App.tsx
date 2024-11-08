import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Layout from '@/components/layout';
import AppRoutes from '@/routes';
import CursorGradient from '@/components/cursor-gradient';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <CursorGradient />
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}