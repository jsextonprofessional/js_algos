// Implement a command-line reverse polish notation (RPN) calculator using a language that you know well.
// We're building this command-line calculator for people who are comfortable with UNIX-like CLI utilities. We are starting with the basic 4 operators now but will want to eventually implement other operators and an alternate interface (such as WebSocket, file, or TCP socket). There's no need to implement these, but design with these future changes in mind.
// The calculator should use standard input and standard output
// It should implement the four standard arithmetic operators
// The calculator should handle errors and recover gracefully
// The calculator should exit when it receives a q command or an end of input indicator (EOF / Ctrl+D)
// You may take creative liberty with anything else; have fun with it!
// These hold true both for this submission and for your work here in general. We expect that:
// It works right
// The code is well-abstracted and uses good names
// It provides for a good user experience (end-user and programmer)
// The code adheres to style and practices accepted by the community
// Tests demonstrate intended use, help prevent regression, and can withstand change
// You write intention-revealing commit messages
// There are a range of expectations from various companies in their interviewing code exercises, from minimal code to get the job done and prove you can program, to expecting exemplary code that demonstrates how well you can design things when the occasion requires it. We tend to judge toward the latter end of the spectrum, assuming that anyone who can write well-crafted code can also scale down quality to do things quickly, but not necessarily the other way around.

const RPNCalculator = (input) => {
    console.log(`---------- FUNCTION START ----------`);
    if (input.length == 0) {
        console.log(`Error 1 -- Input: ${input}. Input must not be blank. Input should be array of numbers and mathematical operators.`);
        console.log(`---------- FUNCTION ABORT ----------`);
        return;
    }
    // holds symbols
    var operatorStack = [];
    // holds numbers
    var operandStack = [];
    var newOperand = 0;
    // check and sort input values into respective stacks for operands and operators
    for (var i = 0; i < input.length; i++) {
        if (operandStack.length < 2 && typeof input[i] != "number") {
            console.log(`Error 2 -- Invalid Input: ${input}. RPN operators must come after at least 2 operands; Input values must be +,*,-,/, or numbers.`);
            console.log(`---------- FUNCTION ABORT ----------`);
            return;
        } else if (typeof (input[i]) === "number") {
            // console.log(`input[i]: ${input[i]}`);
            operandStack.push(input[i]);
        } else if (input[i] == "+" || input[i] == "-" || input[i] == "*" || input[i] == "/") {
            // console.log(`input[i]: ${input[i]}`);
            operatorStack.push(input[i]);
        } else {
            console.log(`Error 3 -- Invalid Input: ${input}. Input values must be +,*,-,/, or numbers.`);
            console.log(`---------- FUNCTION ABORT ----------`);
            return;
        }
    }
    // establish newOperand as the value at the zeroeth index of operand stack
    newOperand = operandStack[0];
    // iterate thru operand stack starting at first index of operand stack
    for (var j = 1; j < operandStack.length; j++) {
        // iterate thru operator stack
        for (var k = 0; k < operatorStack.length; k++) {
            console.log(`newOperand: ${newOperand}, Current Operand: ${operandStack[j]}, Current Operator: ${operatorStack[k]}`);
            // console.log(`operatorStack[k]: ${operatorStack[k]}`);
            // apply operator[k] to operand[j] and newOperand
            if (operatorStack[k] == "+") {
                newOperand += operandStack[j];
            } else if (operatorStack[k] == "*") {
                newOperand *= operandStack[j];
            } else if (operatorStack[k] == "-") {
                newOperand -= operandStack[j];
            } else {
                newOperand = newOperand / operandStack[j];
            }
        }
        console.log(`operator stack: ${operatorStack}, operand stack: ${operandStack}, newOperand: ${newOperand}`);
        console.log(`Result: ${newOperand}`);
        console.log(`---------- FUNCTION END ----------`);
        return;
    }
}
// ----------  TEST CASES: -------------
// should output Result: 2
RPNCalculator([1, 2, "+", 3, "*", 4, "-", 2, "/"]);
// should output Result: 3
RPNCalculator([1,3,4,2,2,"+","*","-","/"]);
// should output Error 1
RPNCalculator([]);
// should output Error 2
RPNCalculator(["+",1,3,"*",2,"-",2,"/"]);
// should output Error 2
RPNCalculator(["-",1,3,"*",2,"-",2,"/"]);
// should output Error 2
RPNCalculator(["*",1,3,"*",2,"-",2,"/"]);
// should output Error 2
RPNCalculator(["/",1,3,"*",2,"-",2,"/"]);
// should output Error 2
RPNCalculator([1,"*",2,"-",2,"/"]);
// should output Error 2
RPNCalculator([1,"j",3,4]);
// should output Error 3
RPNCalculator([1,5,"j",3,4]);


