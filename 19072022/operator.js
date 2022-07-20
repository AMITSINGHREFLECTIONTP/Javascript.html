function greater() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var result = (num1 > num2) ? num1 + 'is greater than ' + num2 : num2 + 'is greater than' + num1;



    document.getElementById('result').innerHTML = result;
}
function less() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var result = (num1 < num2) ? num1 + 'is less than ' + num2 : num2 + 'is less than' + num1;

    document.getElementById('result').innerHTML = result;

}

function equalsto() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var result = (num1 == num2) ? 'both are equal' : 'both are unequal';

    document.getElementById('result').innerHTML = result;

}

function notequalsto() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var result = (num1 != num2) ? 'both are different' : 'both are equal';

    document.getElementById('result').innerHTML = result;

}


