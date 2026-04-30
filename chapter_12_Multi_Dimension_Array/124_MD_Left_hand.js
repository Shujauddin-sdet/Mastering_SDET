// *****
// ****
// ***
// **
// *

let n = 5;
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

console.log("----------------------------")

let m = 5;
for (let i = m; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}

