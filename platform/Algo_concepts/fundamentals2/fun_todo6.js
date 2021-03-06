// Fundamentals To Do 6


// 0. Threes and Fives
// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

const threesAndFives = () => {
    sum = 0;
    for (var i = 100; i < 4000000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}

// threesAndFives();


// Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100,4000000).

const betterThreesAndFives = (start, end) => {
    sum = 0;
    for (var i = start; i <= end; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}

// betterThreesAndFives(1,5);
// betterThreesAndFives(1,50);


// 1. Generate Coin Change
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with the smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

// Example output, given (94):
// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4
// Second: can you simplify/shorten your code?

const generateCoinChange = (cents) => {
    console.log(`---------- FUNCTION START -----------`);
    let total = cents;
    let dollars = 0;
    let halfDollar = 0;
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    while (total > 100) {
        total -= 100;
        dollars += 1;
        // console.log(total,dollars);
        console.log(`Cents: ${cents}, Total: ${total}. Dollars: ${dollars}, Half-Dollar: ${halfDollar}, Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}.`);
    }
    if (total > 50) {
        total -= 50;
        halfDollar += 1;
        console.log(`Cents: ${cents}, Total: ${total}. Dollars: ${dollars}, Half-Dollar: ${halfDollar}, Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}.`);
    }
    while (total > 25) {
        total -= 25;
        quarters += 1;
        console.log(`Cents: ${cents}, Total: ${total}. Dollars: ${dollars}, Half-Dollar: ${halfDollar}, Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}.`);
    }
    while (total > 10) {
        total -= 10;
        dimes += 1;
        console.log(`Cents: ${cents}, Total: ${total}. Dollars: ${dollars}, Half-Dollar: ${halfDollar}, Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}.`);
    }
    while (total > 5) {
        total -= 5;
        nickels += 1;
        console.log(`Cents: ${cents}, Total: ${total}. Dollars: ${dollars}, Half-Dollar: ${halfDollar}, Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}.`);
    }
    while (total > 1) {
        total -= 1;
        pennies += 1;
        console.log(`Cents: ${cents}, Total: ${total}. Dollars: ${dollars}, Half-Dollar: ${halfDollar}, Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}.`);
    }
    console.log(`---------- FUNCTION END -----------`);
}

// generateCoinChange(69);
// generateCoinChange(420);
// generateCoinChange(9);
// generateCoinChange(1068);


// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.



// 2. Messy Math Mashup

// Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:

const messyMath = (num) => {
    console.log(`---------- FUNCTION START ----------`);
    let sum = 0;
    for (var i = 0; i <= num; i++) {
        var count = i;
        console.log(`TOP OF THE ITERATION -- num: ${num}, count: ${count}, sum: ${sum}`);
        // if the current count is exactly 1/3 of num, return -1 immediately.
        if (count == num / 3) {
            console.log(`RETURNING -1 ALLEGEDLY -- count: ${count}, sum: ${sum}, 1/3 of num: ${num / 3}`);
            return (-1);
            // If current count (not num) is evenly divisible by 3, don???t add to the sum; skip to the next count;
        } else if (count % 3 == 0 && count != 0) {
            console.log(`SKIPPING BC DIVISIBLE BY THREE -- count: ${count}, sum: ${sum}`);
            // Otherwise, if the current count is evenly divisible by 7, include it twice in sum instead of once
        } else if (count % 7 == 0 && count != 0) {
            sum += count;
            sum += count;
            console.log(`ADDED DOUBLE -- count: ${count}, sum: ${sum}`);
        } else {
            sum += i;
            console.log(`REGULAR OL PLUS i -- count: ${count}, sum: ${sum}`);
        }
    }
    console.log(`---------- FUNCTION END ----------`);
}

// if given num is 4, return 7. 
// messyMath(4);
// If given num is 8, return 34. 
// messyMath(8);
// If given num is 15, return -1.
// messyMath(15);


// 3. Twelve-Bar Blues
// Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" ??? continuing the same cycle for each number up to (including) 12.

const twelveBarBlues = () => {
    for (var i = 0; i < 13; i++) {
        console.log(i);
        console.log(`Chick`);
        console.log(`Boom`);
        console.log(`Chick`);
    }
}

// twelveBarBlues();


// 4. Fibonacci
// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). 
// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

const fibonacci = (input) => {
    console.log(`---------- FUNCTION START ----------`);
    var counter = 0;
    var hodler = [];
    for (var i = 0; i <= input; i++) {
        // console.log(`hodler.length: ${hodler.length}`);
        if (hodler.length > 1) {
            counter = hodler[hodler.length-1] + hodler[hodler.length-2];
            hodler.push(counter);
            console.log(`input: ${input}, counter: ${counter}`);
        } else {
            hodler.push(i);
            console.log(`input: ${input}, counter: ${counter}`);
        }
    }
    console.log(`Final value: ${hodler[hodler.length-1]}`);
    console.log(`---------- FUNCTION END ----------`);
}

// fibonacci(0);
// fibonacci(1);
// fibonacci(2);
// fibonacci(3);
// fibonacci(4);
// fibonacci(5);
// fibonacci(6);
// fibonacci(7);


// 5. Sum to One Digit
// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer???s digits repeatedly until the sum is only one digit. Return that one-digit result. 
// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

const sumToOneDigit = (input) => {
    var total = 0;
    var onesHodler = 0;
    var tensHodler = 0;
    var hundredsHodler = 0;
    while (input > 100) {
        hundredsHodler += 1;
        input -= 100;
        console.log(`total: ${total}, hundredsHodler: ${hundredsHodler}, tensHodler: ${tensHodler}, onesHodler: ${onesHodler}.`);
    }
    while (input > 10) {
        tensHodler += 1;
        input -= 10;
        console.log(`total: ${total}, hundredsHodler: ${hundredsHodler}, tensHodler: ${tensHodler}, onesHodler: ${onesHodler}.`);
    }
    while (input > 1) {
        onesHodler += 1;
        input -= 1;
        console.log(`total: ${total}, hundredsHodler: ${hundredsHodler}, tensHodler: ${tensHodler}, onesHodler: ${onesHodler}.`);
    }
    total = onesHodler + tensHodler + hundredsHodler;
    if (total > 9) {
        sumToOneDigit(total);
        console.log(`total: ${total}, hundredsHodler: ${hundredsHodler}, tensHodler: ${tensHodler}, onesHodler: ${onesHodler}.`);
    } else {
        console.log(`total: ${total}, hundredsHodler: ${hundredsHodler}, tensHodler: ${tensHodler}, onesHodler: ${onesHodler}.`);
    }
}

// should return 1
// sumToOneDigit(928);


// 6. Clock Hand Angles
// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind ??? like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock???s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands. As a review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." 
// Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.
// Second: also calculate and print degrees for an additional ???week hand??? that rotates once each week.

const clockHandAngles = (seconds) => {
    var hourHand = 0;
    var minuteHand = 0;
    var secondHand = 0;
    if (seconds > 100) {
        secondHand += 1;
        seconds -= 100;
    }
    console.log(`Hour Hand: ${hourHand} degrees. Minute Hand: ${minuteHand} degrees. Second Hand: ${secondHand} degrees.`);
}

// should return 1:00:00
clockHandAngles(3600);


// 7. Is Prime
// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now, just create one that is easy to understand and debug.
