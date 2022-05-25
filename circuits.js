const N = parseInt(readline()); // Store the number of unique resistors present in the circuit
let nameResistanceMap = new Map(); // Declare hash table for Name -> Resistance.
let parenthesesBracketsMap = new Map(); // Declare hash table for matching parentheses/brackets.
let circuitArray = [];
let stack = []; // Declare stack.
let string = "";  // Temporary string
let expressionArray = []; // Calculable expression array
let seriesResistance = 0; // Resistance of sub-token
let parallelResistance = 0; // Resistance of sub-token
let equivalentResistance = 0; // Running equivalent resistance

// Assign parentheses and brackets open/close mapping.
parenthesesBracketsMap.set(")", "(");
parenthesesBracketsMap.set("]", "[");

for (let i = 0; i < N; i++) { // For each unique resistor,
  var inputs = readline().split(' '); // store array of name and resistance,
  const name = inputs[0]; // store name string,
  const R = parseInt(inputs[1]); // store resistance integer.

  nameResistanceMap.set(name, R); // Assign Name to Resistance in hash table.
}
const circuitString = readline(); // Store circuit string.

// Convert the circuit string to an array, using space as the separator.
circuitArray = circuitString.split(" ");

// Parse the circuit array using a stack.
circuitArray.forEach((item, i) => { // For each value in the array,
  stack.push(item); // Add item to top of stack.

  if (item === ")" || item === "]") { // If we find a closing parenthesis/bracket,

    // While current character/string is not the matching parenthesis/bracket,
    // pop the stack and build a calculable expression until you find the matching parenthesis/bracket.
    while (string !== parenthesesBracketsMap.get(item)) {
      string = stack.pop();
      expressionArray.push(string);
    }

    // The calculable expression is in reverse order.
    // Need to reverse the expression and put its resistance into the stack.
    expressionArray.reverse(); // Reverse the expression array.
    expressionArray = expressionArray.slice(1, expressionArray.length - 1); // Reduce to just the resistor names.

    // Replace any resistor names with their values.
    // If already a number, keep the same.
    expressionArray.forEach((item, i) => {
      if (nameResistanceMap.has(item)) {
        expressionArray[i] = nameResistanceMap.get(item);
      }
    });

    // string is now either a "(" or a "[".
    // Depending on which it is,
    // we either calculate using series or parallel resistor math.
    switch (string) {
      case "(":
        // Series resistor math
        seriesResistance = expressionArray.reduce(function(prev, current) {
          return prev + current;
        }, 0);

        stack.push(seriesResistance);
        break;
      case "[":
        // Parallel resistor math
        expressionArray.forEach((item, i) => {
          expressionArray[i] = 1 / expressionArray[i];
        });

        let denominator = expressionArray.reduce(function(prev, current) {
          return prev + current;
        }, 0);

        parallelResistance = 1 / denominator;

        stack.push(parallelResistance);
        break;
      default:
        break;
    }
  }
  expressionArray = []; // Reset sub-expression.
  string = ""; // Reset string.
});

equivalentResistance = parseFloat(stack[0]).toFixed(1);
console.log(equivalentResistance);
