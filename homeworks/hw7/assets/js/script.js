function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let average = sum/3;
    return average;
}

function createSentence(num, noun) {
    let sent = "On average a Berkeley student has " + " " + num + " " + noun + "s.";
    return sent;
}

function getRandomNum(max) {
    return Math.random() * max;
}

let x = getRandomNum(20);
let y = getRandomNum(13);
let z = getRandomNum(10);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, "flying squirrel");

console.log(sentence); 