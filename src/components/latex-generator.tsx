import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface LatexFile {
  name: string;
  url: string;
  generatedAt: string;
}

export default function LatexGenerator() {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<LatexFile[]>([]);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // Fetch the latest artifacts from GitHub releases
      const response = await fetch(
        'https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/releases/latest'
      );
      const data = await response.json();
      
      // Transform assets into our file format
      const latexFiles: LatexFile[] = data.assets.map((asset: any) => ({
        name: asset.name,
        url: asset.browser_download_url,
        generatedAt: new Date(asset.created_at).toLocaleDateString()
      }));
      
      setFiles(latexFiles);
      toast.success('LaTeX files retrieved successfully!');
    } catch (error) {
      toast.error('Failed to fetch LaTeX files');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Button 
          onClick={handleGenerate} 
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Get Latest Files'}
        </Button>
      </div>

      <div className="grid gap-4">
        {files.map((file) => (
          <div 
            key={file.name} 
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div>
              <h3 className="font-medium">{file.name}</h3>
              <p className="text-sm text-muted-foreground">
                Generated: {file.generatedAt}
              </p>
            </div>
            <Button asChild variant="outline">
              <a href={file.url} download>
                Download
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
} 