const n = parseInt(readline()); // number of temperatures to analyze
var inputs = readline().split(' '); // array of strings
var closest = 0; // Default return value.

if (inputs.length > 0) {
    for (let i = 0; i < n; i++) {
        const t = parseInt(inputs[i]);  // temp as an integer between -273 to 5526

        if (i == 0) {
            closest = t;
        } else if ((t > 0) && (t <= Math.abs(closest))) {
            closest = t;
        } else if ((t < 0) && (-t < Math.abs(closest))) {
            closest = t;
        }
    }
}

console.log(closest); // Output
