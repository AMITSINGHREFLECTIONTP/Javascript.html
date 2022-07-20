function next() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    document.getElementById('firstnameError').innerHTML = '';
    document.getElementById('lastnameError').innerHTML = '';
    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';

    document.getElementById('confirmError').innerHTML = '';

    if (firstname == '') {
        document.getElementById('firstnameError').innerHTML = '**Please enter your first name**';
    }
    else if (lastname == '') {
        document.getElementById('lastnameError').innerHTML = '**Please enter your last name**';
    }
    else if (username == '') {
        document.getElementById('usernameError').innerHTML = '**Please enter your username**';
    }
    else if (password == '') {
        document.getElementById('passwordError').innerHTML = '**Please enter your password**';
    }
    else if (password.length < 8) {
        document.getElementById('passwordError').innerHTML = '*enter minimum eight characters*';
    }
    else if (confirm == '') {
        document.getElementById('confirmError').innerHTML = '**Please confirm your password**';
    }
    else {
        document.getElementById('successfully').innerHTML = '**You have successfully logged in**';
    }


}