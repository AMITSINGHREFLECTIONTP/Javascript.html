

/*localStorage.setItem('username','amit');
localStorage.setItem('username1','jai');
localStorage.setItem('username2','guru');
localStorage.setItem('username3','kritesh');
localStorage.setItem('username4','mayur');
localStorage.setItem('username5','nitesh');


//var tom = localStorage.getItem('username1');
//console.log(tom)*/

function jump(){
    var carrom = document.getElementById('storage').value;
    var g = document.getElementById('storageone').value;
    localStorage.setItem('storage',carrom);
    localStorage.setItem('storageone',g);

    location.href='storage.html';

    
    

}



