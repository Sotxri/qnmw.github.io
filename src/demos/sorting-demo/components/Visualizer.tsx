import { ArrayBar } from '../types/sorting';

interface VisualizerProps {
  array: ArrayBar[];
}

export default function Visualizer({ array }: VisualizerProps) {
  const maxValue = Math.max(...array.map(bar => bar.value));
  
  return (
    <div className="flex items-end justify-center gap-1 h-96 p-4 bg-background border rounded-lg">
      {array.map((bar, idx) => (
        <div
          key={idx}
          style={{
            height: `${(bar.value / maxValue) * 100}%`,
            width: `${100 / array.length}%`,
            maxWidth: '20px',
            transition: 'all 0.1s ease'
          }}
          className={`
            ${bar.isComparing ? 'bg-yellow-500 dark:bg-yellow-600' : ''}
            ${bar.isSwapping ? 'bg-red-500 dark:bg-red-600' : ''}
            ${bar.isSorted ? 'bg-green-500 dark:bg-green-600' : ''}
            ${!bar.isComparing && !bar.isSwapping && !bar.isSorted ? 'bg-primary' : ''}
          `}
        />
      ))}
    </div>
  );
}