import { useEffect, useState } from 'react';
import Controls from './components/Controls';
import Visualizer from './components/Visualizer';
import Stats from './components/Stats';
import StepLog from './components/StepLog';
import { useSortingVisualizer } from './hooks/useSortingVisualizer';
import { useTheme } from '@/components/theme-provider';

export default function SortingDemo() {
  const { theme } = useTheme();
  const [arraySize, setArraySize] = useState(30);
  const {
    array,
    generateArray,
    startSorting,
    isSorting,
    isPaused,
    togglePause,
    stats,
    steps,
    speed,
    setSpeed,
    abortSorting
  } = useSortingVisualizer();

  useEffect(() => {
    generateArray(arraySize);
  }, [arraySize, generateArray]);

  return (
    <div className={`space-y-6 p-4 ${theme}`}>
      <Controls
        onGenerate={() => generateArray(arraySize)}
        onSort={startSorting}
        onSizeChange={setArraySize}
        onSpeedChange={setSpeed}
        onAbort={abortSorting}
        disabled={isSorting}
        currentSize={arraySize}
        currentSpeed={speed}
        isPaused={isPaused}
        onPauseToggle={togglePause}
      />
      
      <Visualizer array={array} />
      
      <div className="grid md:grid-cols-2 gap-4">
        <Stats stats={stats} />
        <StepLog steps={steps} />
      </div>
    </div>
  );
}
