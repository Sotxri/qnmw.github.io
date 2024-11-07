export interface ArrayBar {
  value: number;
  isComparing: boolean;
  isSwapping: boolean;
  isSorted: boolean;
  isAuxiliary?: boolean;
}

export type SortingAlgorithm = 'bubble' | 'quick' | 'merge' | 'insertion' | 'selection';

export interface SortingStats {
  comparisons: number;
  swaps: number;
  timeElapsed: number;
}

export interface SortingStep {
  message: string;
  type: 'comparison' | 'swap' | 'merge' | 'partition' | 'info';
  timestamp: number;
}