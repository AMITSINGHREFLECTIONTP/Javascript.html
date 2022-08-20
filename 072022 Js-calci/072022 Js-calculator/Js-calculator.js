var result = '';
class calculator {
    constructor() {

    }
    firstnum() {
        return parseInt(document.getElementById('number1').value);
    }
    secondnum() {
        return parseInt(document.getElementById('number2').value);
    }

    many(num1, num2, calculate) {

        if (calculate == '+') {
            result = (num1 + num2);
        }
        else if (calculate == '-') {
            result = (num1 - num2);
        }

        else if (calculate == '*') {
            result = (num1 * num2);
        }
        else if (calculate == '/') {
            result = (num1 / num2);
        }
        document.getElementById('result').innerHTML = result;

    }
}
class mat extends calculator {
    constructor() {
        super();
    }
    addition() {
        var int1 = this.firstnum();
        var int2 = this.secondnum();
        this.many(int1, int2, '+');
    }
}
class ssub extends mat {
    constructor() {
        super();
    }
    substraction() {
        var int1 = this.firstnum();
        var int2 = this.secondnum();
        this.many(int1, int2, '-');
    }
}
class mult extends ssub {
    constructor() {
        super();
    }
    multiplication() {
        var int1 = this.firstnum();
        var int2 = this.secondnum();
        this.many(int1, int2, '*');
    }
}
class divi extends mult {
    constructor() {
        super();
    }
    division() {
        var int1 = this.firstnum();
        var int2 = this.secondnum();
        this.many(int1, int2, '/');
    }
}

let calculate = new divi();

