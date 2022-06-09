const LON = parseFloat(readline().replace(",", ".")); // User's longitude in degrees
const LAT = parseFloat(readline().replace(",", ".")); // User's latitude in degrees
const N = parseInt(readline()); // Number of defibrillators (integer)

let minimum = Infinity; // Initial minimum distance
let answer = "";    // Initial answer

for (let i = 0; i < N; i++) {   // For each defibrillator,
    const DEFIB = readline();   // save defibrillator description string

    let descriptionArray = DEFIB.split(";"); // convert string to array
    let latBDeg = parseFloat(descriptionArray[5].replace(",", "."));    // Replace ',' with '.'
    let lonBDeg = parseFloat(descriptionArray[4].replace(",", "."));
    let value = distanceBetweenPoints(LAT, LON, latBDeg, lonBDeg);  // Get distance

    if (value < minimum) {  // If distance is less than recorded minimum,
        minimum = value;    // Set minimum to this distance.
        answer = descriptionArray[1];   // Set the answer to index 1 (the name)
    }
}

function distanceBetweenPoints(latADeg, lonADeg, latBDeg, lonBDeg) {
    let latARad = latADeg * (Math.PI / 180);
    let lonARad = lonADeg * (Math.PI / 180);
    let latBRad = latBDeg * (Math.PI / 180);
    let lonBRad = lonBDeg * (Math.PI / 180);

    let x = (lonBRad - lonARad) * Math.cos((latARad + latBRad) / 2);
    let y = latBRad - latARad;

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;
}

console.log(answer);
