import { useState, useCallback, useRef, useEffect } from 'react';
import {
  ArrayBar,
  SortingAlgorithm,
  SortingStats,
  SortingStep,
} from '../types/sorting';

export const useSortingVisualizer = () => {
  const [array, setArray] = useState<ArrayBar[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(50);
  const speedRef = useRef(50);
  const [steps, setSteps] = useState<SortingStep[]>([]);
  const [stats, setStats] = useState<SortingStats>({
    comparisons: 0,
    swaps: 0,
    timeElapsed: 0,
  });

  const pauseRef = useRef(false);
  const abortRef = useRef(false);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const generateArray = useCallback((size: number) => {
    const newArray: ArrayBar[] = [];
    for (let i = 0; i < size; i++) {
      newArray.push({
        value: Math.floor(Math.random() * 100) + 1,
        isComparing: false,
        isSwapping: false,
        isSorted: false,
      });
    }
    setArray(newArray);
    setStats({ comparisons: 0, swaps: 0, timeElapsed: 0 });
    setSteps([]);
  }, []);

  const addStep = useCallback((message: string, type: SortingStep['type']) => {
    setSteps((prev) => [...prev, { message, type, timestamp: Date.now() }]);
  }, []);

  const sleep = useCallback(async (ms: number) => {
    const adjustedMs = ms * (100 / speedRef.current / 3);
    if (abortRef.current) throw new Error('Sorting aborted');
    await new Promise((resolve) => setTimeout(resolve, adjustedMs));
    while (pauseRef.current) {
      if (abortRef.current) throw new Error('Sorting aborted');
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }, []);

  const bubbleSort = useCallback(async () => {
    const startTime = Date.now();
    let comparisons = 0;
    let swaps = 0;
    
    const arr = [...array];
    try {
      for (let i = 0; i < arr.length; i++) {
        if (abortRef.current) throw new Error('Sorting aborted');
        
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (abortRef.current) throw new Error('Sorting aborted');
          
          setArray(prev => prev.map((bar, idx) => ({
            ...bar,
            isComparing: idx === j || idx === j + 1,
            isSwapping: false,
            isSorted: idx >= arr.length - i
          })));
          
          addStep(`Comparing ${arr[j].value} and ${arr[j + 1].value}`, 'comparison');
          comparisons++;
          await sleep(50);

          if (arr[j].value > arr[j + 1].value) {
            setArray(prev => prev.map((bar, idx) => ({
              ...bar,
              isComparing: false,
              isSwapping: idx === j || idx === j + 1,
              isSorted: idx >= arr.length - i
            })));
            
            addStep(`Swapping ${arr[j].value} and ${arr[j + 1].value}`, 'swap');
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swaps++;
            await sleep(50);
          }

          setArray(arr.map((bar, idx) => ({
            ...bar,
            isComparing: false,
            isSwapping: false,
            isSorted: idx >= arr.length - i
          })));
        }
      }

      if (!abortRef.current) {
        setStats({ comparisons, swaps, timeElapsed: Date.now() - startTime });
        setArray(arr.map(bar => ({ ...bar, isSorted: true })));
      }
    } catch (error : unknown) {
      if (error instanceof Error && error.message === 'Sorting aborted') {
        setArray(arr.map(bar => ({
          ...bar,
          isComparing: false,
          isSwapping: false,
          isSorted: false
        })));
      } else {
        throw error;
      }
    }
  }, [array, addStep, sleep]);

  const insertionSort = useCallback(async () => {
    const startTime = Date.now();
    let comparisons = 0;
    let swaps = 0;

    const arr = [...array];
    
    try {
      for (let i = 1; i < arr.length; i++) {
        if (abortRef.current) throw new Error('Sorting aborted');
        
        let key = arr[i];
        let j = i - 1;

        // Show current element to be inserted
        setArray(prev => prev.map((bar, idx) => ({
          ...bar,
          isComparing: idx === i,
          isSwapping: false,
          isSorted: idx < i
        })));
        await sleep(50);

        while (j >= 0 && arr[j].value > key.value) {
          if (abortRef.current) throw new Error('Sorting aborted');
          
          // Show comparison
          setArray(prev => prev.map((bar, idx) => ({
            ...bar,
            isComparing: idx === j,
            isSwapping: idx === j + 1,
            isSorted: idx < i
          })));
          
          addStep(`Comparing ${arr[j].value} with ${key.value}`, 'comparison');
          comparisons++;
          await sleep(50);

          // Show shift
          setArray(prev => prev.map((bar, idx) => ({
            ...bar,
            isComparing: false,
            isSwapping: idx === j || idx === j + 1,
            isSorted: idx < i
          })));
          
          addStep(`Moving ${arr[j].value} to position ${j + 1}`, 'swap');
          arr[j + 1] = arr[j];
          swaps++;
          await sleep(50);
          
          j--;
        }

        arr[j + 1] = key;
        
        // Update array after insertion
        setArray(arr.map((bar, idx) => ({
          ...bar,
          isComparing: false,
          isSwapping: false,
          isSorted: idx <= i
        })));
      }

      if (!abortRef.current) {
        setStats({ comparisons, swaps, timeElapsed: Date.now() - startTime });
        setArray(arr.map(bar => ({ ...bar, isSorted: true })));
      }
    } catch (error : unknown) {
      if (error instanceof Error && error.message === 'Sorting aborted') {
        setArray(arr.map(bar => ({
          ...bar,
          isComparing: false,
          isSwapping: false,
          isSorted: false
        })));
      } else {
        throw error;
      }
    }
  }, [array, addStep, sleep]);

  const selectionSort = useCallback(async () => {
    const startTime = Date.now();
    let comparisons = 0;
    let swaps = 0;

    const arr = [...array];
    
    try {
      for (let i = 0; i < arr.length; i++) {
        if (abortRef.current) throw new Error('Sorting aborted');
        
        let minIdx = i;
        
        // Show current position
        setArray(prev => prev.map((bar, idx) => ({
          ...bar,
          isComparing: idx === i,
          isSwapping: false,
          isSorted: idx < i
        })));
        await sleep(50);

        for (let j = i + 1; j < arr.length; j++) {
          if (abortRef.current) throw new Error('Sorting aborted');
          
          // Show comparison
          setArray(prev => prev.map((bar, idx) => ({
            ...bar,
            isComparing: idx === j || idx === minIdx,
            isSwapping: false,
            isSorted: idx < i
          })));
          
          addStep(`Comparing ${arr[j].value} with ${arr[minIdx].value}`, 'comparison');
          comparisons++;
          await sleep(50);

          if (arr[j].value < arr[minIdx].value) {
            minIdx = j;
          }
        }

        if (minIdx !== i) {
          // Show swap
          setArray(prev => prev.map((bar, idx) => ({
            ...bar,
            isComparing: false,
            isSwapping: idx === i || idx === minIdx,
            isSorted: idx < i
          })));
          
          addStep(`Swapping ${arr[i].value} and ${arr[minIdx].value}`, 'swap');
          const temp = arr[i];
          arr[i] = arr[minIdx];
          arr[minIdx] = temp;
          swaps++;
          await sleep(50);
        }

        // Update array after swap
        setArray(arr.map((bar, idx) => ({
          ...bar,
          isComparing: false,
          isSwapping: false,
          isSorted: idx <= i
        })));
      }

      if (!abortRef.current) {
        setStats({ comparisons, swaps, timeElapsed: Date.now() - startTime });
        setArray(arr.map(bar => ({ ...bar, isSorted: true })));
      }
    } catch (error : unknown) {
      if (error instanceof Error && error.message === 'Sorting aborted') {
        setArray(arr.map(bar => ({
          ...bar,
          isComparing: false,
          isSwapping: false,
          isSorted: false
        })));
      } else {
        throw error;
      }
    }
  }, [array, addStep, sleep]);

  const mergeSort = useCallback(async () => {
    const startTime = Date.now();
    let comparisons = 0;
    let swaps = 0;

    const arr = [...array];
    const auxArray = [...array]; // Auxiliary array for merging

    const merge = async (left: number, middle: number, right: number) => {
      if (abortRef.current) throw new Error('Sorting aborted');
      
      const leftArray = arr.slice(left, middle + 1);
      const rightArray = arr.slice(middle + 1, right + 1);

      let i = 0;
      let j = 0;
      let k = left;

      // Copy data to auxiliary array
      for (let i = left; i <= right; i++) {
        auxArray[i] = arr[i];
      }

      while (i < leftArray.length && j < rightArray.length) {
        if (abortRef.current) throw new Error('Sorting aborted');
        
        // Show comparison
        setArray(prev => prev.map((bar, idx) => ({
          ...bar,
          isComparing: idx === left + i || idx === middle + 1 + j,
          isSwapping: false
        })));
        
        addStep(`Comparing ${leftArray[i].value} and ${rightArray[j].value}`, 'comparison');
        comparisons++;
        await sleep(50);

        if (leftArray[i].value <= rightArray[j].value) {
          // Show placement
          setArray(prev => prev.map((bar, idx) => ({
            ...bar,
            isComparing: false,
            isSwapping: idx === k
          })));
          
          arr[k] = leftArray[i];
          i++;
        } else {
          setArray(prev => prev.map((bar, idx) => ({
            ...bar,
            isComparing: false,
            isSwapping: idx === k
          })));
          
          arr[k] = rightArray[j];
          j++;
        }
        swaps++;
        await sleep(50);

        // Update array after placement
        setArray(arr.map((bar, idx) => ({
          ...bar,
          isComparing: false,
          isSwapping: false,
          // Mark as sorted if this section is fully merged
          isSorted: idx >= left && idx <= right && 
                   ((i === leftArray.length && j === rightArray.length) || 
                    (i === leftArray.length && idx <= middle) ||
                    (j === rightArray.length && idx > middle))
        })));
        
        k++;
      }

      // Copy remaining elements of left array
      while (i < leftArray.length) {
        if (abortRef.current) throw new Error('Sorting aborted');
        
        setArray(prev => prev.map((bar, idx) => ({
          ...bar,
          isComparing: false,
          isSwapping: idx === k
        })));
        
        arr[k] = leftArray[i];
        i++;
        k++;
        swaps++;
        await sleep(50);
      }

      // Copy remaining elements of right array
      while (j < rightArray.length) {
        if (abortRef.current) throw new Error('Sorting aborted');
        
        setArray(prev => prev.map((bar, idx) => ({
          ...bar,
          isComparing: false,
          isSwapping: idx === k
        })));
        
        arr[k] = rightArray[j];
        j++;
        k++;
        swaps++;
        await sleep(50);
      }

      // Mark the entire merged section as sorted
      setArray(arr.map((bar, idx) => ({
        ...bar,
        isComparing: false,
        isSwapping: false,
        isSorted: idx >= left && idx <= right
      })));
      await sleep(50);
    };

    const mergeSortHelper = async (left: number, right: number) => {
      if (abortRef.current) throw new Error('Sorting aborted');
      
      if (left < right) {
        const middle = Math.floor((left + right) / 2);
        
        // Visualize the current section being processed
        setArray(prev => prev.map((bar, idx) => ({
          ...bar,
          isComparing: idx === middle,
          isSwapping: false
        })));
        await sleep(50);

        await mergeSortHelper(left, middle);
        await mergeSortHelper(middle + 1, right);
        await merge(left, middle, right);
      }
    };

    try {
      await mergeSortHelper(0, arr.length - 1);
      if (!abortRef.current) {
        setStats({ comparisons, swaps, timeElapsed: Date.now() - startTime });
        setArray(arr.map(bar => ({ ...bar, isSorted: true })));
      }
    } catch (error : unknown) {
      if (error instanceof Error && error.message === 'Sorting aborted') {
        setArray(arr.map(bar => ({
          ...bar,
          isComparing: false,
          isSwapping: false,
          isSorted: false
        })));
      } else {
        throw error;
      }
    }
  }, [array, addStep, sleep]);

  const quickSort = useCallback(async () => {
    const startTime = Date.now();
    let comparisons = 0;
    let swaps = 0;

    const arr = [...array];
    const sortedIndices = new Set<number>();
    
    const partition = async (low: number, high: number): Promise<number> => {
      if (abortRef.current) throw new Error('Sorting aborted');
      
      const pivot = arr[high];
      let i = low - 1;

      // Highlight pivot
      setArray(prev => prev.map((bar, idx) => ({
        ...bar,
        isComparing: idx === high,
        isSwapping: false,
        isSorted: sortedIndices.has(idx)
      })));
      await sleep(50);

      for (let j = low; j < high; j++) {
        if (abortRef.current) throw new Error('Sorting aborted');
        
        // Show comparison with pivot
        setArray(prev => prev.map((bar, idx) => ({
          ...bar,
          isComparing: idx === j || idx === high,
          isSwapping: false,
          isSorted: sortedIndices.has(idx)
        })));
        
        addStep(`Comparing ${arr[j].value} with pivot ${pivot.value}`, 'comparison');
        comparisons++;
        await sleep(50);

        if (arr[j].value < pivot.value) {
          i++;
          // Show swap
          setArray(prev => prev.map((bar, idx) => ({
            ...bar,
            isComparing: false,
            isSwapping: idx === i || idx === j,
            isSorted: sortedIndices.has(idx)
          })));
          
          addStep(`Swapping ${arr[i].value} and ${arr[j].value}`, 'swap');
          [arr[i], arr[j]] = [arr[j], arr[i]];
          swaps++;

          // Update array after swap
          setArray(arr.map((bar, idx) => ({
            ...bar,
            isComparing: false,
            isSwapping: false,
            isSorted: sortedIndices.has(idx)
          })));
          await sleep(50);
        }
      }

      // Final pivot swap
      setArray(prev => prev.map((bar, idx) => ({
        ...bar,
        isComparing: false,
        isSwapping: idx === i + 1 || idx === high,
        isSorted: sortedIndices.has(idx)
      })));
      
      addStep(`Swapping ${arr[i + 1].value} and ${arr[high].value}`, 'swap');
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      swaps++;

      // Mark pivot position as sorted
      sortedIndices.add(i + 1);

      // Update array after pivot swap
      setArray(arr.map((bar, idx) => ({
        ...bar,
        isComparing: false,
        isSwapping: false,
        isSorted: sortedIndices.has(idx)
      })));
      await sleep(50);

      return i + 1;
    };

    const isSorted = (low: number, high: number): boolean => {
      for (let i = low; i < high; i++) {
        if (arr[i].value > arr[i + 1].value) return false;
      }
      return true;
    };

    const quickSortHelper = async (low: number, high: number) => {
      if (abortRef.current) throw new Error('Sorting aborted');
      
      if (low < high) {
        const pi = await partition(low, high);
        
        // Check and mark sorted sections
        if (isSorted(low, pi - 1)) {
          for (let i = low; i < pi; i++) {
            sortedIndices.add(i);
          }
        }
        if (isSorted(pi + 1, high)) {
          for (let i = pi + 1; i <= high; i++) {
            sortedIndices.add(i);
          }
        }

        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      } else if (low === high) {
        sortedIndices.add(low);
      }

      // Update visualization after each recursive call
      setArray(arr.map((bar, idx) => ({
        ...bar,
        isComparing: false,
        isSwapping: false,
        isSorted: sortedIndices.has(idx)
      })));
    };

    try {
      await quickSortHelper(0, arr.length - 1);
      if (!abortRef.current) {
        setStats({ comparisons, swaps, timeElapsed: Date.now() - startTime });
        // Mark all elements as sorted at the end
        setArray(arr.map(bar => ({ ...bar, isSorted: true })));
      }
    } catch (error : unknown) {
      if (error instanceof Error && error.message === 'Sorting aborted') {
        setArray(arr.map(bar => ({
          ...bar,
          isComparing: false,
          isSwapping: false,
          isSorted: false
        })));
      } else {
        throw error;
      }
    }
  }, [array, addStep, sleep]);

  const abortSorting = useCallback(() => {
    abortRef.current = true;
    pauseRef.current = false;
    setIsSorting(false);
    setArray(prev => prev.map(bar => ({
      ...bar,
      isComparing: false,
      isSwapping: false,
      isSorted: false
    })));
  }, []);

  const startSorting = useCallback(async (algorithm: SortingAlgorithm) => {
    if (isSorting) return;
    
    // Clear previous steps and stats
    setSteps([]);
    setStats({
      comparisons: 0,
      swaps: 0,
      timeElapsed: 0,
    });
    
    setIsSorting(true);
    abortRef.current = false;
    pauseRef.current = false;
    
    try {
      switch (algorithm) {
        case 'bubble':
          await bubbleSort();
          break;
        case 'quick':
          await quickSort();
          break;
        case 'merge':
          await mergeSort();
          break;
        case 'insertion':
          await insertionSort();
          break;
        case 'selection':
          await selectionSort();
          break;
      }
    } catch (error) {
      if (error instanceof Error && error.message === 'Sorting aborted') {
        addStep('Sorting aborted', 'info');
      }
    } finally {
      setIsSorting(false);
    }
  }, [isSorting, array, addStep]);

  const togglePause = () => {
    pauseRef.current = !pauseRef.current;
    setIsPaused(!isPaused);
  };

  return {
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
    abortSorting,
  };
};
