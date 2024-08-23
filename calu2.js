const display = document.getElementById('displayScreen');
const btnSawasawa = document.getElementById('sawasawa');

const kitufe = document.querySelectorAll('.kitufe');
console.log(kitufe);

const operate = document.querySelectorAll('.operator');
console.log(operate);
operate.forEach(function (operate){
    console.log(operate);
    console.log(operate.attributes.value.value);
    operate.addEventListener('click', function() {
        const opvalue = operate.attributes.value.value;
        if (opvalue==='+' || opvalue==='-'|| opvalue==='*' || opvalue==='/') {
           display.value += opvalue;
           /* let saveNum = '';
            let current ='';
            let op = '';

            function number(kitufeValue) {
                current +=kitufeValue;
            }
            function symbols(opvalue) {
                if (current==='') {
                    return;
                }else {
                    current=saveNum;
                    opvalue = op;
                    current = '';
                    updateDisplay(op);
                }
            }*/
        }else if(opvalue==='AC') {
            display.value= '';
        }else if(opvalue==='C') {
            display.value=display.value.toString().slice(0, -1);
        } else if(opvalue==='.') {
            display.value+= opvalue;
        } else{
            try {

                display.value= eval(display.value);
            }
            catch(Error) {
                display.value= 'Syntax Error';
            }
        }
    });
});

kitufe.forEach(function (kitufe) {
    console.log(kitufe);
    console.log(kitufe.attributes.value.value);
    kitufe.addEventListener('click', function () {
        const kitufeValue = kitufe.attributes.value.value;
        if (kitufeValue === 'C' || kitufeValue === 'AC') {
            display.value = '';
        } else if (kitufeValue === '=') {
            display.value = eval(display.value);
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