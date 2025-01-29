//                       data types
//                          |
//                        /   \
//                 primitive     non-primitive or reference{ memory me iska reference direct allowcate kiya jata hai}
// 7 types: String                    array,objects,functions
//   Boolean,null,number
// undefined,symbol,BigInt
// const score=100





const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsidetemp=null
let userEmail;
const id =Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId);//false
const bigNumber=1123456789999999n
const heros=["a","b","c"]//array
//OBJECT//
let m={
    name:"roshani",
    age:20,

}
//function//
//     ||
//function(){}
function myFunction(params) {
    console.log("hello");


}
//stack memory(primitive),heap memory(non primitive)
let myYoutubename="roshanichaudharydotcom"
let anothername=myYoutubename
anothername="chaudharyroshani"
console.log(myYoutubename);//roshanichaudharydotcom
console.log(anothername);//chaudharyroshani

let userOne={
    email:"rosh@.com"
    upi:"user@bl"
}
let userTwo=userOne
userTwo.email="rosh@8.com"
console.log(userOne.email);//rosh@8.com
console.log(userOne.email);//rosh@8.com










