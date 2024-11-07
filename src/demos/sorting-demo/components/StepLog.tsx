import { SortingStep } from '../types/sorting';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface StepLogProps {
  steps: SortingStep[];
}

export default function StepLog({ steps }: StepLogProps) {
  const getStepColor = (type: SortingStep['type']) => {
    switch (type) {
      case 'comparison': return 'text-yellow-500 dark:text-yellow-400';
      case 'swap': return 'text-red-500 dark:text-red-400';
      case 'merge': return 'text-purple-500 dark:text-purple-400';
      case 'partition': return 'text-blue-500 dark:text-blue-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Operation Log</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] w-full">
          <div className="space-y-1">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">
                  {new Date(step.timestamp).toLocaleTimeString('en-US', { 
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  })}
                </span>
                <span className={getStepColor(step.type)}>{step.message}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}