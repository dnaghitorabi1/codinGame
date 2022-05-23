const W = parseInt(readline()); // letter width, with trailing space
const H = parseInt(readline()); // letter height
const T = readline();   // line of text to represent as ASCII art
const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let outputString = "";

for (let i = 0; i < H; i++) {   // For each row of the ASCII art alphabet,
    const ROW = readline(); // Save string of ASCII art alphabet

    for (let j = 0; j < T.length; j++) {    // For each character in the input string,
        char = T[j];    // Save this character.

        letterIndex = alphabetString.indexOf(char.toUpperCase()); // Find the index this letter is, in the alphabet

        let asciiIndexStart = 0;
        let asciiIndexEnd = 0;

        if (letterIndex == -1) {    // If letter is not found in the alphabet,
            asciiIndexStart = 26 * W;
        } else {
            asciiIndexStart = letterIndex * W;  // Find starting index in ASCII art alphabet.
        }

        asciiIndexEnd = asciiIndexStart + W;    // Find ending index in ASCII art alphabet.

        // Add the ASCII representation of this line of the character to the output string.
        outputString += ROW.slice(asciiIndexStart, asciiIndexEnd);
    }
    // Add a line break;
    outputString += "\n";
}

console.log(outputString);
