class ani {
    constructor(color) {
this.color=color;

    }

printcolor(){
    console.log(this.color)
}




}
class cat extends ani{
    
    constructor(color,food){
        super(color);
        this.food=food;

    }

    eating(){
        console.log("eat:"+ this.food);
    }

    display(){
        this.printcolor();
        this.eating();

    }
}


d=new cat("black","box");
d.display();
