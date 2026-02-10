//Q1.
// // const d = new Date();
// document.querySelector('p').innerHTML = d.getHours();
//  var time = d.getHours();
//  var name = "Sayyed Nazeer Hasan";
// if(time>6 && time<12) alert("Good Morning");
// else alert(`Good night ${name}`);


//Q2.
// var isHoliday = true;
// var age = prompt("What is ur age?");
// if((age<6 || age>65) && !isHoliday) alert("You have a discount");
// else alert("No discount");

//Q3
// var guess = prompt("Predict Wheather HEADS OR TAILS");
// var prob  = Math.random();
// var result;
// if(prob >= 0.5) result = "HEADS";
// else result = "TAILS";
// console.log(result + " - "+ guess);
// if(guess == result) document.querySelector("p").innerHTML = "You were RIGHT !!!";
// else  document.querySelector("p").innerHTML = "You were WRONG !!!";

// Q4
// function convertToFahrenheit(celsius) {
//   return (celsius * 9/5) + 32;
// }
// var celsius  = prompt("what the temp?");
// alert(`The tempreture in farenheit is ${convertToFahrenheit(celsius)}`);

// Q5
// function convertLength(length, from, to){
//     if(from == "km" && to == "miles") return length/1.6;
//     else if(from == "miles" && to=="km") return length*1.6;
// }
// alert(convertLength(1,"miles","km"));
//q6
function comparePrice(product1,product2){
    if(product1 == product2) console.log("smae");
    else console.log("Not smae");
}
const product1 = {
    name : "basketball",
    price : 2096
}
const product2 = {
    name : "basketball",
    price : 2096,
}
comparePrice(product1,product2)
let str = "Hello Word";
let newStr =str.toLowerCase().replace(/ /g,'');
newStr = newStr.repeat(3);  
console.log(newStr)

