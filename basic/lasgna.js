const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determines the number of minutes the lasagna still needs to remain in the oven to be properly prepared.
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */

function remainingMinutesInOven(actualMinutesInOven) {
    let remain = 0;
    try {
        remain = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
    } catch {
        throw new Error('Remove this line and implement the function');
    }
    return remain
}

function preparationTimeInMinutes(numberOfLayers) {
    let prep = 0;
    try {
        prep = PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
    } catch {
        throw new Error('Remove this line and implement the function');
    }
    return prep;
}


function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    let prepTime;
    try {
        prepTime = preparationTimeInMinutes(numberOfLayers);
    } catch {
        throw new Error('Remove this line and implement the function');
    }
    return prepTime + actualMinutesInOven;
}
console.log("Remaining Minutes")
console.log(remainingMinutesInOven(25))
console.log(remainingMinutesInOven(5))
console.log(remainingMinutesInOven(39))
console.log(remainingMinutesInOven(0))
console.log(remainingMinutesInOven(40))

console.log("\nPrep Time")

console.log(preparationTimeInMinutes(1))
console.log(preparationTimeInMinutes(2))
console.log(preparationTimeInMinutes(8))

console.log("\nTotal Time")
console.log(totalTimeInMinutes(1, 5));
console.log(totalTimeInMinutes(4, 15));
console.log(totalTimeInMinutes(1, 35));
