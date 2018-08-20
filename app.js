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