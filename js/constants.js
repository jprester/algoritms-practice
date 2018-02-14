var Constants = (function () {
    "use strict";

    var ConstantsList = {
        "validateInputError": "Please check if the input is correct. " +
            "(It has to be a number between 1 and 100.) ",
        "primesList": [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],
        "sortingList": [22, 11, 99, 88, 9, 7, 42],
        "insertionList": [3, 5, 7, 11, 13, 2, 9, 6],
        "insertionSortList": [22, 11, 99, 88, 9, 7, 42],
        "quickSortList": [22, 11, 99, 88, 9, 7, 42]
    };

    function getConstant(constant) {
        if (constant && ConstantsList && ConstantsList[constant]) {
            return ConstantsList[constant];
        }
    }

    return {
        getConstant: getConstant
    };
})();

