let fruit=["banan","armut","gilas","alma"];
console.log(fruit.push("kivi"));
console.log(fruit)
console.log(fruit.pop());
console.log(fruit.unshift("lemon"));
delete fruit[0];
console.log(fruit);

//join more array---concat()
let arr1=[10,20];
let arr2=["a","b"];
let arr3=[10,"c"];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,arr3));

//slice

console.log(fruit.slice(2));
console.log(fruit.sort());
console.log(fruit.reverse());

