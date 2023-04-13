class student{
    constructor(){

        let name ,marks;


    }
    getName(){
        return this.name;
    }
    setName(name){

        this.name=name;
    }
       
}


let st=new student()
st.setName("melike");
console.log(st.getName()) ;