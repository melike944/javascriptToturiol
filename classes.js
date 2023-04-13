class student {

    constructor(side,name,grade){
        this.side=side
         this.name=name
         this.grade=grade

    }
    // setDetails(side,name,grade) {
    //     // this.side = 102;
    //     // this.name = "melike"
    //     // this.grade = "A"
    //     this.side=side
    //     this.name=name
    //     this.grade=grade
    // }

    display() {
        console.log(this.side,this.grade,this.name)

    }


}


let st=new student(12,"melike","A");;
//st.setDetails(12,"melike","A"); after constructor no need to this line 
st.display();
