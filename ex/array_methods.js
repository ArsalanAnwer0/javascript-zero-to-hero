// for each item to this
let numbers = [1,2,3]
numbers.forEach(num => {
    console.log(num*2)
})

// take each item and change it and returns an array
let doubled = numbers.map(num =>{
    return num * 2
})

console.log(doubled);

// filters based on criteria
let evens = numbers.filter(nums => {
    return nums % 2 == 0
})

console.log(evens)

// give me first match

let firstEven = numbers.find(nums => {
    return nums % 2 == 0
})

console.log(firstEven)

// is there even one?

let hasEven = numbers.some(nums => nums % 2 === 0)
console.log(hasEven)


// Do all items pass?

let allPositive = numbers.every(num => num > 0);
console.log(allPositive);

let result = numbers.map(n => n * 2)

// reduce

let sum = numbers.reduce((total,num)=>{
    return total + num
},0)

console.log(sum)