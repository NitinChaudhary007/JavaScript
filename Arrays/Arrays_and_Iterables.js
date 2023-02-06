// Methods of creating Array
console.log("Methods of creating Array");
// ###########################################################

const num1 = [1, 2, 3];
console.log(num1);

// Array constructor function
const num2 = new Array(1, 2); // creates an array with elements as 1 and 2
console.log(num2);

const num3 = new Array(4); // creates an empty array with size 4
console.log(num3);

// Array.from() - converts an iterable or an array like object to an array
const num4 = Array.from("Hello");
console.log(num4);

const items = document.querySelectorAll("li");
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

hobbies.push("coding"); //
hobbies.unshift("cooking"); // add element from the begining
console.log(hobbies);

hobbies.shift(); // remove element from the begining
hobbies.pop(); // remove element from the last
console.log(hobbies);

console.log("************************************************************");
console.log("splice() Method");
// splice() Method - returns deleted elements in form of array
// Extremly useful for adding and deleting element at any index.

const hobbies2 = [
  "sports",
  "reading",
  "singing",
  "dancing",
  "hopping",
  "digging",
];
console.log(hobbies2);

hobbies2.splice(1); // delete elements sparing fisrt 4 elements
console.log(hobbies2);

hobbies2.splice(0, 2); // delete 2 element at 0 index
console.log(hobbies2);

hobbies2.splice(1, 0, "running", "swimming"); // delete 0 element at 1 index and add "running" and "swimming"
console.log(hobbies2);

console.log("************************************************************");
console.log("slice() Method");
// slice() Method - return a brand new array
// Useful for selecting ranges of array
// Useful in coping the array to some other variable,
// as doing it directly will not help as arrays are reference value.

const marks = [16, 17, 29, 22, 17, 25];
console.log(marks);

const marks1 = marks.slice(); // return a copy of marks array

const marks2 = marks.slice(2); // return a array starting from index 2 till end of array
const marks3 = marks.slice(-3); // return a array starting from index 2 till end of array

const marks4 = marks.slice(1, 4); // return a array starting from index 1 upto index 4 not including index 4 of array
console.log(marks4);

console.log("************************************************************");
console.log("concat() Method");
// concat() Method - return a brand new array

const numbers = [16, 17, 29, 22, 17, 25];
console.log(numbers);

const newarr = numbers.concat([0, 1, 2]); // output [16, 17, 29, 22, 17, 25, [0, 1, 2]]
// concat pull out the element from arraay and then add them to the last
console.log(newarr);

numbers.push([0, 1, 2]); // output [16, 17, 29, 22, 17, 25, [0, 1, 2]]
console.log(numbers);

console.log("************************************************************");
console.log("indexOf(), lastIndexOf() Method");
// indexOf(), lastIndexOf() Method - return a the first index of match.
// Does not work for finding objecs as they are stored as reference value

const numbers1 = [16, 17, 29, 22, 17, 25];
const idx = numbers1.indexOf(17);
console.log(idx);

console.log("************************************************************");
console.log("includes() Method");
// includes() Method return boolean (true or false)

console.log(numbers1.includes(29)); // true

console.log("************************************************************");
console.log("find(), findIndex()");
// find(), findIndex() Method - find() returns the element if found.
// find takes a function as its arguement
// find does create a new array

const personData = [
    { name: "Max", age: 20 },
    { name: "dustin", age: 15 },
];
const mx = personData.find((person, idx, persons) => {
    return person.age === 15;
});
console.log(mx); // {name:"dustin", age: 15}

mx.age = 33;
console.log(mx); // {name:"dustin", age: 33}  -age changed because object are stored as reference value.

const mxidx = personData.findIndex((person, idx, persons) => {
    return person.age === 20;
});
console.log(mxidx); // {name:"dustin", age: 33}  -age changed because object are stored as reference value.

// #####################################################################################################################################
// #####################################################################################################################################
// #####################################################################################################################################
// LOOPS
console.log("L O O P S");

const prices = [25, 30, 35, 40, 45, 50, 100];
const increase = 2;
const newPrices1 = [];

// I want to add 2 to each element
// we can use 'for of' loop
for (const price of prices) {    // same as for(const i of prices)
    newPrices1.push(price + increase);
}
console.log(newPrices1);


console.log("************************************************************");
console.log("forEach() Method");

const newPrices2 = [];

prices.forEach((price, idx, prices) => {
    newPrices2.push(price + increase + 0.77);
});
console.log(newPrices2);


console.log("************************************************************");
console.log("map() Method");
// returns a brand new array

const newPrices3 = prices.map((price, idx, prices) => {
    return price + increase + 0.11;
});
console.log(newPrices3);


console.log("************************************************************");
console.log("filter () Method");
// returns a brand new array

const filteredPrices1 = prices.filter((price, idx, arr) => {
    return price>42;
});

// way to short our arrow function
const filteredPrices2 = prices.filter(price => price>42);

console.log(prices);
console.log(filteredPrices1);
console.log(filteredPrices2);

console.log("************************************************************");
console.log("reduce() Method");
// reduces the array to a single value

const oddIntegers = [1, 3, 5, 7, 9, 11, 15];
// We want to find the sum of array

// 1-> using loop
let sum1 = 0; 
oddIntegers.forEach(integer => {sum1 += integer});
console.log(sum1)

// 2-> using reduce()

const sum2 = oddIntegers.reduce((prevValue, curValue, curIndex, array) => {
    return prevValue + curValue;
}, 0);
console.log("using reduce =", sum2)


console.log("************************************************************");
console.log("split() Method");
// it is a string method
// it split the string into multiple strings and returns an array

const data = "max;min;mike;suzie";
const modData = data.split(";");
console.log(modData);


console.log("join Method");
// return a string
// merges all the element of array to a single stringe value.

const nameFragmants = ["Max", "Schwarz"];
const name = nameFragmants.join(" ");
console.log(name);



console.log("************************************************************");
console.log("(...) spread Method");
// returns all the elements of array alltogether

const copiedName = [...nameFragmants];


const num5 = [32, 35, 65, 76, 87, 23, 1, 16];
console.log(Math.min(1, 3, 5, 6));                  // requires multiple arguement
console.log(Math.min(...num5));                  // requires multiple arguement

console.log("************************************************************");
console.log("Array Destructuring");
// returns all the elements of array alltogether

const nameFrag = ["Ravi", "kant", "Mr", 34];
const [namee, lastnamee, ...otherInfo] = nameFrag;      // here the ...otherInfo is acting as the rest operator -> collecting all remaining values of the array
console.log(namee, lastnamee, otherInfo);




// method that takes function as an arguement
// 1. find()
// 2. findndex()
// 3. forEach()
// 4. map()
// 5. filter()

// #############################################################################################################################################################
// #############################################################################################################################################################
















