sessionStorage.setItem('cars','mustang');



function submit(){


    var chess = document.getElementById('session').value;
    sessionStorage.setItem('session',chess).value;
    location.href='session.html';
}


