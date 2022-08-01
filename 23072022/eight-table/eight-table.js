var a = 1;
var amit = '';


while (a <= 10) {
    amit += a*8 + '<br>';
    a++;
}

document.getElementById('amit').innerHTML = amit;


var b = 1;
var aman = "";
do {
    aman += + b*8 + '<br>';
    b++;

}
while (b <= 10);

document.getElementById('aman').innerHTML = aman;

var ashok = '';

for (var c = 1; c <= 10; c++) {
    ashok += c*8 + '<br>' ;
}
document.getElementById('ashok').innerHTML = ashok;
