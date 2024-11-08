import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen } from 'lucide-react';
import 'katex/dist/katex.min.css';
import katex from 'katex';

interface AbbreviationItem {
  symbol: string;
  meaning: string;
}

interface AbbreviationCategory {
  category: string;
  items: AbbreviationItem[];
}

interface AbbreviationsPanelProps {
  abbreviations?: AbbreviationCategory[];
}

export default function AbbreviationsPanel({ abbreviations }: AbbreviationsPanelProps) {
  if (!abbreviations?.length) return null;

  const renderLatex = (tex: string) => {
    try {
      return (
        <span
          dangerouslySetInnerHTML={{
            __html: katex.renderToString(tex, {
              throwOnError: false,
              displayMode: false,
            }),
          }}
        />
      );
    } catch (error) {
      console.error('LaTeX rendering error:', error);
      return tex;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="rounded-full h-12 w-12">
            <BookOpen className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Abkürzungen</SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-8rem)] mt-4">
            <div className="pr-4 space-y-6">
              {abbreviations.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h4 className="font-semibold text-sm text-primary mb-2">
                    {category.category}
                  </h4>
                  <div className="space-y-2">
                    {category.items.map((abbr, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-4 py-2 border-b last:border-0"
                      >
                        <div className="font-mono text-primary min-w-[60px]">
                          {renderLatex(abbr.symbol)}
                        </div>
                        <div className="text-muted-foreground">
                          {abbr.meaning}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
} 