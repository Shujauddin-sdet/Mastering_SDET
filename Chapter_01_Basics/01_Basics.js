// // // console.log("Happy to Begin this Journey of Software develoment in Testing!");


// // // console.log(0 == "");
// // // console.log (0 == "0");
// // // console.log (0 == false);
// // // console.log(null == undefined);
// // // console.log (null == 0);

// // // console.log("print", "" == "0");


// // // console.log(5 != "5");

// // let score = 89.5;

// // if (score >= 90 && score <= 100) {
// //     console.log("Grade A");
// // }
// // else if (score >= 80 && score < 90) {   
// //     console.log("Grade B");
// // }
// // else if (score >= 70 && score < 80) {   // exactly 70–79
// //     console.log("Grade C");
// // }
// // else if (score >= 60 && score < 70) {   // exactly 60–69
// //     console.log("Grade D");
// // }
// // else if (score >= 0 && score < 60) {    // exactly 0–59
// //     console.log("Grade F");
// // }
// // else {
// //     console.log("Your grade is invalid");
// // }


// let score = 89.5;   // you can change this to any number
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 80 && score < 90) {   
//     grade = "B";
// } else if (score >= 70 && score < 80) {   
//     grade = "C";
// } else if (score >= 60 && score < 70) {   
//     grade = "D";
// } else if (score >= 0 && score < 60) {    
//     grade = "F";
// } else {
//     grade = "Invalid";   // for negative numbers or >100
// }

// console.log(`Grade ${grade}`);


// let num = 100

// if (num % 3 ){
//     console.log("Fuzz")
// }

for (let a = 1; a <= 100; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("FizzBuzz");
    } else if (a % 3 === 0) {
        console.log("Fizz");
    } else if (a % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(a);
    }
}


