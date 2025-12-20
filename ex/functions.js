/*
Task:

Create a function called greet that takes a name parameter and returns the string "Hello, [name]!"
Create a function called add that takes two numbers and returns their sum
Create a function called isEven that takes a number and returns true if even, false if odd (hint: use the modulo operator %)
Create a function called findMax that takes an array of numbers and returns the largest number (don't use Math.max, write your own logic)
Call each function and print the results
*/

function greet(name){
    return `Hello, ${name}`
}
function add(a,b){
    return a+b
}
function isEven(num){
    if(num % 2 == 0){
        return true
    } else{
        return false
    }
}
function findMax(numbers){
    let max = numbers[0] 
    
    for(let i = 1; i < numbers.length; i++){  
        if(numbers[i] > max){
            max = numbers[i]  
        }
    }
    return max
}

let numbers = [2,3,4,1]
console.log(greet("Arsalan"))
console.log(isEven(4))
console.log(findMax(numbers))