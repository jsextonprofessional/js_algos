// Fundamentals To Do 3


// 1. Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

const biggieSize = array => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = "big"
        }
    }
    console.log(array);
}

// biggieSize([-5,0,1,2,3,4]);



// 2. Print Low, Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

const printLowReturnHigh = array => {
    let hi = 0
    // console.log(`hi: ${hi}`);
    let low = 0
    // console.log(`low: ${low}`);
    for (var i = 0; i < array.length; i++) {
        // console.log(`i: ${i}`);
        if (array[i] <= low) {
            low = array[i];
            // console.log(`hi: ${hi}, low: ${low}`);
        }
        else {
            if (array[i] >= hi) {
                hi = array[i];
            }
        }
    }
    console.log(`hi: ${hi}, low: ${low}`);
    return hi
}

// printLowReturnHigh([-5,0,1,2,3,4]);
// printLowReturnHigh([3,3,3,3,3,3]);
// printLowReturnHigh([5,-2,3,0,69]);


// 3. Print One, Return Another
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.

const printOneReturnAnother = array => {
    let odd = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            odd = array[i];
            console.log(`array: ${array}; first odd value: ${odd}; value at second to last index: ${array[array.length-2]}`);
            return;
        }
    }
    console.log(` array: ${array}; no odd values in array; value at second to last index: ${array[array.length-2]}`);
    // console.log(`first odd value: ${odd}`);
}

// printOneReturnAnother([-4,0,2,1,3,4]);
// printOneReturnAnother([-2,0,2,4,6]);


// 4. Double Vision
// Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

const doubleVision = array => {
    console.log(`original array: ${array}`);
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    console.log(`new array: ${array}`);
}

// doubleVision([-3,0,1,2,3,4]);


// 5. Count Positives
// Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

const countPositives = array => {
    let positiveCounter = 0;
    console.log(`original array: ${array}`);
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveCounter += 1;
        }
    }
    array[array.length-1] = positiveCounter;
    console.log(`new array: ${array}`);
}

// countPositives([-2,-1,0,1,2,3,69]);


// 6. Evens and Odds - ******************* "else" EDGE CASE DOESN'T WORK ****************************************
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

const evensAndOdds = array => {
    let oddHodler = ["yeet"];
    let evenHodler = ["yoink"];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0 && array[i + 1] % 2 != 0 && array[i + 2] % 2 != 0) {
            oddHodler.push(array[i],array[i+1],array[i+2]);
            console.log(`That's odd -- array: ${array}; oddHodler: ${oddHodler}; evenHodler: ${evenHodler}.`);
            return;
        } else if (array[i] % 2 == 0 && array[i + 1] % 2 == 0 && array[i + 2] % 2 == 0) {
            evenHodler.push(array[i],array[i+1],array[i+2]);
            console.log(`Even more so -- array: ${array}; oddHodler: ${oddHodler}; evenHodler: ${evenHodler}.`);
            return;
        } 
        // else {
        //     console.log(`nothing weird here. array: ${array}; oddHodler: ${oddHodler}; evenHodler: ${evenHodler}.`);
        //     return;
        // }
    }
}

// evensAndOdds([-3,-1,0,1,3,69,70]);
// evensAndOdds([-2,0,1,2,4,6,9]);
// evensAndOdds([1,2,3,4,5,6]);


// 7. Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

const incrementTheSeconds = array => {
    console.log(`original array: ${array}`);
    for (let i = 0; i < array.length; i++) {
        console.log(`current index ${i}: ${array[i]}`);
        if (array[i] % 2 != 0) {
            array[i] += 1;
            console.log(`updated index ${i}: ${array[i]}`);
        }
    }
    console.log(`updated array: ${array}`);
}

// incrementTheSeconds([-3,0,1,2,3]);


// 8. Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

const previousLengths = array => {
    console.log(`original array: ${array}`);
    let stringHodler = [];
    let stringCounter = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "string") {
            stringHodler.push(array[i]);
            for (let x = 0; x < stringHodler.length; x ++) {
                stringCounter = stringHodler[x].length;
                array[i] = stringCounter;
                console.log(`updated array: ${array}, stringHodler: ${stringHodler}, stringCounter: ${stringCounter}`);
            }
        }
    }
}

// previousLengths([-4,0,1,"yeet",3,"tommy johns"]);


// 9. Add Seven to Most
// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

const addSevenToMost = array => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i > 0 && i < array.length) {
            newArray.push(array[i] + 7)
        }
    }
    console.log(`original array: ${array} has ${array.length} items; new array: ${newArray} has ${newArray.length} items`);
}

// addSevenToMost([-2,-1,0,1,2,3,4]);


// 10. Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].



// 11. Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].



// 12. Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.



// 13. Swap Toward the Center
// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].




// 14. Scale the Array
// Given array arr and number num, multiply each arr value by num, and return the changed arr.