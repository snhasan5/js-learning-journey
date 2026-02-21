//singleton -> not literal made via constructor

//object literals
mySym = Symbol("Key2");
const JsUser = {
    name : "Hasan",
    "age" : 18,
    [mySym] : mySym, //if no square braces then string
    location : "AP",
    isLoggedIn : false,
    lastLoginUser: ["Monday","Saturday"],
    greeting: function greeting(args){
        console.log(`hello ${this.name}`);
        }
}
//accessing objects
console.log(JsUser.name);
console.log(JsUser['age']);
console.log(typeof JsUser[mySym]);

JsUser.email = 'nazeer@vitapstudent.ac.in'; //new property added
// Object.freeze(JsUser); to freeze the values of the object
JsUser.email = 'nazeer@vitapsnt.ac.in'; // updates the value

//functions inside objects
JsUser.greeting('hasan');
JsUser.cutting = function(){
    console.log("Splice");
}
console.log(JsUser);


