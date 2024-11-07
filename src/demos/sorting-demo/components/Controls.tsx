import { Play, RotateCcw, Settings, Pause, Square } from 'lucide-react';
import { SortingAlgorithm } from '../types/sorting';

interface ControlsProps {
  onGenerate: () => void;
  onSort: (algorithm: SortingAlgorithm) => void;
  onSizeChange: (size: number) => void;
  onSpeedChange: (speed: number) => void;
  onAbort: () => void;
  disabled: boolean;
  currentSize: number;
  currentSpeed: number;
  isPaused: boolean;
  onPauseToggle: () => void;
}

export default function Controls({
  onGenerate,
  onSort,
  onSizeChange,
  onSpeedChange,
  onAbort,
  disabled,
  currentSize,
  currentSpeed,
  isPaused,
  onPauseToggle
}: ControlsProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center bg-background border p-4 rounded-lg">
      <button
        onClick={onGenerate}
        disabled={disabled}
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        title="Generate new array"
      >
        <RotateCcw size={16} />
        Generate
      </button>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onSort('bubble')}
          disabled={disabled}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Bubble Sort
        </button>
        
        <button
          onClick={() => onSort('quick')}
          disabled={disabled}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Quick Sort
        </button>

        <button
          onClick={() => onSort('merge')}
          disabled={disabled}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Merge Sort
        </button>

        <button
          onClick={() => onSort('insertion')}
          disabled={disabled}
          className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Insertion Sort
        </button>

        <button
          onClick={() => onSort('selection')}
          disabled={disabled}
          className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Selection Sort
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onPauseToggle}
          disabled={!disabled}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          title={isPaused ? "Resume" : "Pause"}
        >
          {isPaused ? <Play size={16} /> : <Pause size={16} />}
          {isPaused ? "Resume" : "Pause"}
        </button>

        <button
          onClick={onAbort}
          disabled={!disabled}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          title="Stop sorting"
        >
          <Square size={16} />
          Stop
        </button>
      </div>

      <div className="flex items-center gap-2">
        <Settings size={16} className="text-gray-600" />
        <input
          type="range"
          min="10"
          max="100"
          value={currentSize}
          onChange={(e) => onSizeChange(Number(e.target.value))}
          disabled={disabled}
          className="w-32"
        />
        <span className="text-sm text-gray-600">Size: {currentSize}</span>
      </div>

      <div className="flex items-center gap-2">
        <Settings size={16} className="text-gray-600" />
        <input
          type="range"
          min="1"
          max="100"
          value={currentSpeed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="w-32"
        />
        <span className="text-sm text-gray-600">Speed: {currentSpeed}x</span>
      </div>
    </div>
  );
}