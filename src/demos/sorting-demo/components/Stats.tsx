import { SortingStats } from '../types/sorting';
import { Card, CardContent } from '@/components/ui/card';

interface StatsProps {
  stats: SortingStats;
}

export default function Stats({ stats }: StatsProps) {
  return (
    <Card>
      <CardContent className="grid grid-cols-3 gap-4 p-4">
        <div className="flex flex-col items-center">
          <span className="text-muted-foreground">Comparisons</span>
          <span className="text-2xl font-bold text-foreground">{stats.comparisons}</span>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-muted-foreground">Swaps</span>
          <span className="text-2xl font-bold text-foreground">{stats.swaps}</span>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-muted-foreground">Time</span>
          <span className="text-2xl font-bold text-foreground">
            {(stats.timeElapsed / 1000).toFixed(2)}s
          </span>
        </div>
      </CardContent>
    </Card>
  );
}