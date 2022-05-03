
//TODO
//Add way to keep track of the current selection
//Maybe store everything in one string the use split or slice
//or append everything into one string then slice

//Create switch case for computation

let calculation = {
    firstNumber: '',
    secondNumber: '',
    operator: undefined
};

let lastPressed = {
    lastInput : undefined,
    lastType : undefined
}

const screen = document.getElementById('screen');

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const backspaceButton = document.querySelector('[data-backspace]');
const clearButton = document.querySelector('[data-clear]');

numberButtons.forEach(btn => btn.addEventListener('click', (e) => {
    if(isButton(e)) {
        appendNumber(e);
    }
}));

operationButtons.forEach(btn => btn.addEventListener('click', (e) => {
    if(isButton(e)) {
        chooseOperation(e);
    }
}));

backspaceButton.addEventListener('click', (e) => {
    if(isButton(e)) {
        backspace();
        sliceScreenText();
    }
});

function isButton(e){
    return e.target.nodeName === 'BUTTON';
}

function clearScreen(){
    calculation.currentOperation = undefined;
    calculation.firstNumber = '';
    calculation.secondNumber = '';
    calculation.lastPressed = undefined;
};

function appendNumber(e){
    let input = e.target.value.toString();
    if(!calculation.operator){
        if(decimalPointCheck(input)){
            if(hasDecimalPoint(calculation.firstNumber)){
                return;
            }else{
                calculation.firstNumber += input;
                updateDisplay(input);
                 setLastPressed(input, 'first');
            };
        }else{
            calculation.firstNumber += input;
            updateDisplay(input);
            setLastPressed(input, 'first');
        };
    };


    if(calculation.operator){
        if(decimalPointCheck(input)){
            if(hasDecimalPoint(calculation.secondNumber)){
                return;
            }else{
                calculation.secondNumber += input;
                updateDisplay(input);
                 setLastPressed(input, 'second');
            };
        }else{
            calculation.secondNumber += input;
            updateDisplay(input);
            setLastPressed(input, 'second');
        };
    };
};

function chooseOperation(e){
    if(!calculation.operator && calculation.firstNumber.length > 0){
        let op = e.target.value;
        calculation.operator = op;
        updateDisplay(op);
        setLastPressed(op, 'op');
    }
};

function compute(){
    //switch
};

function updateDisplay(input){
    screen.textContent += input;
};

function setLastPressed(input, type){
    lastPressed.lastInput = input;
    lastPressed.lastType = type;
    console.log(`last: ${lastPressed.lastInput} ${lastPressed.lastType}`);
};

function hasDecimalPoint(number){
    return number.includes('.');
};

function decimalPointCheck(str){
    return str == '.';
};

function backspace(){
    switch(lastPressed.lastType){
        case 'first':
            calculation.firstNumber = calculation.firstNumber.slice(0,-1);
            sliceScreenText();
            break;
        case 'second':
            calculation.secondNumber = calculation.secondNumber.slice(0,-1);
            sliceScreenText();
            break;
        case 'op':
            calculation.operator = undefined;
            sliceScreenText();
            break;
    };
}

function sliceScreenText(){
    screen.textContent.slice(0,-1);
}