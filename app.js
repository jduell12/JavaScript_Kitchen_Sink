let name = 'Jessica';
const numUSAstates = 50;
let sum = (4+5); 

// If first letter of name starts with L an alert will tell the user back of the line otherwise it'll alert the user with next
if (name.charCodeAt(0) === 'L'){
    alert("Back of the line!");
} else {
    alert("Next!");
};

//Function that displays an alert "Hello word!"
function sayHello(){
    alert("Hello World");
};
sayHello();

//Function that takes two arguments a name and an age and checks to see if the age is 21 or over
function checkAge(name, age){
    if(age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } 
};
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

//Array of favorite vegetables
let favVeggies = ["cucumbers", "green beans", "peas"];

//Loop to display all the favorite vegetables
for (let i = 0; i < favVeggies.length; i++){
    console.log(favVeggies[i]);
};

//Creating an array of 5 objects that contain a name and age property
let objArray = [{name: "Jess", age:28}, {name: "Jeremy", age: 29}, {name: "Lexi", age:5}, {name:"Abby", age:17}];

//Loop that calls checkAge function on each person in array
for (let i = 0; i < objArray.length; i++){
    let name = objArray[i].name;
    let age = objArray[i].age;
    checkAge(name, age);
    
};

//Function that takes any word as an argument and returns the number of characters in the string
let word = prompt("Enter a word: ");
function getLength(word){
    let length = word.length;
    return length;
};
if (length%2 == 0){
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
};