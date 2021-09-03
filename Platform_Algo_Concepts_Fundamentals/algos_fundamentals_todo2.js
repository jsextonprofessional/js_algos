// Fundamentals To Do 2


// 1. Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

// accepts number as input
function countdown(input) {
// need edge cases for 0 and negatives
    if (input > 0) {
        var array = [];
        // floop to countdown from input to 0. store each num in array.
        for (var i = input; i > -1; i--) {
            console.log(i);
            array.push(i);
        }
        console.log(`array: ${array}`);
        console.log(`array is ${array.length} items long`);
    } else if (input <= 0 || input == "") {
        console.log(`input must be positive integer. your input: ${input}`);
    }
// return a new array where array[0] = input
// return array.length should == input
} 

countdown(1)
countdown(0)
countdown(-1)
countdown(100)
// countdown(input)
// countdown("abc")


// 2. Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.


function printAndReturn(twoValueArray) {
    console.log(`first value: ${twoValueArray[0]}. second value: ${twoValueArray[1]}`);
    return twoValueArray[1];
}

printAndReturn([1,2]);
printAndReturn([-1,-2]);
printAndReturn([0,0]);
// printAndReturn([a,b]);
printAndReturn(["a","b"]);


// 3. First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(array) {
    if (typeof array[0] === 'number') {
        console.log(array[0]);
    } else {
        console.log("Yeet that out of hyah - numbers only plx");
    }
}

firstPlusLength([1,2,3]);
firstPlusLength([-1,-2,-3]);
firstPlusLength([0,1,2]);
// edge cases don't seem to be working:
// firstPlusLength([x,y,z]);
firstPlusLength(["string",2,3]);
firstPlusLength([false,2,3])


// 4. Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function valuesGreaterThanSecond(array) {
    // variable to store array[1]
    var z = 0;
    var greaterThanSecond = [] 
    console.log(`compare each index to ${array[1]}`);
    // while loop to iterate thru array
    while (z < array.length) {
        array[0] = array[z];
        console.log(`array[z]: ${array[z]}`);
        // compare each index to array[1]
        if (array[z] > array[1]) {
            // if greater push new array
            greaterThanSecond.push(array[z]);
        }
        z += 1;
    }
    console.log(`Values greater than array[1]: ${greaterThanSecond}`);
    // how many values in total?
    console.log(`Total values greater than array[1]: ${greaterThanSecond.length}`);

}

valuesGreaterThanSecond([1,3,5,7,9,13,2,0,-1]);


// 5. Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?



// 6. This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.



// 7. Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".



// 8. Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.




// 9. Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

// 10. (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.