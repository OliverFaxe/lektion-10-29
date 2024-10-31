// const numbers = [1, 2, 3, 4];
// //               0  1  2  3  Index position
// console.log(numbers[3]);


// let siffra = 0;

// while (siffra < 100){
//     siffra++;

//     console.log(siffra);

//     if (siffra == 47) {
//         console.log("47 är bra nog!");
//         break;
//     }
// }

// console.log("Loop har avslutats");

// const numbers = [5, 2, 10, 15, 27, 99]

// for(let i = numbers.length - 1; i>=0; i--) { // numbers.length - 1 eftersom numbers.length har 6. det finns bara 0-5 index positioner.
//     console.log(numbers[i]);
// }

// function greeting () {
//     console.log("Hello there!");
// }

// const greeting = () => {
//     console.log("Hello there!");
// }

// function greetWithName (name) {
//     console.log(`Hello ${name}!`);
// }

// function addTwoNumbers(num1, num2) {
//     const result = num1 + num2;
//     console.log(`The result is ${result}`);
// }

function divide(num1, num2) {
    const result = num1 / num2;
    return result;
}

const result = divide(10, 2);