/*
Task:
Create a simple grade checker:

Create a variable score and set it to any number between 0-100
Using if, else if, and else, print the grade based on:

90 and above → "Grade: A"
80-89 → "Grade: B"
70-79 → "Grade: C"
60-69 → "Grade: D"
Below 60 → "Grade: F"
Also print whether the student "Passed" or "Failed" (passing is 60 or above)
*/

let score = 96

if (score >= 90) {
    console.log("Grade: A")
} else if (score >= 80) {      
    console.log("Grade: B")
} else if (score >= 70) {      
    console.log("Grade: C")
} else if (score >= 60) {     
    console.log("Grade: D")
} else {                        
    console.log("Grade: F")
}

// Passed or Failed
if (score >= 60) {
    console.log("Passed")
} else {
    console.log("Failed")
}



