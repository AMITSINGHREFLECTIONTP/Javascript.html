class computer {
    constructor(){
        this.add = 'lokmanya'
        this.salary = '50000'
        this.name = 'Arun'
        this.lastname = 'pal'
        alert(1250);
    }
   
}
var a ="";
class amit extends computer {
    constructor(){
        super();
        document.getElementById('ola').value = a;
       // alert(this.add);//
    }
    
}
class Guru extends amit {
    constructor(){
        super();
        alert(this.salary);
    }
    
}
class Jai extends Guru {
    constructor(){
        super();
        alert(this.name);
    }
    
}
class nitesh extends Jai {
    constructor(){
        super();
        alert(this.lastname);
    }
    
}

var ritik = new nitesh();
document.getElementById('ola').value = ritik;
