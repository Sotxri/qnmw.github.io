function updateDisplay(array, leftIndex = -1, rightIndex = -1, pivotIndex = -1, algorithm = 'quickSort', currentSegment = [-1, -1], segmentColor = null) {
    let container = document.getElementById("array-container");
    container.innerHTML = '';
    //const totalElements = array.length;
    const segmentColors = ["#add8e6", "#ffb6c1", "#90ee90", "#f0e68c", "#dda0dd"]; // Example colors
    array.forEach((value, index) => {
        let element = document.createElement("div");
        element.className = 'array-element';
        element.style.flex = '1'; // Flex property
        element.innerText = value;
        element.style.position = "relative"; // Needed for absolute positioning of pointers

        if (usedPivotValues.has(value)) {
            element.classList.add('used-pivot'); // Apply gray background for values used as pivots
        }
        switch (algorithm) {
            case 'quickSort':
                if (index === pivotIndex) {
                    element.classList.add('pivot');
                    usedPivotValues.add(array[pivotIndex]); // Add this value to the set of used pivots
                }
                if (index === leftIndex || index === rightIndex) {
                    element.classList.add('current');
                    let pointer = document.createElement("div");
                    pointer.className = 'pointer';
                    pointer.innerHTML = index === leftIndex ? '&#8593;' : '&#8595;'; // Use appropriate arrow symbols
                    element.appendChild(pointer); // Append pointer directly to the element
                }
                break;
            case 'bubbleSort':
                if (index === rightIndex - 1) {
                    element.classList.add('comparing');
                    let pointer = document.createElement("div");
                    pointer.className = 'pointer';
                    pointer.innerHTML = '&#8594;'; // Right arrow for Bubble Sort
                    element.appendChild(pointer);
                }
                if (index === rightIndex) {
                    element.classList.add('comparing');
                }
                break;
            case 'insertionSort':
                if (index === leftIndex || index === rightIndex) {
                    element.classList.add('current');
                    if (index === rightIndex) {
                        let pointer = document.createElement("div");
                        pointer.className = 'pointer';
                        pointer.innerHTML = pointer.innerHTML = array[leftIndex];; // Right arrow for Bubble Sort
                        element.appendChild(pointer);
                    }
                    if (array[leftIndex] > array[rightIndex] && index == leftIndex) {
                        let pointer = document.createElement("div");
                        pointer.className = 'pointer';
                        pointer.innerHTML = array[rightIndex]; // Left arrow for Insertion Sort
                        element.appendChild(pointer);
                    }
                }
                break;
                case 'selectionSort':
                    // Color for the sorted part of the array
                    if (index < rightIndex) {
                        element.classList.add('sorted');
                    }
                    // Color for the unsorted part of the array
                    else {
                        element.classList.add('used-pivot');
                    }
                    // Highlight the currently selected element
                    if (index === leftIndex) {
                        element.classList.add('current-sel');
                    }
                    break;
            case 'mergeSort':
                console.log("Display Color:", segmentColor, "Index:", index);
                if (currentSegment && index >= currentSegment[0] && index <= currentSegment[1]) {
                    element.style.backgroundColor = segmentColor;
                }
                break;

        }
        container.appendChild(element);

    });
    // Add step description
    if (currentStep < steps.length) {
        let previousStep = currentStep > 0 ? steps[currentStep - 1] : null;
        let stepDescription = getDescription(steps[currentStep], previousStep, leftIndex, rightIndex, pivotIndex, algorithm);
        let logContainer = document.getElementById("log-container");
        logContainer.innerHTML += "Step " + (currentStep + 1) + ": " + stepDescription + "<br>";
        
        // Check if sorting is finished
        if (currentStep === steps.length - 1) {
            logContainer.innerHTML += "Finished sorting.<br>";
        }

        logContainer.scrollTop = logContainer.scrollHeight; // Scroll to the bottom
    }
}