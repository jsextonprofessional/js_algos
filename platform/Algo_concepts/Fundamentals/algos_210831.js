// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

var myNumber = 42
var myName = "Jake"
var temp = []

function setAndSwap() {
    temp = myNumber;
    myNumber = myName;
    myName = temp;
    console.log("myNumber:", myNumber);
    console.log("myName:", myName);
}

// setAndSwap();


// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

function floopPrinter() {
    for (var i = -52; i < 1067; i++) {
        console.log("floopPrinter:", i)
    }
}

// floopPrinter()

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful() {
    for (var i = 1; i < 99; i++) {
        console.log("good morning!", i)
    }
}

// beCheerful()


// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function multiplesOfThree() {
    for (var i = -300; i < 1; i++) {
        if (i % 3 == 0 && i != -3 && i != -6) {
            console.log("multiplesOfThree:", i);
        }
    }
}

// multiplesOfThree()

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

function whilePrinter() {
    var num = 2000
    while (num > 1999 && num < 5281) {
        console.log("whilePrinter:", num);
        num += 1
    }
}

// whilePrinter();


// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

function isBirthday(input1, input2) {
    if (input1 == 10 && input2 == 21 || input1 == 21 && input2 == 10) {
        console.log("Input 1:", input1, "| Input 2: ", input2, "| How did u know?");
    } else {
        console.log("Input 1:", input1, "| Input 2: ", input2, "| Just another day..");
    }
}

// isBirthday(10, 21);
// isBirthday(21, 10);
// isBirthday(19, 10);
// isBirthday(10, 19);
// isBirthday(11, 21);
// isBirthday(21, 11);


// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(year) {
    if (year % 100 == 0 && year % 400 != 0) {
        console.log("Year: ", year, "- Not a leap year but YEET!");
    } else if (year == 400 || year % 4 == 0) {
        console.log("Year: ", year, "- HAPPY LEAP YEAR YEET!");
    } else {
        console.log("Year: ", year, "- Not a leap year but YEET!");
    }
}

// leapYear(2016)
// leapYear(2020)
// leapYear(2021)
// leapYear(100)
// leapYear(200)
// leapYear(300)
// leapYear(400)


// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

function printAndCount() {
    var counter = 0
    var multiples = []
    for (var i = 512; i < 4097; i++) {
        if (i % 5 == 0) {
            multiples.push(i);
            counter += 1
        }
    }
    console.log(`There are ${counter} multiples of 5 between 512 and 4097 . They are: ${multiples}.`);
}

// printAndCount()

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

function multiplesOfSix() {
    var num = 0;
    var sixes = [];
    while (num < 60001) {
        if (num % 6 == 0) {
            sixes.push(num);
        }
        num = num + 1;
    }
    console.log(`These are the multiples of 6 from 0-60,000: ${sixes}`);
}

// multiplesOfSix();


// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

function dojoCounter() {
    for (var i = 1; i < 101; i++) {
        if (i % 10 == 0) {
            console.log("CodingDojo");
        } else if (i % 5 == 0) {
            console.log("Coding");
        } else {
            console.log(i);
        }
    }
}

// dojoCounter();


// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.

function whatDoYouKnow(input) {
    console.log(`input: ${input}`);
}

// whatDoYouKnow(1);
// whatDoYouKnow(69);
// whatDoYouKnow(420);
// whatDoYouKnow("Hello Clarice");


// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

function hugeSucker() {
    var sum = 0;
    var num = -300001
    while (num < 30001) {
        console.log(`Current Num: ${num}`);
        console.log(`Current Sum: ${sum}`);
        sum += num;
        num += 2;
    }
    console.log(`Final Sum: ${sum}`);
}
//     var sum = 0
//     for (var i = -3001; i < 3001; i + 2) {
//         sum += i;
//         console.log(`Current sum: ${sum}`);
//     }
//     console.log(`Final sum: ${sum}`);
// }

// hugeSucker();


// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

function countdownByFours() {
    var num = 2016;
    while (num > 0) {
        console.log(num);
        num -= 4;
    }
}

// countdownByFours();


// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function flexibleCountdown(lowNum, highNum, mult) {
    var multHolder = []
    if (highNum < lowNum) {
        console.log(`highNum must be greater than lowNum. highNum: ${highNum}, lowNum: ${lowNum}.`);
    } else if (mult == 0) {
        console.log(`cannot multiply by 0. highNum: ${highNum}, lowNum: ${lowNum}, mult: ${mult}.`);
    } else if (mult > highNum) {
        console.log(`mult too large for range. highNum: ${highNum}, lowNum: ${lowNum}, mult: ${mult}.`);
    } else {
        for (var i = highNum; i > lowNum; i--) {
            console.log(`i: ${i}`);
            if (i % mult == 0) {
                multHolder.push(i);
                console.log(`${i} is a multiple of ${mult} - push it`);
            }
            console.log(multHolder);
        }
    }
}

// flexibleCountdown(1, 10, 2);
// flexibleCountdown(5, 500, 5);
// flexibleCountdown(9, 21, 3);
// flexibleCountdown(10, 1, 2);
// flexibleCountdown(1, 2, 10);
// flexibleCountdown(1,10,0);

// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

// param1 = mult; param2 = start; param3 = end; param4 = kill;
// use while loop
// if param1 == param4
function finalCountdown(param1, param2, param3, param4) {
    var multHolder = []
    while (param2 < param3) {
        console.log(param2);
        if (param2 % param1 == 0 && param2 != param4) {
            multHolder.push(param2)
        }
        param2 += 1; 
    }
    console.log(multHolder);
}
finalCountdown(3, 4, 17, 9);