// Fundamentals To Do 5


// 0. Sigma
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

const sigma = (num) => {
    let counter = 0;
    for (let i = 0; i <= num; i++) {
        counter += i;
        console.log(`i: ${i}; counter: ${counter}`);
    }
}

// sigma(3);
// sigma(5);

// 1. Factorial
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). 

// For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).

const factorial = (num) => {
    let multiple = 1;
    for (let i = 1; i <= num; i++) {
        multiple *= i;
        console.log(`i: ${i}; multiple: ${multiple}`);
    }
    console.log(`factorial(${num}): ${multiple}`)
}

// factorial(3);
// factorial(5);
// factorial(-5);


// 3. Star Art
// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (the first star would be very first char in the text field), or right-justified (the last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75- character text field (with the same number of spaces on either side of the block of stars, plus/minus one).

// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
const drawLeftStars = (num) => {
    let hodler = [];
    for (let i = 0; i <= num; i++) {
        hodler.push("*");
    }
    console.log(`input: ${num}. hodler: ${hodler}`);
}

// drawLeftStars(10);


// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. The last num characters should be asterisks; the other 75 should be spaces.  

const drawRightStars = (num) => {
    let hodler = [];
    for (let i = 0; i <= 75; i++) {
        hodler.push(" ");
    }
    for (let j = 0; j < num; j++) {
        hodler.push("*");
    }
    console.log(`num: ${num}. hodler: ${hodler}`);
}

// drawRightStars(3);


// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.
const drawCenteredStars = (input) => {
    // create array of 75 spaces
    let array = [];
    // this seems easier with an ever number
    for (var i = 0; i <= 75; i++) {
        array.push(" ");
        // console.log(`i: ${i}`);
    }
    let halfInput = Math.floor(input / 2);
    let midpoint = Math.floor(array.length / 2);
    // left and right hodlers?
    let arrayMiddleLowerBound = midpoint - halfInput;
    let arrayMiddleUpperBound = midpoint + halfInput;
    // cut array in half
    for (var j = 0; j < array.length; j++) {
        // could write it to include conditionals for if input is odd or even
        // console.log(j);
        if (j >= arrayMiddleLowerBound && j <= arrayMiddleUpperBound) {
            array[j] = "*";
            console.log(j);
            for (var z = array[midpoint - halfInput]; z <= array[midpoint + (halfInput)]; z++) {
                console.log(`halfInput: ${halfInput}, midpoint: ${midpoint}, arrayMiddleLowerBound: ${arrayMiddleLowerBound}, arrayMiddleUpperBound: ${arrayMiddleUpperBound}, z: ${z}.`);
                // array.replaceAt(input, ("*")*input);
            }
        }
    }
    console.log(`input: ${input}, array: ${array}`);
}

// also seems easier with an even number
// drawCenteredStars(4);
// drawCenteredStars(5);

// (Optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.

const empireVsRebellion = (input) => {
    // create array of 75 spaces
    let array = [];
    for (var i = 0; i <= 75; i++) {
        array.push(" ");
    }
    let midpoint = Math.floor(array.length / 2);
    // if thens for rebellion or empire
    if (input % 2 == 0) {
        array[midpoint] = "(=*=)"
    } else {
        array[midpoint] = ">0<"
    }
    console.log(`array: ${array}`);
}

// empireVsRebellion(2);
// empireVsRebellion(3);


// 4. Character Art
// From the above, derive the following that accepts and draws the given characters, not just asterisks:

// drawRightChars(num,char)
// For all three of these, you can safely assume that 'char'is a string with the length of 1.

// drawCenteredChars(num,char)
const drawCenteredChars = (num,char) => {
    let array = [];
    for (var i = 0; i <= 75; i++) {
        array.push(" ");
        console.log(array);
    }
    let halfNum = Math.floor(num / 2);
    let midpoint = Math.floor(array.length / 2);
    // left and right hodlers?
    let arrayMiddleLowerBound = midpoint - halfNum;
    let arrayMiddleUpperBound = midpoint + halfNum;
    // cut array in half
    for (var j = 0; j < array.length; j++) {
        // could write it to include conditionals for if input is odd or even
        // console.log(j);
        if (j >= arrayMiddleLowerBound && j <= arrayMiddleUpperBound) {
            array[j] = char;
            console.log(j);
        }
    }
    console.log(`num: ${num}, array: ${array}`);
}

drawCenteredChars(3,"x");
drawCenteredChars(35,"<3")

// It is imperative at this point in the bootcamp that you can rapidly complete the mandatory coding challenges from the Algorithm Platform. If you have not yet correctly answered each of them in under two minutes, then revisit the Algorithm Platform, “Reset All Challenges”, and see how speedily you can complete them. Repeat until you can reliably finish each of them in less than two minutes.