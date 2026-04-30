//   *
//  ***
// ***** 

let n = 3;
for (let i = 1; i <= n; i++) {

    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);

}


console.log("----------------------------")

let m = 10;
for (let i=1; i<= m; i++)
{
    for (let j=1; j<=m-i; j++)
    {
        process.stdout.write(" ");
    }
    for (let j=1; j<= 2*i-1; j++)
    {
        process.stdout.write("*");
    }
    console.log();
}