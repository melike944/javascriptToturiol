let employee={
name:"key",
job:"engineer",
sal:5000,
empid:1022,
bonus:function(){
   return (this.sal*10)/100;
}

}
console.log(employee.bonus())