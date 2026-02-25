// Build a Sentence Maker

// User Stories:

// You should declare the following variables using let:

// adjective
// noun
// verb
// place
// adjective2
// noun2
// You should assign the above variables some string values of your choice.

// You should declare a firstStory variable.

// You should use the following story template to create the first story and assign it to the firstStory variable: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].";

// You should output your first story to the console using the message "First story: [firstStory]".

// You should assign new values to your adjective, noun, verb, place, adjective2, and noun2 variables.

// You should declare a secondStory variable.

// Create another story using the same template and assign it to the secondStory variable.

// You should output your second story to the console using the message "Second story: [secondStory]".

let adjective = "Happy";
let noun = "Shuajauddin";
let verb = "cold";
let place = "bangalore";
let adjective2 = "great";
let noun2 = "Biryani";

let firstStory = "declare";

// 1. Added a space string (" ") between adjective and noun
// 2. Added a space before "who" and after "eat "
// 3. Added a space before and after "The"
// 4. Added a space after "a "
// 5. Added a space after "had "
// 6. Added a space after "was "
firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

console.log("First story: " + firstStory)

adjective = "1"
noun = "2"
verb = "3"
place = "4"
adjective2 = "5"
noun2 = "6"

let secondStory;
secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

console.log("Second story: " + secondStory)