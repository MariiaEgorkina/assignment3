
let coinFlip;
let flips = parseInt(prompt("Enter the number"));

for (let i = 0; i < flips; i++) {
    coinFlip = Math.round(Math.random());
    
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}

