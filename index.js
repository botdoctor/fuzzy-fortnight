function hello(){
    alert('hello world welcome to joe kleves final');
    document.querySelector('h1').innerHTML = 'Goodbye';
}


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
