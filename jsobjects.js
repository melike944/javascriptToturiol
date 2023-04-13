let person={
    firstname:"jone",
    lastname:"hey",
    weihgt:50,
    age:60

}
console.log(person.age)
//add new property 
person.age=5.5;
console.log(person.age);
//delete property
delete person["age"];
console.log(person.age);
//looping
for(let x in person){
   // console.log(x);print only property name
  // console.log(person[x]);//print value
   console.log(x+" "+person[x]);
}