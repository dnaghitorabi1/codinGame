s = readline().split(' '); // split incoming string into array

const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let x = lightX - initialTx;
let y = lightY - initialTy;
let direction = "";

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    if (x > 0 && y > 0) {
        direction = "SE";
        x--;
        y--;
    } else if ((x > 0) && (y < 0)) {
        direction = "NE";
        x--;
        y++;
    } else if ((x < 0) && (y > 0)) {
        direction = "SW";
        x++;
        y--;
    } else if ((x < 0) && (y < 0)) {
        direction = "NW";
        x++;
        y++;
    } else if ((x == 0) && (y > 0)) {
        direction = "S";
        y--;
    } else if ((x == 0) && (y < 0)) {
        direction = "N";
        y++;
    } else if ((x > 0) && (y == 0)) {
        direction = "E";
        x--;
    } else if ((x < 0) && (y == 0)) {
        direction = "W";
        x++;
    }

    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(direction);
}
