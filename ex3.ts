//this is a string
let myName: string = "Alice";

//boolean
let flag: boolean = false;

//int
let age = 21;

//double
let hoursWorked = 25.30;

//an array
let arrayOfNumbers: Array<number> = [2,3,4,5,6,7,8];

//printing values
console.log("My name is " + myName);
console.log("The value of flag is: " + flag);
console.log("I am " + age + " years old");
console.log("This month I worked " + hoursWorked);

//loop to print the array
for(let i=0; i< arrayOfNumbers.length; i++){
    console.log(arrayOfNumbers[i]);
}

//generics
let unKown:any = "fewfwfw";
console.log("the value of unKown is: " + unKown);