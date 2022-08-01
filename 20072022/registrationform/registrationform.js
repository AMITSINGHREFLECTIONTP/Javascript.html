/*function register(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var dateofbirth = document.getElementById('dateofbirth').value;
    var contactno = document.getElementById('contactno').value;
    var country = document.getElementById('country').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    document.getElementById('firstnameError').innerHTML = '';
    document.getElementById('lastnameError').innerHTML = '';
    document.getElementById('dateofbirthError').innerHTML = '';
    document.getElementById('contactnoError').innerHTML = '';
    document.getElementById('countryError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('confirmError').innerHTML = '';

    if(firstname == ''){
        document.getElementById('firstnameError').innerHTML = 'please enter your first name';
    }
    else if(lastname == ''){
        document.getElementById('lastnameError').innerHTML = 'please enter your last name';
    }
    else if(dateofbirth == ''){
        document.getElementById('dateofbirthError').innerHTML = 'please enter your Date Of Birth';
    }
    else if(contactno == ''){
        document.getElementById('contactnoError').innerHTML = 'please enter your contact no';
    }
    else if(country == ''){
        document.getElementById('countryError').innerHTML = 'please enter your country name';
    }
    else if(email == ''){
        document.getElementById('emailError').innerHTML = 'please enter your email';
    }
    else if(password == ''){
        document.getElementById('passwordError').innerHTML = 'please enter your password';
    }
    else if(confirm == ''){
        document.getElementById('confirmError').innerHTML = 'please confirm your password';
    }*/

    function register(){

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
   
    
    localStorage.setItem('firstname',firstname);
    localStorage.setItem('lastname',lastname);

    location.href='storage.html';



    
}