
// Methods of creating Array
console.log("Methods of creating Array");
// ###########################################################

const num1 = [1, 2, 3];
console.log(num1);

// Array constructor function
const num2 = new Array(1, 2);    // creates an array with elements as 1 and 2 
console.log(num2);

const num3 = new Array(4);      // creates an empty array with size 4
console.log(num3);

// Array.from() - converts an iterable or an array like object to an array
const num4 = Array.from("Hello");
console.log(num4);

const items = document.querySelectorAll('li');
console.log(items);

itemsArr = Array.from(items);
console.log(itemsArr);


// SUMMARY - we only use almost all of the time
const Arr1 = [1, 2, 3];
const Arr2 = Array.from("Hello");

console.log("************************************************************");



// Adding and Removing Elements
console.log("Adding and Removing Elements");
// ############################################################


// push()    - return the size of new array
// unshift() - return the size of new array
// pop()     - return the deleted element
// shift()   - return the size of new array

const hobbies = ["sports", "reading"];
console.log(hobbies);

hobbies.push("coding");        // 
hobbies.unshift("cooking");    // add element from the begining
console.log(hobbies);

hobbies.shift();               // remove element from the begining
hobbies.pop();               // remove element from the last
console.log(hobbies);


console.log("************************************************************");



// splice() Method - returns deleted elements in form of array
console.log("splice() Method");
// ############################################################
// 

const hobbies2 = ["sports", "reading", "singing", "dancing", "hopping", "digging" ];
console.log(hobbies2);

hobbies2.splice(1);   // delete elements sparing fisrt 4 elements
console.log(hobbies2);

hobbies2.splice(0, 2);   // delete 2 element at 0 index
console.log(hobbies2);

hobbies2.splice(1, 0, "running" ,"swimming");   // delete 0 element at 1 index and add "running" and "swimming"
console.log(hobbies2);

console.log("************************************************************");


// slice() Method - return a brand new array
console.log("slice() Method");
// ############################################################
// Selecting ranges of array
// useful in coping the array to some other variable,  
// as doing it directly will not help as arrays are reference value.

const marks = [16, 17, 29, 22, 17, 25];
console.log(marks);

const marks1 = marks.slice();       // return a copy of marks array

const marks2 = marks.slice(2);      // return a array starting from index 2 till end of array 
const marks3 = marks.slice(-3);     // return a array starting from index 2 till end of array

const marks4 = marks.slice(1, 4);     // return a array starting from index 1 upto index 4 not including index 4 of array
console.log(marks4);

console.log("************************************************************");


// concat() Method - return a brand new array
console.log("concat() Method");
// ############################################################

const numbers = [16, 17, 29, 22, 17, 25];
console.log(numbers);

const newarr = numbers.concat([0, 1, 2]);  // output [16, 17, 29, 22, 17, 25, [0, 1, 2]]
// concat pull out the element from arraay and then add them to the last
console.log(newarr);

numbers.push([0, 1, 2]);  // output [16, 17, 29, 22, 17, 25, [0, 1, 2]]
console.log(numbers);




console.log("");