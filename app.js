
const screen = document.getElementById('screen');

const buttons = document.querySelectorAll('.buttons');
buttons.forEach(btn => btn.addEventListener('click', (e) => {
    if(isButton(e)) {
        console.log(e.target.value);
        screen.textContent += e.target.value;
    }
}));

const clearButtons = document.querySelectorAll('.clear-container');
clearButtons.forEach(btn => btn.addEventListener('click', (e) => {
    if(e.target.value === 'clear'){screen.textContent = ''; return};
    if(isButton(e)) {
        console.log(e.target.value);
        screen.textContent += e.target.value;
    } else {return}
}));

function isButton(e){
    return e.target.nodeName === 'BUTTON';
}
