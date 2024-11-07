import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { FileDown, RefreshCw, FileText } from 'lucide-react';

interface PdfFile {
  name: string;
  url: string;
  generatedAt: string;
  size?: string; // Optional: show file size if available from GitHub API
}

export default function LatexGeneratorDemo() {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<PdfFile[]>([]);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // Fetch the latest artifacts from GitHub releases
      const response = await fetch(
        'https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/releases/latest'
      );
      const data = await response.json();
      
      // Filter for PDF files and transform into our format
      const pdfFiles: PdfFile[] = data.assets
        .filter((asset: any) => asset.name.endsWith('.pdf'))
        .map((asset: any) => ({
          name: asset.name,
          url: asset.browser_download_url,
          generatedAt: new Date(asset.created_at).toLocaleDateString(),
          size: formatFileSize(asset.size)
        }));
      
      setFiles(pdfFiles);
      toast.success('PDF files retrieved successfully!');
    } catch (error) {
      toast.error('Failed to fetch PDF files');
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Mock Exam Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <Button 
              onClick={handleGenerate} 
              disabled={loading}
            >
              {loading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Fetching Latest PDFs...
                </>
              ) : (
                'Get Latest Exams'
              )}
            </Button>
          </div>

          <div className="grid gap-4">
            {files.map((file) => (
              <div 
                key={file.name} 
                className="flex items-center justify-between p-4 border rounded-lg bg-card"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-red-500" />
                  <div>
                    <h3 className="font-medium">{file.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Generated: {file.generatedAt} • {file.size}
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <a 
                    href={file.url} 
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileDown className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}