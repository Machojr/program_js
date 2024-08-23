const display = document.getElementById('display');
const button1 = document.getElementById('buttons');
function button() {
    onclick = (display.value(button));
    display.innerHTML = (`${button}`)
}
//display.innerHTML = document.getElementById()
function solve(input){
    display.value = eval(display.value);
    display.innerHTML=
}
function clear() {
    display.value = '';
}
function back() {
    display.value= display.value.toString().slice(0, -1);
}