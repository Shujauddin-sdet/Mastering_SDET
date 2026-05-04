function add(a, b, c) {

    return a + b + c;

}

let num = [1, 2, 3];
console.log(add(...num));  //. sum -> 6

// ------- 

function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404];

console.log( hasError(...responseCodes) ); // true

/*Part 1: The add Function (Dumping the box)
Here is the first block of code:

JavaScript
function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
add(...num); 
Step-by-step breakdown:

function add(a, b, c): The author created a function that strictly requires three separate numbers to work. It expects a, b, and c.

let num = [1, 2, 3];: They created an array (a closed box) containing three numbers.

add(...num);: Here is the magic. The author cannot just pass the box to the function like add(num), because the function expects three separate items, not one box.

So, they use the Spread operator (...).

The ... rips open the num array and dumps the numbers out.

Behind the scenes, the computer translates add(...num) exactly into add(1, 2, 3).

1 becomes a, 2 becomes b, and 3 becomes c. The math adds up to 6.

Part 2: The hasError Function (The Catcher's Mitt)
Here is the second block. This one is a bit more advanced because the author used ... in two different ways.

JavaScript
function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404];
hasError(...responseCodes); 
Step-by-step breakdown:

let responseCodes = [200, 201, 404];: The author has a list of HTTP status codes they got from testing an API.

hasError(...responseCodes);: Just like before, they use Spread to dump the array out. Behind the scenes, this translates to hasError(200, 201, 404).

function hasError(...codes): Now look at the function definition. The author used the Rest parameter here.

Why? Because they wanted a "Catcher's Mitt."

They wanted a function that could accept any amount of numbers thrown at it.

When 200, 201, 404 are thrown at the function, the ...codes catches them and packs them neatly back into a brand new array called codes.

return codes.some(c => c >= 400);: Now that codes is a valid array, the author uses the built-in .some() method.

This simply translates to: "Look through this array. Are there some numbers (at least one) that are greater than or equal to 400?"

Because 404 is in the array, the answer is true. */