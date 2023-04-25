const func1 = () => {
    console.log('finc1 tamamlandi')
    func3();


}
const func2 = () => {
    console.log('finc2 tamamlandi')

}
const func3 = () => {
    //     console.log('finc3 tamamlandi')

}
// // func1();
// // func2();
// // func3();

// let x=5;
// console.log(x);

// function writeName(name, callback) {
//      // writeName fonksiyonu argüman olrak bir callback fonksiyonu alıyor
//     callback(name); 
//   }
//   setTimeout(()=>{
//     let x=5;
// console.log(x);

//},2000);


const books = [
    { name: 'kitap1', auther: 'ali' },
    { name: 'kitap2', auther: 'ali' },
    { name: 'kitap3', auther: 'ali' },
]

const addbook = (newbook, callback) => {
    books.push(newbook);
    callback()
}
const listbook = () => {

console.log(books)
}

addbook({ name: 'kitap4', auther: 'ali' }, listbook);
// console.log(books);
