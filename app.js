

//
let calculation = {
    firstNumber: '',
    secondNumber: '',
    operator: undefined
};

const screen = document.getElementById('screen');


// ------------------------------------------------------------------------ //
// SCREEN BUTTONS
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
    }
});

clearButton.addEventListener('click', (e) => {
    if(isButton(e)) {
        clearScreen();
    }
});

equalsButton.addEventListener('click', (e) => {
    if(isButton(e)) {
        compute();
    }
});

function isButton(e){
    return e.target.nodeName === 'BUTTON';
}
// ------------------------------------------------------------------------ //
//SCREEN UPDATING
function clearScreen(){
    calculation.operator = undefined;
    calculation.firstNumber = '';
    calculation.secondNumber = '';
    updateDisplay();
};

function appendNumber(e){
    let input = e.target.value.toString();
    if(!calculation.operator){
        if(decimalPointCheck(input)){
            if(hasDecimalPoint(calculation.firstNumber)){
                return;
            }else{
                calculation.firstNumber += input;
                updateDisplay();
            };
        }else{
            calculation.firstNumber += input;
            updateDisplay();
        };
    };

    if(calculation.operator){
        if(decimalPointCheck(input)){
            if(hasDecimalPoint(calculation.secondNumber)){
                return;
            }else{
                calculation.secondNumber += input;
                updateDisplay();
            };
        }else{
            calculation.secondNumber += input;
            updateDisplay();
        };
    };
};

function chooseOperation(e){
    if(!calculation.operator && calculation.firstNumber.length > 0){
        let op = e.target.value;
        calculation.operator = op;
        updateDisplay();
    }
};



function updateDisplay(){
    let screenContent = getCalculationData();
    screen.textContent = screenContent;
    //console.log(`screen content: ${screenContent}`);
};



function backspace(){
    switch(checkData()){
        case 'first':
            calculation.firstNumber = calculation.firstNumber.slice(0,-1);
            updateDisplay();
            break;
        case 'second':
            calculation.secondNumber = calculation.secondNumber.slice(0,-1);
            updateDisplay();
            break;
        case 'op':
            calculation.operator = undefined;
            updateDisplay();
            break;
        case 'none':
            break;
    };  
}
// ------------------------------------------------------------------------ //
// CHECK FUNCTIONS
function checkData(){
    if(calculation.firstNumber.length > 0 && calculation.operator && calculation.secondNumber.length > 0){
        return 'second';
    }
    else if(calculation.firstNumber.length > 0 && calculation.operator){
        return 'op';
    }
    else if(calculation.firstNumber.length > 0){
        return 'first';
    }
    return 'none';
}

function getCalculationData(){
    let screenData = '';
    switch(checkData()){
        case 'first':
            screenData += calculation.firstNumber;
            break;
        case 'op':
            screenData += calculation.firstNumber + calculation.operator;
            break;
        case 'second':
            screenData += calculation.firstNumber + calculation.operator + calculation.secondNumber;
            break;
        case 'none':
            break;
    };
    return screenData;
}

function hasDecimalPoint(number){
    return number.includes('.');
};

function decimalPointCheck(str){
    return str == '.';
};



// ------------------------------------------------------------------------ //
//COMPUTATION
function add(a,b){return a+b};

function subtract(a,b){return a-b}

function multiply(a,b){return a*b}

function divide(a,b){return a/b}

function operate(operator, a, b){
    let result;
    let first = parseFloat(a);
    let second = parseFloat(b);
    switch(operator){
        case '+':
            result = add(first,second);
            break;
        case '-':
            result = subtract(first,second);
            break;
        case '*':
            result = multiply(first,second);
            break;
        case '/':
            if(second == 0){
                alert('Cannot divide by 0!');
                break;
            };
            result = divide(first,second);
            break;
    };
    return result;
}

function compute(){
    let result;
    if(checkData() == 'second'){
        result = operate(calculation.operator, calculation.firstNumber, calculation.secondNumber);
        clearScreen();
        calculation.firstNumber = result.toString();
        updateDisplay();
    };
};

