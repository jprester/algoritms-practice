var App = (function () {
    "use strict";

    function init() {
        // Check dependencies
        if (!Algorithms || !Constants) {
            console.error("Missing dependencies");

            return;
        }

        var app = {};

        _setupUI();
        _setupEvents();
    }

    function _setupUI() {
        app.app = document.getElementById("app");

        // Search Algorithms
        app.checkButton = document.getElementById("checkNumButton");
        app.numTxtBox = document.getElementById("numTextBoxSearchAlgorithms");
        app.radioButtonLinear = document.getElementById("radioButtonLinearSearch");
        app.radioButtonBinary = document.getElementById("radioButtonBinarySearch");
        app.resultTextBoxSearch = document.getElementById("resultTextBoxSearch");

        // Sorting Algorithms
        app.sortNumbersButton = document.getElementById("sortNumbersButton");
        app.resultTextBoxSort = document.getElementById("resultTextBoxSort");
        app.insertSortNumbersButton = document.getElementById("insertSortNumbersButton");
        app.insertSortRightIndexInput = document.getElementById("insertSortRightIndexInput");
        app.insertSortValueInput = document.getElementById("insertSortValueInput");
        app.resultTextInsertBoxSort = document.getElementById("resultTextBoxInsertSort");
        app.insertionSortButton = document.getElementById("insertionSortButton");
        app.resultTextBoxInsertionSort = document.getElementById("resultTextBoxInsertionSort");

        // Recursive Algorithms
        app.numTextBoxIterativeFactorial = document.getElementById("numTextBoxIterativeFactorial");
        app.iterativeFactorialButton = document.getElementById("iterativeFactorialButton");
        app.resultTextBoxIterativeFactorial = document.getElementById("resultTextBoxIterativeFactorial");

        app.quickSortButton = document.getElementById("quickSortButton");
        app.resultTextBoxQuickSort = document.getElementById("resultTextBoxQuicksort");
    }

    function _setupEvents() {
        app.checkButton.addEventListener("click", _onCheckButtonClickRef);
        app.sortNumbersButton.addEventListener("click", _onSortButtonClickRef);
        app.insertSortNumbersButton.addEventListener("click", _onInsertButtonClickRef);
        app.insertionSortButton.addEventListener("click", _onInsertionSortButtonClickRef);
        app.iterativeFactorialButton.addEventListener("click", _onIterativeFactorialButtonClickRef);
        app.quickSortButton.addEventListener("click", _onQuickSortButtonClickRef);
    }

    function _onCheckButtonClickRef() {
        var primes = Constants.getConstant("primesList"),
            numberToCheck;

        numberToCheck = parseInt(app.numTxtBox.value, 10);
        app.resultTextBoxSearch.innerText = "";

        if (!_validateInput(primes, numberToCheck)) {
            app.resultTextBoxSearch.innerText = Constants.getConstant("validateInputError");

            return;
        }

        var resultText = app.radioButtonLinear.checked ?
            Algorithms.doLinearSearch(primes, numberToCheck) : Algorithms.doBinarySearch(primes, numberToCheck);

        if (resultText) {
            app.resultTextBoxSearch.innerText = "Is the number " + numberToCheck +
            " a prime number? " + (resultText.isPrime ? "Yes" : "No") + ". Number of tries: " + resultText.numOfTries;
        } else {
            app.resultTextBoxSearch.innerText = "Something went wrong while running the algorithm.";
        }
    }

    function _onSortButtonClickRef() {
        var sortingList = [],
            resultSelectionSort;

        resultSelectionSort = Algorithms.doSelectionSort(Constants.getConstant("sortingList").clone()).join(", ");
        app.resultTextBoxSort.innerText = resultSelectionSort;
    }

    function _onInsertButtonClickRef() {
        var rightIndex = parseInt(app.insertSortRightIndexInput.value, 10),
            value = parseInt(app.insertSortValueInput.value, 10),
            insertList = Constants.getConstant("insertionList").clone() || [],
            resultInsertSelectionSort = "";

        app.resultTextInsertBoxSort.innerText = "";

        if (!_validateInput(insertList, rightIndex)) {
            app.resultTextInsertBoxSort.innerText = Constants.getConstant("validateInputError");

            return;
        }

        if (!_validateInput(insertList, value)) {
            app.resultTextInsertBoxSort.innerText = Constants.getConstant("validateInputError");

            return;
        }

        resultInsertSelectionSort = Algorithms.doInsert(insertList, rightIndex, value).join(", ");

        app.resultTextInsertBoxSort.innerText = resultInsertSelectionSort;

        // RESET
        rightIndex = "";
        value = "";
        insertList = [];
        resultInsertSelectionSort = "";
        app.insertSortRightIndexInput.value = "";
        app.insertSortValueInput.value = "";
    }

    function _onInsertionSortButtonClickRef() {
        var insertionSortList = Constants.getConstant("insertionSortList").clone() || [];

        app.resultTextBoxInsertionSort.innerText = Algorithms.doInsertionSort(insertionSortList).join(", ");
    }

    function _onQuickSortButtonClickRef() {
        var quickSortList = [];

        app.resultTextBoxQuickSort.innerText = "something";
    }

    function _validateInput(array, targetValue) {
        if (!array || !targetValue || isNaN(targetValue) || targetValue > 100 || targetValue < 1) {
            return false;
        };

        return true;
    }

    function _onIterativeFactorialButtonClickRef() {
        var iterativeFactorialNumber = app.numTextBoxIterativeFactorial.value;

        app.resultTextBoxIterativeFactorial.innerText = Algorithms.doIterativeFactorial(iterativeFactorialNumber);
        app.numTextBoxIterativeFactorial.value = "";
    }

    function reset() {
        app.checkButton.removeEventListener("click", onCheckButtonClickRef);
        app.sortNumbersButton.removeEventListener("click", onCheckButtonClickRef);
        app.checkButton = null;
        app.numTxtBox = null;
        app.radioButtonLinear = null;
        app.radioButtonBinary = null;
        app.resultTextBoxSearch = null;
        app.resultTextBoxSort = null;
        app.app = null;
    }

    return {
        init: init
    };
})();

