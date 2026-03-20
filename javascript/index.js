// Declares the fortune values
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// Defines a min and max value for the random number
const min = 1;
const max = 5;

// Chooses between 1 and 5
const randomNumber = Math.floor(Math.random() * (max - min + 1) + 1);

// Method 1: Using ternaries. Shorter, but a little harder to read in such a long statement.
// const selectedFortune = randomNumber == 1 ? fortune1 : randomNumber == 2 ? fortune2 : randomNumber == 3 ? fortune3 : randomNumber == 4 ? fortune4 : randomNumber == 5 ? fortune5 : console.log(`Error: randomNumber isn't between 1 and 5. Value generated: ${randomNumber}.`);

// Method 2: Using if/else
let selectedFortune;
if (randomNumber == 1) {
  selectedFortune = fortune1;
} else if (randomNumber == 2) {
  selectedFortune = fortune2;
} else if (randomNumber == 3) {
  selectedFortune = fortune3;
} else if (randomNumber == 4) {
  selectedFortune = fortune4;
} else if(randomNumber == 5) {
  selectedFortune = fortune5;
} else {
  console.log(`Error: randomNumber isn't between 1 and 5. Value generated: ${randomNumber}.`);
}

console.log(selectedFortune);