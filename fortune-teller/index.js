const fortune1 = "The Nap of Destiny: A sunbeam will soon find you at exactly the right moment. Lean into the warmth and take the rest you've earned.";
const fortune2 = "The Persistent Meow: Persistence is key this week. If you want something, don't be afraid to make a little noise until the door finally opens.";
const fortune3 = "The Landed Feet: No matter how chaotic the tumble, trust in your natural grace. You will land on your feet and walk away as if you planned it all along.";
const fortune4 = "The Midnight Zoomie: An unexpected burst of energy is coming. Use it to tackle that impossible task you've been ignoring—you'll be surprised how fast you finish.";
const fortune5 = "The Box of Contentment: You don't need the fancy packaging to be happy. Find joy in the simple, sturdy things already around you today.";

function randomFortune() {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    if (randomNumber == 1) {
        alert(fortune1);
    } else if (randomNumber == 2) {
        alert(fortune2);
    } else if (randomNumber == 3) {
        alert(fortune3);
    } else if (randomNumber == 4) {
        alert(fortune4);
    } else if (randomNumber == 5) {
        alert(fortune5);
    } else {
        alert("Check the console.")
        console.log(`Error. The randomFortune function outputted ${randomNumber}, which is an invalid value.`);
    }
}