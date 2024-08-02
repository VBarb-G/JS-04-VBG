// 1: Calculate the sum of all resistors connected in series
const sumResistance = [8, 15, 100];
let total = 0; 

for (let i=0; i < sumResistance.length; i++) {
    total += sumResistance[i];  
};
console.log("La suma de los números " + sumResistance + " es: " + total);

//2: Given a number, return the number divided into its halves in an array.
let num = 10;
num= parseInt(num);
function numberSplit(num) {
    const half = num / 2;
    return [half, half];
}
const result= numberSplit(num);
console.log(result); 


//3: Find the name of a secret society based on the first letter of each member's name.
const secret = ["Harry", "Ron", "Hermione"];
function findSecretSociety(secret) {
    const firstLetters = secret.map(secret => secret[0]);
    return firstLetters.join("");    
}

console.log(findSecretSociety(secret));

//4: Display online status for a list of users.
const users = ["MochIng99", "J0eyPunch", "glassedFer"];

function displayOnlineStatus(users) {
    const onlineUsers = users.filter(user => user === "MochIng99" || user === "J0eyPunch");
    console.log(`${onlineUsers.join(", ")} are online.`);
}   

displayOnlineStatus(users) + 1;

/* 5: Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.*/
arrayMultiplos(17, 6);

function arrayMultiplos(number, length) {
    let arrayNum = [];
    let arrayFinal = [];
    console.log("El número a multiplicar es: " + number);
    for(i = 1; i<=length; i++){ 
        arrayNum.push(i);
    }
    arrayNum.forEach((num) => {
        num = number * num;
        console.log(`Multiplo de ${number} = ${num}` );
        arrayFinal.push(num);     

    });
    
   console.log(`Array final: [${arrayFinal}]`);
}

/*6: Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.*/

const array = [-1, -3, -5, 4, 6, 7, 6, 7];

function positivelyDominant(array) {
   const positiveCount = array.filter(num => num > 0).length;
    return positiveCount > array.length / 2;
}   

console.log(positivelyDominant(array));

/*7: Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.*/








