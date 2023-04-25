const promise1 = new Promise((resolve, reject) => {
    resolve('veriler alindi')
    reject('connnet error')
});

promise1.then(value => {
    console.log(value)
}

).catch(error => {
    console.log(error)
})
// promise1.


function getData(data) {
    return new Promise((resolve, reject) => { // promise dönüyoruz.
      console.log("Veriler alınmaya çalışılıyor..");
  
      if (data) {
        resolve("Verilen alındı"); 
      } else {
        reject("Veriler alınamadı");
      }
    });
  }
