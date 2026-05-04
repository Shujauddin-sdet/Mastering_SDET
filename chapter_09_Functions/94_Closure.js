function outer() {
    let message = "Hello";
    console.log("Outer called!");

    function inner() {
        console.log(message);
    }
    return inner;

}

// Method 1  -> Create a variable to store it and call the outer function and then call the new vaiable name that you have given.
let fn_inner = outer();
fn_inner();

// Method 2 -> You can call it directly. by adding () at the end of the outer function.
outer()();

//  inner() not allowed! so basically we cannot call directly so we need to first add return then create a new 
// variable to store it adn call first created function adn then call inner function ()