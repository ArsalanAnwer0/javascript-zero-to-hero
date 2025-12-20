/*
Task:

1. Create an array of 5 of your friends' names
2. Using a `for` loop, print each name with its number:

   1. Ali
   2. Sara
   3. Omar

Using a while loop, print numbers from 10 down to 1 (countdown)
Using a for...of loop, print only names that are longer than 4 characters
*/


let friends = ["Ali","Ahmed","Arham","Abdul","Ari"]

// printing all values
for(let i=0;i<friends.length;i++){
    console.log(`${i+1}. ${friends[i]}`)
    
}
console.log("------");

// in reverse order
let i = friends.length - 1
while(i>=0){
    console.log(friends[i])
    i--
}
console.log("-----");

// count down
let j = 10
while(j>0){
    console.log(j)
    j--
}

for(let name of friends){
    if(name.length < 4){
        console.log(name);
        
    }
}








