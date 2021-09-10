// Fundamentals To Do 4


// 0. Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s length immediately shortens it by that amount. Given array and number, remove all except the last number elements, and return array (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

// given array and number
const onlyKeepTheLastFew = (array, number) => {
    console.log(`original array: ${array}; number: ${number}`);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        // remove all except the last number elements
        if (i < number - 1) {
            array.shift(array[i]);
        }
    }
    // return array changed and shorter
    console.log(`updated array: ${array}`);
}

// onlyKeepTheLastFew([2, 4, 6, 8, 10], 3);
// onlyKeepTheLastFew([-2, 0, 1, 2, 3], 3);



// 1. Math Help
// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).

// given two numbers - m,b
const mathHelp = (m, b) => {
    // m and b are coefficients in y = mx + b
    // build function to return x-intercept (value of x where y = 0)
    let y = 0;
    // y = m*x + b;
    x = (y - b) / m;
    // x = y/m;
    console.log(`x: ${x}, y: ${y}, m: ${m}, b:${b}`);
}

// mathHelp(3,2);



// 2. Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.

// rand int
let randomizer = Math.floor(Math.random() * (100 - 1));
const whatHappensToday = () => {
    console.log("Poor Kenny");
    console.log(randomizer);
    // chain of else ifs 
    // set ranges
    if (randomizer >= 1 && randomizer <= 10) {
        console.log(`Random Number: ${randomizer}; OMG. That volcano killed Kenny.`);
    } else if (randomizer >= 11 && randomizer <= 25) {
        console.log(`Random Number: ${randomizer}; Dude, that tsunami drowned Kenny.`);
    } else if (randomizer >= 26 && randomizer <= 45) {
        console.log(`Random Number: ${randomizer}; Holy crap! That earthquake swallowed Kenny.`);
    } else if (randomizer >= 46 && randomizer <= 70) {
        console.log(`Random Number: ${randomizer}; No way, that blizzard buried Kenny.`);
    } else {
        console.log(`Random Number: ${randomizer}; Ah man. That meteor massacred Kenny.`);
    }
}
// whatHappensToday();


// 3. What Really Happened? ---------------------- NOT SOLVED --------------------------
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!

// const whatReallyHappensToday = () => {

// }

// whatReallyHappensToday();


// 4. Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?

const soaringIQ = () => {
    let IQ = 101;
    let bootcampDays = 7*14;
    let increaseFactor = .01;
    console.log(`Initial IQ: ${IQ}, bootcampDays: ${bootcampDays}`);
    for (var i = 0; i < bootcampDays; i++) {
        increaseFactor += .01;
        IQ += increaseFactor;
        console.log(`New IQ: ${IQ}`);
    }
    console.log(`Big Brain Final IQ: ${IQ}`);
}

// soaringIQ();


// 5. Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".

const letterGrade = (score) => {
    if (score >= 90 && score <=100) {
        console.log(`Score: ${score}, Letter Grade: A`);
    } else if (score >=80 && score <=89) {
        console.log(`Score: ${score}, Letter Grade: B`);
    } else if (score >=70 && score <=79) {
        console.log(`Score: ${score}, Letter Grade: C`);
    }else if (score >=60 && score <=69) {
        console.log(`Score: ${score}, Letter Grade: D`);
    } else {
        console.log(`Score: ${score}, Letter Grade: F`);
    }
}

letterGrade(100);
letterGrade(91);
letterGrade(85);
letterGrade(73);
letterGrade(69);
letterGrade(40);


// 6. More Accurate Grades
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .