function getDescription(currentStep, previousStep, leftIndex, rightIndex, pivotIndex = -1, algorithm = 'quickSort') {
    // Swap detection logic
    switch (algorithm) {
        case 'quickSort':
            if (previousStep && (previousStep.array[leftIndex] !== currentStep.array[leftIndex] || previousStep.array[rightIndex] !== currentStep.array[rightIndex])) {
                let leftValue = previousStep.array[leftIndex];
                let rightValue = previousStep.array[rightIndex];

                // Check for undefined values
                leftValue = leftValue !== undefined ? leftValue : "Pivot element";
                rightValue = rightValue !== undefined ? rightValue : "Pivot element";

                return "Swapped " + leftValue + " and " + rightValue;
            }

            // Precision mode pointer movement descriptions
            if (precisionMode) {
                return "Left pointer at " + currentStep.array[leftIndex] + ", right pointer at " + currentStep.array[rightIndex];
            }

            // Normal mode descriptions
            if (leftIndex === rightIndex) {
                return "Pointers have met, ending partitioning around pivot " + currentStep.array[pivotIndex];
            }

            return "Processing step...";
            break;
        case 'bubbleSort':
            let currentElement = currentStep.array[rightIndex];
            let previousElement = rightIndex > 0 ? currentStep.array[rightIndex - 1] : null;

            if (previousStep && currentStep.array[rightIndex] !== previousStep.array[rightIndex]) {
                return "Swapped " + previousElement + " and " + currentElement;
            } else {
                return "Comparing " + previousElement + " and " + currentElement;
            }
            break;
        case 'insertionSort':
            if (previousStep) {
                let currentElement = currentStep.array[leftIndex];
                let targetElement = rightIndex >= 0 ? currentStep.array[rightIndex] : "beginning of array";

                if (currentStep.array[leftIndex] !== previousStep.array[leftIndex]) {
                    return "Inserting " + currentElement + " at the correct position.";
                } else if (currentStep.array[rightIndex] !== previousStep.array[rightIndex]) {
                    return "Shifting " + targetElement + " to the right to make space.";
                }
            }
            return "Evaluating position for " + currentStep.array[leftIndex];
            break;
        case 'mergeSort':
            if (previousStep) {
                // Check if the current action is merging
                if (currentStep.currentSegment && currentStep.currentSegment[0] !== previousStep.currentSegment[0]) {
                    let from = currentStep.currentSegment[0];
                    let to = currentStep.currentSegment[1];
                    return "Merging arrays from index " + from + " to " + to;
                }
            }
            // Default description for splitting or initial steps
            return "Splitting array into smaller arrays";
            break;

        case 'selectionSort':
            if (previousStep) {
                // Check if the current action is swapping
                if (currentStep.array[leftIndex] !== previousStep.array[leftIndex]) {
                    return "Swapping " + currentStep.array[leftIndex] + " and " + currentStep.array[rightIndex];
                }
            }
            // Default description for splitting or initial steps
            return "Finding the smallest element";
            break;
            
    }
}