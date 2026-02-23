// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async task completed");
//     resolve();
//   }, 2000);
//   // resolve();
// });
// //consumption of the promise
// promiseOne.then(function () {
//   console.log("Async task consumed");
// });
// // gets consumed first due  to macro-queue
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2 completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async task 2 consomed");
// });

// // how to pass values
// new Promise(function (resolve, respond) {
//   setTimeout(() => {
//     resolve({ name: "Hasan", power: "fire" });
//   }, 1000);
// }).then(function (hero) {
//   console.log(`Our hero's name is ${hero.name} and his power is ${hero.power}`);
// });

// // using reject
// new Promise((resolve, reject) => {
//   let error = true;
//   if (!error)
//     setTimeout(() => {
//       resolve({ name: "Hasan", power: "fire" });
//     }, 1000);
//   else {
//     reject("Something went wrong");
//   }
// })
//   .then((user) => {
//     return user.name; // returns the value to child then
//   })
//   .then((name) => {
//     console.log(name); // takes input from the parent then
//   })
//   //this can go infinitly long
//   .catch((e) => {
//     console.log(e); //called via the reject
//   })
//   .finally(() => {
//     console.log("promise life ended (either resolved or rejected)"); //runs anyways
//   });

//   //async await
// const promiseFive = new Promise((resolve, reject) => {
//   let error = true;
//   if (!error)
//     setTimeout(() => {
//       resolve({ name: "JS", subject : "Programming" });
//     }, 1000);
//   else {
//     reject("Something went wrong");
//   }
// });

// async function consumeFifthPromise(){
//     try{
//     const response = await promiseFive;
//     console.log(response);
//     }
//     catch(e){
//         console.log(e);
        
//     }
// }
// consumeFifthPromise();



async function readFile(){
    try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log('E : ',error);
        
    }
}
readFile();