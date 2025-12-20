/*
Task:

Rewrite your greet, add, and isEven functions as arrow functions
Create an array of numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Create a function called processArray that takes two parameters:

an array
a callback function

It should loop through the array and call the callback function on each element, printing the result
Use processArray with your isEven function to check each number
Use processArray with a new arrow function that doubles each number
*/

// const add = (a,b) => a+b

// console.log(add(2,3))

// function greet(name,callback){
//     console.log("Hello "+name);
//     callback();
// }
// greet("Arsalan", () =>{
//     console.log("Welcome!")
// })


// function greet(name,callback){
//     console.log(`Hello, ${name}`);
//     callback()
// }

// greet("Arsalan",() => {
//     console.log("Bye")
// })


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const processArray = (array,callback) => {
//     for(let i=0;i<array.length;i++){
//         let result = callback(array[i])
//         console.log(result)
//     }
// }

// processArray(array,isEven)

// let numbers = [1, 2, 3, 4, 5]

// const processArray = (array, callback) => {
//     for(let i = 0; i < array.length; i++){
//         console.log("Processing:", array[i])
//         let result = callback(array[i])
//         console.log("Result:", result)
//     }
// }

// Test 1
// processArray(numbers, (n) => n * 2)

// Test 2
// processArray(numbers, (n) => n % 2 === 0)


// let num = [4,8]
// const iterateArray = (num,callback) => {
//     for(let i=0;i<num.length;i++){
//         let result = callback(num[i]) 
//         console.log(result)
//     }
// }

let num = [4,8]
const iterateArray = (num,callback) => {
    for(let i=0;i<num.length;i++){
        let result = callback(num[i])
        console.log(result)
    }
}

iterateArray(num,(value) => value*2)