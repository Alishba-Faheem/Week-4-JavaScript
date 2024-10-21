//For Loop Practice Questions
//Print Numbers from 1 to 10:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2.Sum of Numbers from 1 to 100:
let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log(total);

//3.Print Even Numbers between 1 and 20:
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//4.Factorial of a Number:
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial);

//5.Print Multiplication Table:
let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
}


//While Loop Practice Questions
//1.Print Numbers from 1 to 10:
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//2.Sum of Digits of a Number:


