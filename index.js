// This is a comment

/* This is a block comment 

Anything withing the open and close is a comment

*/

// this is a string
var myName = "Jon";

// this is a integer
var myAge = 12;

// boolean type
var booleanExample = true;

// unassaigned variable
undefined

// not a number
NaN

//array
var myArray = ['one', 2, 'seven', 'batman', true]

//objects

var camelCase = "yay"

// fucntion is an execute statement
function(){

}

fuction nameOfFunction (){
	console.log('Hello I am a new function')
}

// conditional statements
// checks for equality for two experssions and comparing is ==
// assigning is =

// booleans
// !== is not equal

// logical operation
// and is &&
// or is ||


// invoking the function
nameOfFunction();

//parameter
funtion hello (a,b){
	console.log(a + b);
}

hello(10, 16);

function createGreeting (name, age){
	if (age < 36){
		console.log('hello ' + name);
	} else{
		console.log('hello mr. ' + name);
		return 'hello mr. ' + name;
		return 'hello mrs. ' + name; //This won't work
	}
}

// example
var degreeOutside = 70;
var numberOfClouds = 50;

function isItRaining(degreeOutside,numberOfClouds){
	if (degreeOutside > 70 && numberOfClouds > 50){
		return console.log('it"s raining outside!');
	}
}

isItRaining (50, 20)