// This weekend, for a challenge, create a fill-in-the-blank quiz game. Ask the user’s name, then refer to the user by name as you ask him/her a series of questions that you have stored in an array. Use the prompt() function to get each input from the user and compare it to the answer you expected. When the user enters “Q” (for quit), or perhaps when the user hits [Cancel], exit the game and print the statistics of the game to the console: username, number of questions answered and questions correct.

// const gameTime = () => {
//     // ask what is your name? with prompt()
//     var username = prompt("You there, what is your name?");
//     return username;
//     // cancel with q or quit or cancel - print final stats: username, number of questions answered and number of questions correct
// }

// gameTime();

function myFunction() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}

myFunction();