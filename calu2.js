const display = document.getElementById('displayScreen');
const btnSawasawa = document.getElementById('sawasawa');

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
            display.value = eval(display.value);
        }
        else {
            display.value += kitufeValue;
        }
    });
});
