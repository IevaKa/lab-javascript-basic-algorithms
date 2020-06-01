// Iteration 1: Names and Input
let hacker1 = "Leonardo",
hacker2 = "Ieva"

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

let name1 = '';
for (let i = 0; i < hacker1.length; i++) {
  name1 += hacker1[i].toUpperCase() + " ";
}
console.log(name1);

let name2 = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  name2 += hacker2[i];
}
console.log(name2);

if (hacker1 < hacker2) {
    console.log('The driver´s name goes first')
} else if (hacker1 > hacker2) {
    console.log('The navigator goes first definitely')
} else {
    console.log('What?! You both got the same name?')
}