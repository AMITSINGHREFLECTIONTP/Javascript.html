
var formal = '';
for (var i = 1; i <= 10; i++) { 
 for (var j = 1; j <= 10; j++){formal += '*';}
 formal+='<br>';
    

}
document.getElementById('formal').innerHTML = formal;




var formal = '';
for (var i = 1; i <= 5; i++) { 
 for (var j = 1; j <= i; j++){formal += '*';}
 formal+='<br>';
    

}
document.getElementById('doc').innerHTML = formal;





var formal = '';
for (var i = 1; i <= 5; i++) { 
 for (var j = 5; j >= i; j--){formal += '*';}
 formal+='<br>';
    

}
document.getElementById('rat').innerHTML = formal;




