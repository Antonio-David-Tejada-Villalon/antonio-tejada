const romanNumerals = new Map();
romanNumerals.set(1, 'I').set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
console.log(romanNumerals);

for(const key of romanNumerals.keys()){
  console.log(key);
}

for(const key1 of romanNumerals.values()){
    console.log(key1);
}

for(const [key, value] of romanNumerals.entries()){
    console.log(`${key} in Roman numerals is ${value}`);
}

//Quiz Ninja Project p.145

/* const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

let score = 0; //initialize score

for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    }else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

//At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
if(score < 3){
    alert("Refresh and try it again!");
}

//Right anwers
for(const [response1, response2] of quiz){
    console.log(response1);
    console.log(response2);
} */

//Testing a Function

function arguments(){
    return arguments;
}

console.log(arguments('hello', NaN));
console.log(arguments(1, 2, 3, 4, 5));

function rest(...args){
    for(arg of args){
        console.log(arg);
    }
}

rest(2, 4, 6, 8);

// Callbacks

const colors = ['Red', 'Green', 'Blue'];

colors.forEach( (color, index) => 
console.log(`Color at position ${index} is ${color}`));

// Improving Quiz Ninja Project p.180-181 

const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

function start(quiz){
    let score = 0;
    
    //main game loop
    for(const [question, answer] of quiz){
        const response = ask(question);
        check(response, answer);
    }

    // end of main game loop

    gameOver();

    // function declarations
    function ask(question){
        return prompt(question);
    }

    function check(response, answer){
        if(response === answer){
            alert('Correct!');
            score++;
        }else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}

start(quiz);

//Work Team

function SumAnyNumbers() {
    const input = parseInt(document.getElementById('input1').value, 10);

    const answer = sumAllNumbers(input);

    document.getElementById('result').innerHTML = answer;
  }

  function sumAllNumbers(num) {
    // num + num-1 ... 1
    // Ideas: Array with numbers, while loop w/ if-else, for-loop
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

  /*
  function handleInputs() {
    const input1 = parseInt(document.getElementById('input1').value, 10);
    const input2 = parseInt(document.getElementById('input2').value, 10);

    // do something with the inputs
    return [input1, input2];
  }

  function handleAdd() {
    // const [input1, input2] = handleInputs();
    const inputs = handleInputs();
    const input1 = inputs[0];
    const input2 = inputs[1];

    const answer = input1 + input2;

    document.getElementById('result').innerHTML = answer;
  }

  const handleSubtraction = function () {
    const [input1, input2] = handleInputs();

    const answer = input1 - input2;

    document.getElementById('result').innerHTML = answer;
  };

  const handleMultiplication = () => {
    const [input1, input2] = handleInputs();

    const answer = input1 * input2;

    document.getElementById('result').innerHTML = answer;
  };
  */

  function InputsX(callback) {
    const input1 = parseInt(document.getElementById('input1').value, 10);
    const input2 = parseInt(document.getElementById('input2').value, 10);

    // fnToUse: add, sub, mult
    const answer = callback(input1, input2);

    document.getElementById('result').innerHTML = answer;
  }

  function add(num1, num2) {
    return num1 + num2;
  }

  const sub = function (num1, num2) {
    return num1 - num2;
  };

  const mult = (num1, num2) => {
    return num1 * num2;
  };