var Algorithms = (function () {
    "use strict";

    // SEARCH ALGORITHMS:

    function doLinearSearch(array, targetValue) {
        var numOfTries,
            i;

        for (i = 0; i < array.length; i++) {
            if (array[i] === targetValue) {
                return {
                    numOfTries: i || 0,
                    isPrime: true
                };
            }
        }

        return {
            numOfTries: i,
            isPrime: false
        };
    }

    /* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
    function doBinarySearch(array, targetValue) {
        if (!array || !targetValue || isNaN(targetValue) || targetValue > 100 || targetValue < 1) {
            return false;
        }

        var min = 0,
            max = array.length - 1,
            numOfTries = 0,
            guess,
            isPrime;

        while (min <= max) {
            numOfTries = numOfTries + 1;
            guess = Math.floor((max + min) / 2);

            if (array[guess] === targetValue) {
                return {
                    numOfTries: numOfTries || 0,
                    finalGuess: guess || 0,
                    isPrime: true
                };
            } else if (array[guess] < targetValue) {
                min = guess + 1;
            } else {
                max = guess - 1;
            }
        }

        return {
            numOfTries: numOfTries,
            finalGuess: guess || 0,
            isPrime: false
        };
    }

    // SORTING ALGORITHMS

    function selectionSort(array) {
        var newArray = [],
            currentIndex;

        for (var j = 0; j < array.length; j++) {
            currentIndex = _indexOfMinimum(array, j);
            _swap(array, j, currentIndex);
        }

        return array;
    }

    function _swap(array, firstIndex, secondIndex) {
        var temp = array[firstIndex];

        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    };

    function _indexOfMinimum(array, startIndex) {
        var minValue = array[startIndex];
        var minIndex = startIndex;

        for (var i = minIndex + 1; i < array.length; i++) {
            if (array[i] < minValue) {
                minIndex = i;
                minValue = array[i];
            }
        }

        return minIndex;
    }

    function doInsert(array, rightIndex, value) {
        var i = 0;

        for (i = rightIndex; i >= 0 && array[i] > value; i--) {
            array[i+1] = array[i];
        }

        array[i+1] = value;

        return array;
    }

    function doInsertionSort(array) {
        for (var i = 1; i < array.length; i++) {
            doInsert(array, i-1, array[i]);
        }

        return array;
    }

    function doIterativeFactorial(number) {
        var result = 1;

        for (var i = 0; i < number; i++) {
            result = result * (number - i);
        }

        return result;
    }

    return {
        doLinearSearch: doLinearSearch,
        doBinarySearch: doBinarySearch,
        doSelectionSort: selectionSort,
        doInsert: doInsert,
        doInsertionSort: doInsertionSort,
        doIterativeFactorial: doIterativeFactorial
    };
})();

