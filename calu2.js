const display = document.getElementById('displayScreen');
const btnSawasawa = document.getElementById('sawasawa');

const kitufe = document.querySelectorAll('.kitufe');
let nambaYamwanzo = 0;
let tendo = '';
let hesabu = '';
console.log(kitufe);

kitufe.forEach(function (kitufe) {
    console.log(kitufe);
    console.log(kitufe.attributes.value.value);
    kitufe.addEventListener('click', function () {
        const kitufeValue = kitufe.attributes.value.value;
        if (kitufeValue === 'C' || kitufeValue === 'AC') {
            display.value = '';
        } else if (kitufeValue === '=') {
            hesabu = `${nambaYamwanzo}${tendo}${display.value}`

            display.value = eval(hesabu);
        }
        else if(kitufeValue == "*" || kitufeValue == "+" || kitufeValue == "-" || kitufeValue == "/"){
            nambaYamwanzo = display.value;
            display.value = ""
            tendo = kitufeValue;
        }
        else {
            display.value += kitufeValue;
        }
    });
});
