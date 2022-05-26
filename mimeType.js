const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

let map = new Map();

for (let i = 0; i < N; i++) {
  var inputs = readline().split(' '); // Create input array for file extension.
  const EXT = inputs[0]; // file extension
  const MT = inputs[1]; // MIME type.

  map.set(EXT.toLowerCase(), MT); // Associate file extension with MIME type in hash table.
}

for (let i = 0; i < Q; i++) { // For each file name,
  const FNAME = readline(); // store file name.
  console.error("FNAME: " + FNAME);

  let ext = "";

  if (FNAME.includes(".")) {
    ext = FNAME.substring(FNAME.lastIndexOf(".") + 1, FNAME.length).toLowerCase();
  }

  let mimeType = "";

  if (map.has(ext)) {
    mimeType = map.get(ext);
  } else {
    mimeType = "UNKNOWN";
  }

  console.log(mimeType);
}
