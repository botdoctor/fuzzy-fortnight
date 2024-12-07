function hello(){
    alert('hello world welcome to joe kleves final');
    if (document.querySelector('h1').innerHTML === 'Hello world'){
        document.querySelector('h1').innerHTML = 'Goodbye';
    } else {
    document.querySelector('h1').innerHTML = "Hello world";
    }
}
// This function will have a popup alert that says the text and then checks if the H1 value is equal to Hello world. If it is it will change it to goodbye
// This is where my if else statement is located

function test(){
alert('testing')
}

function displayInput() {
    const input = document.getElementById('userInput').value;
    const output = document.getElementById('output');
    if (input.trim()) {
        output.textContent = `You entered: ${input}`;
    } else {
        output.textContent = 'Please enter something!';
    }
}


let username;
username = window.prompt(Input a number 1-10)
let play = document.getElementById("playmusic")