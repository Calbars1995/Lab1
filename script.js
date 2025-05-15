//Declare and use Variables
let studentName = "Chris"; //string
let studentAge = 29; //numeric
let isEnrolled = true; //boolean

//Displaying variables to the log
console.log(`Student Name: ${studentName}`); //displays studentName
console.log(`Student Age: ${studentAge}`); //displays studentAge
console.log(`Is Enrolled: ${isEnrolled}`); //displays if isEnrolled is true or false

console.log(`End of Declaring Variables, now for Data Types`); //Stating the end of the section, for easier reading

//Demonstrate Data Types
let thisIsAString = 'I am a string'; //string
let thisIsAnIntNumber = 5; //number (int)
let thisIsAFloatNumber = 5.5; //number (float)
let thisIsABoolean = false; //boolean
let arrayOfNumbers = [1, 2, 3, 4]; //array
let objectPerson = {firstName: "Chris", lastName: "Schleicher", age: "29"}; //object

//Displaying the Data Types to the log
console.log(`String: ${thisIsAString}`); //displays the string
console.log(`Int Number: ${thisIsAnIntNumber}`); //displays the int number
console.log(`Float Number: ${thisIsAFloatNumber}`); //displays the float number
console.log(`Boolean: ${thisIsABoolean}`); //displays the boolean
console.log(`Array: ${arrayOfNumbers}`); //displays the whole array
console.log(`Array Index 1: ${arrayOfNumbers[1]}`); //displays the item in spot 1(in code language), so the second spot(in english), which is a 2
console.log(`Object First Name: ${objectPerson.firstName}`); //displays the firstName
console.log(`Object Age: ${objectPerson.age}`); //displays the age

console.log("End of Data Types Section, Now for Bonus/Extra Work"); //End of Section log

//Bonus for displaying a little more knowledge: pushing and popping in an array
arrayOfNumbers.push(5); //pushes "5" into the array at the end
arrayOfNumbers[2] = 8; //changes the 2nd(code) spot in the array(previously "3") into a 8
let arrayLastSpot = arrayOfNumbers.length - 1; //sets arrayLastSpot to last spot so can use later.

/*last line used arrayOfNumbers.length - 1 because .length gives the number of things in the array, so 5, but the index of the last
is 4, so I need to do the -1 */

console.log("Added 5 to the array");
console.log(`Bonus New Last Spot Array: ${arrayOfNumbers[arrayLastSpot]}`); //displays the last number in the array
console.log(`Bonus New At Index 2: ${arrayOfNumbers[2]}`); //displays the 2nd(code), which is now a 8 because it was updated
arrayOfNumbers.pop(); //deletes the last item in the array, so deletes spot 4(code) which was a 5
arrayLastSpot = arrayOfNumbers.length - 1; //updates the variable holding the index integer of the last spot
console.log("Deleted the last item in the array");
console.log(`Bonus Last Spot After Pop: ${arrayOfNumbers[arrayLastSpot]}`); //shows the last entry in the array again, showing that the 5 was deleted
//End of Bonus

console.log("End Of Bonus, Now for Operations"); //End of section

//Operations Section
let firstNumber = 5; //declaring first number for operations
let secondNumber = 3; //declaring second number for operations

//Execute Arithmetic Operations
let answer1 = firstNumber + secondNumber; //addition =8
let answer2 = firstNumber - secondNumber; //subtraction =2
let answer3 = firstNumber * secondNumber; //multiplication =15
let answer4 = firstNumber / secondNumber; //division =1.6666666...and on
let answer5 = firstNumber % secondNumber; //remainder =2

//Display Arithmetic Operations
console.log(`${firstNumber} + ${secondNumber} = ${answer1}`); //addition answer
console.log(`${firstNumber} - ${secondNumber} = ${answer2}`); //subtraction answer
console.log(`${firstNumber} * ${secondNumber} = ${answer3}`); //multiplication answer
console.log(`${firstNumber} / ${secondNumber} = ${answer4}`); //division answer
console.log(`${firstNumber} % ${secondNumber} = ${answer5}`); //remainder answer

console.log("End of Arthmetic Operations, now for Comparison");

//Comparison
let lowNumber = 2; //low number
let highNumber = 7; //high number
let sameNumber1 = 5; //middle number
let sameNumber2 = 5; //middle number again

//Display Comparisons
console.log(`7 is higher than 2: ${highNumber > lowNumber}`); //high is higher than low
console.log(`2 is lower than 7: ${lowNumber < highNumber}`); //low is lower than high
console.log(`5 is equal to 5: ${sameNumber1 == sameNumber2}`); //middle is equal to middle
console.log(`5 is not equal to 7: ${sameNumber1 !== highNumber}`); //middle is not equal to high

console.log("Now for the logic of and, or, not");

//Logic
let number1 = 1;
let number2 = 2;
let trueBool = true;

console.log(`1 = 1 AND 2 = 2: ${number1 == 1 && number2 == 2}`); //AND logic, answer is true
console.log(`1 = 3 OR 2 = 3: ${number1 == 3 || number2 == 3}`); //OR logic, answer is false
console.log(`The bool is Not True: ${!trueBool}`); //NOT Logic, answer is false

//Done!
console.log("All Done!")