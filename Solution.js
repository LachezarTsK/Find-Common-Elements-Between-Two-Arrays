
/**
 * @param {number[]} inputOne
 * @param {number[]} inputTwo
 * @return {number[]}
 */
var findIntersectionValues = function (inputOne, inputTwo) {
    this.RANGE_OF_VALUES = [1, 100];
    
    return [
        totalElementsInSourceThatOccurAtLeastOnceInTarget(inputOne, inputTwo),
        totalElementsInSourceThatOccurAtLeastOnceInTarget(inputTwo, inputOne)
    ];
};

/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {number}
 */
function totalElementsInSourceThatOccurAtLeastOnceInTarget(source, target) {
    const frequencyCharacters = new Array(this.RANGE_OF_VALUES[1] + 1).fill(0);
    for (let n of source) {
        ++frequencyCharacters[n];
    }

    let totalElementsInSourceThatOccurAtLeastOnceInTarget = 0;
    const visited = new Array(this.RANGE_OF_VALUES[1] + 1).fill(false);
    for (let n of target) {
        if (frequencyCharacters[n] > 0 && !visited[n]) {
            totalElementsInSourceThatOccurAtLeastOnceInTarget += frequencyCharacters[n];
            visited[n] = true;
        }
    }
    return totalElementsInSourceThatOccurAtLeastOnceInTarget;
}
