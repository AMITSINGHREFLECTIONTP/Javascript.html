let username = [
    {
        "id": 1,
        "name": "Guru",
        "username": "guru123",
        "email": "guru@gmail.com",
        "address": "Nagpur",
        "salary":"508000",

    },
    {
        "id": 2,
        "name": "Arjun",
        "username": "arjun8576",
        "email": "arjun@gmail.com",
        "address": "Nashik",
        "salary":"505000",

    },

    {
        "id": 3,
        "name": "Amar",
        "username": "amar8579",
        "email": "amar@gmail.com",
        "address": "Mumbai",
        "salary":"540000",

    },

    {
        "id": 4,
        "name": "Ravi",
        "username": "ravi5784",
        "email": "ravi@gmail.com",
        "address": "Chennai",
        "salary":"150000",

    },
    {
        "id": 5,
        "name": "Amit",
        "username": "amit2728",
        "email": "amit@gmail.com",
        "address": "Saoner",
        "salary":"15000",

    },

    {
        "id": 6,
        "name": "varun",
        "username": "varun7548",
        "email": "varun@gmail.com",
        "address": "Hyderabad",
        "salary":"650000",

    },
    {
        "id": 7,
        "name": "Nitesh",
        "username": "nitesh6547",
        "email": "nitesh@gmail.com",
        "address": "Koradi",
        "salary":"540000",

    },

    {
        "id": 8,
        "name": "Rakesh",
        "username": "rakesh12547",
        "email": "rakesh@gmail.com",
        "address": "Karnataka",
        "salary":"505000",

    },

    
    {
        "id": 9,
        "name": "Mayur",
        "username": "mayur4583",
        "email": "mayur@gmail.com",
        "address": "Mahadula",
        "salary":"500500",

    },
    
    {
        "id": 10,
        "name": "Jay",
        "username": "jay6523",
        "email": "jay@gmail.com",
        "address": "Khapa",
        "salary":"51000",

    },
];
let user = "";

username.map((value) => {

    user += '<tr><td>' + value.id + '</td><td>' + value.name + '</td><td>' + value.username + '</td><td>' + value.email + '</td><td>' + value.address + '</td><td>' + value.salary + '</td></tr>'
})

document.getElementById('userdetails').innerHTML = user;

const finduser = () => {
    let filterone = document.getElementById('filterone').value;

    let user = '';

    username.map((value) => {
        if (value.name == filterone)  {

            user += '<tr><td>' + value.id + '</td><td>' + value.name + '</td><td>' + value.username + '</td><td>' + value.email + '</td><td>' + value.address + '</td><td>' + value.salary + '</td></tr>'
        }
        if (value.address == filterone) {

            user += '<tr><td>' + value.id + '</td><td>' + value.name + '</td><td>' + value.username + '</td><td>' + value.email + '</td><td>' + value.address + '</td><td>' + value.salary + '</td></tr>'

        }
        if (value.id == filterone) {

            user += '<tr><td>' + value.id + '</td><td>' + value.name + '</td><td>' + value.username + '</td><td>' + value.email + '</td><td>' + value.address + '</td><td>' + value.salary + '</td></tr>'
        }
        if (value.salary >= filterone ) {

            user += '<tr><td>' + value.id + '</td><td>' + value.name + '</td><td>' + value.username + '</td><td>' + value.email + '</td><td>' + value.address + '</td><td>' + value.salary + '</td></tr>'
        }
    })

    document.getElementById('userdetails').innerHTML =user;
}