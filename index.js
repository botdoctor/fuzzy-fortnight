// Named function: hello
function hello() {
    alert('Hello world! Welcome to Joe Kleve\'s final project.');
    const header = document.querySelector('h1');
    if (header.innerHTML === 'Hello world') {
        header.innerHTML = 'Goodbye';
    } else {
        header.innerHTML = "Hello world";
    }
}

// Named function: displayInput.
function displayInput() {
    const input = document.getElementById('userInput').value;
    const output = document.getElementById('output');
    if (input.trim()) {
        output.textContent = `You entered: ${input}`;
    } else {
        output.textContent = 'Please enter something!';
    }
}

// Here is my object and I 
const person = {
    name: "Joe Kleve",
    age: 23,
    occupation: "Website Maker"
};
function personpopup() {
alert(`Object example: ${person.name} is a ${person.occupation} at age ${person.age}.`);
}
// Create and use an array + loop. This will print on the website opening
const messages = ["Welcome to my site!", "Enjoy exploring!", "Check out the About page!", "Try the guessing game!"];
for (let i = 0; i < messages.length; i++) {
    alert(messages[i]);
}

// This is a guessing game I got from chatgpt that uses math.random to make a random number This also includes the try/catch of errors
const secretNumber = Math.floor(Math.random() * 10) + 1;  // random int 1-10



function checkGuess() {
    const guessInput = document.getElementById('guessInput').value;
    const guessOutput = document.getElementById('guessOutput');
    try {
        const guess = parseInt(guessInput, 10);
        if (isNaN(guess)) {
            throw new Error("Not a valid number.");
        }

        if (guess === secretNumber) {
            guessOutput.textContent = `Correct! The secret number was ${secretNumber}.`;
        } else {
            guessOutput.textContent = `Incorrect. Try again!`;
        }
    } catch (error) {
        guessOutput.textContent = `Error: ${error.message}`;
    }
}

// Made instead of button onlick="" made them event listeners since previous way did not work
document.getElementById('helloBtn').addEventListener('click', hello);
document.getElementById('displayInputBtn').addEventListener('click', displayInput);
document.getElementById('guessBtn').addEventListener('click', checkGuess);
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('personbtn').addEventListener('click', personpopup);
});

document.addEventListener('DOMContentLoaded', () => {
    arrayandloop();
});
