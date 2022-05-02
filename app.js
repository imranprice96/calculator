//let currentOperation = '';
//let firstNumber, secondNumber = '';

//TODO
//Add way to keep track of the current selection
//Maybe store everything in one string the use split or slice
//or append everything into one string then slice

const screen = document.getElementById('screen');

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const backspaceButton = document.querySelector('[data-backspace]');
const clearButton = document.querySelector('[data-clear]');

console.log(numberButtons);
numberButtons.forEach(btn => btn.addEventListener('click', (e) => {
    if(isButton(e)) {
        //THIS CAN BE SIMPLIFIED TO IF !CURRENTOPERATION -> FIRST NUMBER
        //ELSE SECOND NUMBER
        /*if(!firstNumber){
            firstNumber = e.target.value.toString();
            updateDisplay(e);
        }else if(firstNumber && !currentOperation) {
            firstNumber += e.target.value.toString();
            updateDisplay(e);
        }else if(firstNumber && currentOperation) {
            secondNumber += e.target.value.toString();
            updateDisplay(e);
        };*/
    }
}));

operationButtons.forEach(btn => btn.addEventListener('click', (e) => {
    if(isButton(e)) {
        chooseOperation(e.target.value);
        updateDisplay(e);
    }
}));

function isButton(e){
    return e.target.nodeName === 'BUTTON';
}

function clearScreen(){
    currentOperation, firstNumber, secondNumber = '';
};

function backspace(){

};

function appendNumber(){

};

function chooseOperation(operator){
    /*if(!currentOperation && firstNumber){
        currentOperation = operator;
    }*/
};

function compute(){

};

function updateDisplay(e){
    screen.textContent += e.target.value;
};