let colorCounter = 0;
const colors = ["#FF62A5", "#FFE5AE", "#6B76FF", "#711DB0","EF4040"];

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function generateQuickSortSteps(array, from = 0, to = array.length - 1, precisionMode = false) {
  if (from < to) {
    let pivot = to;
    let left = from;
    let right = to;

    while (left < right) {
      while (left < right && array[left] < array[pivot]) {
        if (precisionMode) steps.push({ array: [...array], left, right, pivot });
        left++;
      }
      while (left < right && array[right] >= array[pivot]) {
        if (precisionMode) steps.push({ array: [...array], left, right, pivot });
        right--;
      }
      if (left < right) {
        swap(array, left, right);
      }
    }
    swap(array, left, pivot);
    steps.push({ array: [...array], left, pivot: pivot, pivot });

    generateQuickSortSteps(array, from, left - 1, precisionMode);
    generateQuickSortSteps(array, left + 1, to, precisionMode);
  }
}
function generateBubbleSortSteps(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (precisionMode) steps.push({ array: [...array], left: i, right: j });
      if (array[j] > array[j + 1]) {
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        steps.push({ array: [...array], left: i, right: j })
      }
    }
    if (precisionMode) steps.push({ array: [...array], passComplete: true });
  }
}
function generateInsertionSortSteps(array) {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    let x = array[i];
    let j = i - 1;
    // Store the initial state of the array before starting to insert the current element
    steps.push({ array: [...array], right: i, left: j });
    // Find the correct position for the current element
    for (; j > -1 && x < array[j]; j--) {
      // Shift elements to the right to make space for the current element
      array[j + 1] = array[j];
      // Store the state of the array after each shift
      if (precisionMode) steps.push({ array: [...array], right: i, left: j });
    }

    // Place the current element in its correct position
    array[j + 1] = x;
    // Store the state of the array after placing the element in its position
    steps.push({ array: [...array], right: i, left: j + 1 });
  }
}
function generateMergeSortSteps(array, from = 0, to = array.length - 1, precisionMode = false) {
  if (from < to) {
    let middle = Math.floor((from + to) / 2);
    generateMergeSortSteps(array, from, middle);
    generateMergeSortSteps(array, middle + 1, to);
    merge(array, from, middle, to, colors[colorCounter % colors.length], precisionMode);
    colorCounter++;
  }
}
function merge(array, from, middle, to, segmentColor,precisionMode) {
  
  let copyArray = array.slice();
  let left = from;
  let right = middle + 1;
  let index = from;
  
  steps.push({ array: [...array], currentSegment: [from, to], segmentColor });
  while (left <= middle && right <= to) {
    if (array[left] < array[right]) {
      copyArray[index] = array[left];
      left++;
    }
    else {
      copyArray[index] = array[right];
      right++;
    }
    index++;
    if(precisionMode)steps.push({ array: [...array], currentSegment: [from, to], segmentColor });
    
  }
  while (left <= middle) {
    copyArray[index] = array[left];
    left++;
    index++;
    if(precisionMode)steps.push({ array: [...array], currentSegment: [from, to], segmentColor });

  }
  while (right <= to) {
    copyArray[index] = array[right];
    right++;
    index++;
    if(precisionMode)steps.push({ array: [...array], currentSegment: [from, to], segmentColor });

  }
  for (index = from; index <= to; index++) {
    array[index] = copyArray[index];
}
steps.push({ array: [...array], currentSegment: [from, to], segmentColor });

}
function generateSelectionSortSteps(array) {
  for (let i = 0; i < array.length-1; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (precisionMode) steps.push({ array: [...array], left: i, right: j });
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, i, min);
      steps.push({ array: [...array], left: i, right: min });
    }
    steps.push({ array: [...array], left: i, right: min, pivot: 1 });
  }
}