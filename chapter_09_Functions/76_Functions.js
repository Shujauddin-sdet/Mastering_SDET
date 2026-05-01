// Without functions — repeated logic

let score1 = 85;
let result1 = score1 >= 70 ? "pass" : "fail";
console.log(result1);

let score2 = 45;
let result2 = score2 >= 70 ? "pass" : "fail";
console.log(result2);

function getResult(score) {
    return score >= 70 ? "pass" : "fail";
}

getResult(85);  // "pass"
getResult(45);  // "fail"

console.log("-------")

function a (){
    console.log("hello World")
}
 a();

 function b (hie){ //hie is parameter
    console.log(hie)
 }
 b("hi from shuja") // shuja is argument


 function mixed1(x, y){
    let a = x + y;
    let b = x * y;

let arr = [a, b]
return arr;

}
let result = mixed1(10, 20)
console.log(result)
console.log(result[1]);