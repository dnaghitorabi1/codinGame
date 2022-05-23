var inputs = readline().split(' '); // Convert input string to array.
console.error("inputs: " + inputs);

const W = parseInt(inputs[0]);  // Diagram Width
const H = parseInt(inputs[1]);  // Diagram Height

let resultMap = new Map();
let columnSpacing = 3;

for (let i = 0; i < H; i++) {   // For each horizontal line in the diagram,
    const lineString = readline();  // Save the line string.

    for (let j = 0; j < W; j++) {    // For each character in the line,

        let currentChar = lineString[j];    // Save current character
        let prevChar = lineString[j - 1];   // Save previous character

        if (i == 0) {   // If on first line
            if (currentChar != " ") {   // and if current character is not a space,
                // We are over a column.
                // Associate the current key with a placeholder column ID.
                resultMap.set(currentChar, j);
            }
        } else {    // If not on first line,
            switch (currentChar) {
                case "|":
                    // We are on a column.
                    break;
                case " ":
                    // We are in between columns.
                    break;
                case "-":
                    if (prevChar == "-") {  // If on second "-" character,
                        // We are on a bridge.
                        for (let key of resultMap.keys()) { // For each key in the result map,
                            if (resultMap.get(key) == j - 2) {  // If the value is j - 2,
                                // Change the value on the left of the bridge to the value on the right of the bridge.
                                resultMap.set(key, resultMap.get(key) + columnSpacing);
                            } else if (resultMap.get(key) == j + 1) {   // If this key's value is j + 1,
                                // Change the value on the right of the bridge to the value on the left of the bridge.
                                resultMap.set(key, resultMap.get(key) - columnSpacing);
                            }
                        }
                    }
                    break;
                default:
                    // We are on bottom line.
                    for (let key of resultMap.keys()) { // For each key in result map,
                        if (resultMap.get(key) === j) {  // If value is current index,
                            resultMap.set(key, currentChar);    // Set value to current char.
                        }
                    }
                    break;
            }
        }
    }
}

let resultString = "";

resultMap.forEach(function(value, key) {
    resultString += (key + value + "\n");
})

resultString = resultString.slice(0, resultString.length - 1);
console.log(resultString);
