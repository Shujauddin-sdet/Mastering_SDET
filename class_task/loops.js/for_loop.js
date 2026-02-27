//for loop
 
// print hello 5 times

for (let i = 1; i <= 5; i++) {
    console.log("hello");
}

// print numbers from 1 to 10

for (i = 1; i <= 10; i++) {
    console.log(i);
}

// print even number from 1 to 20

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// print table of 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${i * 5}`);
}

// print sum of first 10 natural numbers

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
