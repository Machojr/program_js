const display = document.getElementById('displayScreen');
const btnSawasawa = document.getElementById('sawasawa');
let temporary='';
let operator='';
let calculate = '';

const kitufe = document.querySelectorAll('.kitufe');
console.log(kitufe);
kitufe.forEach(function (kitufe) {
    console.log(kitufe);
    console.log(kitufe.attributes.value.value);
    kitufe.addEventListener('click', function () {
        const kitufeValue = kitufe.attributes.value.value;
        if (kitufeValue === 'C' || kitufeValue === 'AC') {
            display.value = '';
        } else if (kitufeValue === '=') {
            calculate = (`${temporary}${operator}${display.value}`);
            display.value = eval(calculate);
        }else if(kitufeValue==='*' || kitufeValue==='+'|| kitufeValue==='/' || kitufeValue==='-'){
            temporary = display.value;
            display.value = '';
            operator = kitufeValue;
        } else {
            display.value += kitufeValue;
        }
    });
    });

// function kitufeKimebonyezwa(e) {
//     //const kitufe = e.target;
//     console.log(e);
//     const kitufeValue = kitufe.innerText;
//     if (kitufeValue === 'C') {
//         display.value = '';
//     } else if (kitufeValue === '=') {
//         display.value = eval(display.value);
//     } else {
//         display.value += kitufeValue;
//     }
// }




// function button() {
//     onclick = (display.value(button));
//     display.innerHTML = (`${button}`)
// }
// //display.innerHTML = document.getElementById()
// function solve(input) {
//     display.value = eval(display.value);
//     display.innerHTML = ''
// }
// function clear() {
//     display.value = '';
// }
// function back() {
//     display.value = display.value.toString().slice(0, -1);
// }