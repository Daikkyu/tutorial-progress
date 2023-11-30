/**
 * Primitive and non-primitive
 * Same as Java, except that string ARE primitive
 * - nums, str, bool, null, undefined and... symbol?
 * Symbol - A unique value that can be generated by 
 * Symbol constructor
 * 
 * - objects, arrays
 */

let word = 'word';

let array = ['word1', 'word2', 'word3'];

console.log(array);

// result: Array(3) [ "word1", "word2", "word3" ]

array[0] = 'extraword';

console.log(array);

// result: Array(3) [ "extraword", "word2", "word3" ]

let intarray = [1,2,3];

let intarray2 = [1,2,3];

console.log(intarray == intarray2); 

/** 
 * false. Can't compare non-primitive, even if they have
 * the same values
 */

/**
 * Math.class, it's identical to Java. 
 */

console.log(Math.PI); //Constant PI
console.log(Math.round(9.23)); // 9
console.log(Math.floor(Math.PI)); //round up, 3
console.log(Math.ceil(Math.PI)); //round down, 4
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5 

console.log(Math.random()); //between 0 and 0.99
console.log(Math.floor(Math.random() * 11)); // between 0 - 10
console.log(Math.ceil(Math.random() * 11)); // between 1 - 11

console.log(Math.pow(3,2)); // 9

console.log(Math.log(4)); // Logarithm with base E

console.log(Math.LN2); // Constants
console.log(Math.LN10); 

// trigonometry, sin and cos   

console.log(Math.sin(90));
console.log(Math.cos(0));

// To use a looooong string in separate lines, use \ to separate them.

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph);

/**
 * Escape sequences
 * \n next line
 * \t tab
 * \\ backslash
 * \' single quote
 * \" double quote
 */

//Template literals?

let a = 'stringA'
let b = 'stringB'

// Need to use ` to ${}, similar to bash and String.format 
// from Java
console.log(`The value of ${a} and ${b}`);

let num1 = 2;
let num2 = 3;

// That's interesting
console.log(`${num1} is greater than ${num2}: ${a > b}`);

let str = 'string';

console.log(str.length); // Same as Java

let str1letter = str[0];

console.log(str1letter); // s

console.log(str.toUpperCase());

// Lazy to write, same as Java
console.log(str.toUpperCase().toLowerCase());

// substr() is deprecated, I think

// 2 args: 1st gets the letter at pos x but 2nd doesnt,
// it gets the one behind, so (0, 3) != stri
console.log(str.substring(0,3)); // str 
// 1 arg: shows the letter at pos x and the rest of the string
console.log(str.substring(2)); // ring

let string1 = "Replace text"

console.log(string1.replace("Replace","Day 2")); // Day 2 text

let char = string1.charAt(0); // Same as string1[0]
console.log(char);
console.log(typeof char == typeof string1); // So here chars are the same as strings

console.log(string1.indexOf("p")); // 2
console.log(string1.indexOf("r")); // -1, not found

console.log(string1.indexOf("t")); // 8
console.log(string1.lastIndexOf("t")); // 11

console.log(string1.concat("For", "Day 2", "of JavaScript")); //Replace textForDay 2of JavaScript

console.log(string1.startsWith("R")); // t
console.log(string1.startsWith("r")); // f

// search with a substring, that's interesting

console.log(string1.search("place")); // 2, returns pos of first letter

console.log(string1.match("t")); // returns an array

console.log(string1.match(/t/gi)) // g - search in whole string / i - ignore case




