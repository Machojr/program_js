const DISPLAY = document.getElementById('display');
const KEYS = document.getElementById('keys');
function button(display) {
    if(button==='AC') {
        display.value = '';
    }
    else if(button==='='){
        display.value = eval(display.value)
    }
    else if (button==='DE') {
        display.value= display.value.toString().slice(0, -1);
    } else {
        display.value += display.value;
    }

}