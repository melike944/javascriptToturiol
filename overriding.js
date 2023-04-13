class Bank{
    ro(){
        return 0;
    }
}

class XX extends Bank{
    ro(){
        return 12;
    }

}

class yy extends Bank{
    ro(){
        return 12.5;
    }

}

b=new XX();
console.log(b.ro());