

var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("result");

document.getElementById("add").addEventListener("click", function (add) { res.value = parseInt(n1.value) + parseInt(n2.value); });

document.getElementById("sub").addEventListener("click", function (sub) { res.value = parseInt(n1.value) - parseInt(n2.value); });

document.getElementById("mul").addEventListener("click", function (mul) { res.value = parseInt(n1.value) * parseInt(n2.value); });

document.getElementById("div").addEventListener("click", function (div) { res.value = parseInt(n1.value) / parseInt(n2.value); });
