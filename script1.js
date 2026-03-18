//Loops in javascript 
//if.... , if...else  .... , if....else if.... , switch case 
//for loop, while loop, do...while loop, for...in loop, for...of loop
//let i;
//for(let i = 0; i < 5; i++){
    //document.write(i + "<br>");
//}
//let i = 0;
//for(; i < 5; i++){
    //document.write(i + "<br>");
//}
//document.write("Loop stopped");
//for(key in object){
 //code block to be executed
//}
//const person = {
  //  fname: "Anita",
    //lname: "Sharma",
    //age: 30,
//};
//for(let x in person){
  // console.log(x + ": " + person[x]);
//}
//coditional statements
//if(condition){
    //code block to be executed if condition is true}
    //else if(condition){
        //code block to be executed if condition is true}
        //else{
            //code block to be executed if condition is false}
//let age = 15;
//if(age > 18){
    //console.log("You are an adult");}
    //else{
        //console.log("You are a minor");
    //}
    //let grade = 0;
//switch(grade)
//{
  //  case 90:
    //    console.log("A");
      //  break;
    //case 80:
      //  console.log("B");
       // break;
    //case 70:
      //  console.log("C");
        //break;
    //case 60:
      //  console.log("D");
        //break;
    //default:
     
    //console.log("F");
//}
//function
function  myFunction(){
  alert("Hello World");
}
function sayHello(name,age){
    document.write(name + "is " + age + " years old.");
}
//Arrow function is an announonymous function which can be assigned to a variable

//Normal Function 
function add(a,b){
    console.log(a + b);
}
add(5,10);
//Arrow function
const add1 = (a,b) => {
    console.log(a + b);
}
add1(5,10);

let person ={
    name: "Anita",
    age: 30,
    isMarried: false,
    hobbies: ["reading", "traveling", "cooking"],
    address: {
        street: "123 lane streert",
        city: "Gurgaon",
        state: "Haryana",
        country: "India"
}
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);
console.log(person.hobbies);
console.log(person.address);
/*let person =*/
let person2 = New Object();
//the iffernce between object and array is that an object is a collection of key value pairs and an array is a collection of values
/*array is the ordered collection of data
object is the collection of key value pairs
array moves []
object moves {}*/
console.log(person2);
person2.name = "Anita";
person2.age = 30;
person2.isMarried = false;
person2.hobbies = ["reading", "traveling", "cooking"];
person2.address = {
    street: "123 lane streert",
    city: "Gurgaon",
    state: "Haryana",
    country: "India"
};
console.log(person2);

