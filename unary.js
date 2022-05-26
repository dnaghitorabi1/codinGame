// Declarations
const MESSAGE = readline(); // original string
const map = new Map([
  ["0", [0, 0]],
  ["1", [0]]
]);
// ----------------------

// Main
let messageArray = MESSAGE.split("");

let messageArrayBinary = convertToBinary(messageArray);

let answer = [];

messageArrayBinary.forEach((item, i) => { // For each digit in the binary array,
  if (item !== messageArrayBinary[i - 1]) { // if different from previous digit,
    if (i !== 0) {
      answer.push(" "); // New blocks are prefaced with a space if not on first item.
    }

    let firstBlock = map.get(item);

    firstBlock.forEach((item2, j) => {
      answer.push(item2);
    });

    answer.push(" "); // Conclude first block with a space.
  }
  answer.push(0);
});

answer = answer.join("");
console.log(answer);
// ----------------------

// Functions
function convertToBinary(array) {
  let array2 = [];
  array.forEach((item, i) => { // For each character in message,
    item = item.charCodeAt(); // Convert to unicode.
    item = item.toString(2); // Convert to binary.

    while (item.length < 7) {
      item = "0" + item;
    }

    [...item].forEach((item2, j) => {
      array2.push(item2);
    });
  });
  return array2;
}
// ----------------------
