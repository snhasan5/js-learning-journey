let myArr = [0,2,4,3,5,4];
myArr.push(8); // adds in the last index
myArr.pop(); // removes the last index
myArr.unshift(9); // adds elements in the first index
myArr.shift(); // removes the first index
console.log(myArr.includes(9)); //boolean
console.log(myArr.indexOf(2)); //return the index

console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log("B",myn1);

const myn2 = myArr.splice(1,3);
console.log("C",myn2);
console.log("D",myArr);

myArr = myArr.concat(myn2);
console.log(myArr);

// .flat -> flatlines the array
//.from("str") --> converts into char array
//.isArray --> boolean to check if array

let score1 = 100;
let score2 = 300;
console.log(Array.of(score1,score2));
