// game loop
while (true) {

    // Array for storing mountain heights
    let mountainHeightsArray = new Array();

    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.

        // Add mountain height.
        mountainHeightsArray = mountainHeightsArray.concat(mountainH);
    }

    // At this point, all mountain heights are stored in an array.

    // Find max value
    let maxMountainHeight = Math.max(...mountainHeightsArray);

    // Find index of max value
    let maxMountainIndex = mountainHeightsArray.indexOf(maxMountainHeight);

    console.log(maxMountainIndex);     // The index of the mountain to fire on.
}
