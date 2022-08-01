
var a = 1;
var even = '';
var odd = '';

while (a <= 10) { if(a %2 == 0){even += a } else{odd += a};
    a++;
}

document.getElementById('amit').innerHTML = even;
document.getElementById('aman').innerHTML = odd;


var b = 1;
var even = '';
var odd= '';
do { if(b %2 == 0){even += b } else{odd += b}    
    b++;

}
while (b <= 20);

document.getElementById('ashok').innerHTML = even;
document.getElementById('mayur').innerHTML = odd;


var ashoka = '';

for (var c = 1; c <= 30; c++) {if(c %2 == 0){even += c } else{odd += c}
    ashoka += c + '<br>';
}
document.getElementById('ashoka').innerHTML = even;
document.getElementById('ambika').innerHTML = odd;
