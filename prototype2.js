class employee {
    constructor(id, name) {
        this.name = name;
        this.id = id;

    }


}

employee.prototype.sal = 3000;//add new property
employee.prototype.display = function () {
    console.log(this.id, this.name, this.sal);
}


em1=new employee(1,"jo")
em1.display();

em2=new employee(2,"mik");
em2.display();



