
function greater() {
    var num1 = parseInt(document.getElementById('firstnum').value);
    var num2 = parseInt(document.getElementById('secondnum').value);

    var result ;
    if (num1 > num2){
        result = num1 + "greater than" + num2;
    }
    else {}


    document.getElementById('result').innerHTML = result;
}
