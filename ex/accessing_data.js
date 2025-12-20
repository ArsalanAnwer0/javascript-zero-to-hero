/*
Task:
Using the variables you created:

Print only the second programming language from your array
Print only the city from your profile object
Create a new variable intro that contains a sentence like: "My name is Arsalan, I am 21 years old and I study at SCSU"

Use template literals (backticks ` `) to combine the variables


Add a new language "JavaScript" to your fav_lang array
Add a new property hobby to your profile object
Print the updated array and object
*/

let myName = "Arsalan"
let age = 21
let student = true
let fav_lang = ["Python","Go","Rust"]
let profile = {City:"St. Cloud",
    University: "SCSU",
    Goal: "SWE"
}
console.log(fav_lang[1])
console.log(profile.City)
let intro = `My name is ${myName}, I am ${age} years old and I study at ${profile.University}`
fav_lang.push = "Javascript"
profile.hobby = "games"
console.log(intro)
console.log(profile)
console.log(fav_lang)