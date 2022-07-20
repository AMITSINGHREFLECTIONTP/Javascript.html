
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('successfully').innerHTML = '';
    if(username == ''){
        document.getElementById('usernameError').innerHTML = 'please enter your username';
    }
else if(password == ''){
    document.getElementById('passwordError').innerHTML = 'please enter your password';
}

else{
    document.getElementById('successfully').innerHTML = 'You have successfully logged in';
}
    
        
    }



    

