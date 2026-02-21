// const tinderUser = new Object(); //singleton objects

// tinderUser.id = "12"
// tinderUser.name = "Hymen";

// const regularUser = {
//     email: "some@gmail.com",
//     fullname : {
//         userFullname :{
//             fname : "Sayyed",
//             lname : "Nazeer"
//         }
//     }
// }
// // console.log(tinderUser);

// //Combine

// // const obj3 = Object.assign({},tinderUser,regularUser);
// // better and easier
// const obj3 = {...tinderUser,...regularUser};
// console.log(obj3);

// console.log(Object.keys(obj3)); //returns an array
// console.log(Object.values(obj3)); //returns an array
// console.log(Object.entries(obj3));
// console.log(obj3.hasOwnProperty('fullname')); //returns an array



//Object Destructuring
const  course = {
    coursename : " js ",
    price : 200,
    courseInstructor : 'hasaan'
}

const {courseInstructor: instructor} = course;
console.log(instructor);

//A json file
// {
//     name : "hulk",
//     age : 20,
// }