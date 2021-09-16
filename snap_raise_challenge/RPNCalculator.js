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
    console.log(`YEET -- U HEARD IT HERE FOIST -- U GOT FOISTED`);
    var operatorStack = [];
    var operandStack = [];
    var newOperand = 0;
    for (var i = 0; i < input.length; i++) {
        if (typeof(input[i]) === "number") {
            console.log(`NUMBER DADi UHH`);
            operandStack.push(input[i]);
        } else if (input[i] == "+" || input[i] == "-" || input[i] == "*" || input[i] == "/") {
            operatorStack.push(input[i]);
            if (operatorStack[0] == "+") {
                operatorStack.pop();
                newOperand = operandStack[0]+operandStack[1];
                (operandStack.shift())*2;
            } else if (operatorStack[0] == "*") {
                operatorStack.pop();
            }
        } else {
            console.log(`invalid input: ${input}`);
        }
    }
    console.log(`operator stack: ${operatorStack}, operand stack: ${operandStack}`);
}

// should output 1
RPNCalculator([1,2,"+",3,"*",4,"-",2,"/"]);
// should output ...
// RPNCalculator([1,3,4,2,2,"+","*","-","/"]);
// RPNCalculator(["+"]);
// RPNCalculator(["-"]);
// RPNCalculator(["*"]);
// RPNCalculator(["/"]);