var tmpArr = [], // Temporary 1-dimensional array to hold all values
    arr = [], // The final 2-dimensional array
    rows = 10,
    cols = 10,
    elements = 20; // Number of "Y"s

// 1. Fill temporary array with "N"s
for (var i = 0; i < rows * cols - elements; i += 1) {
    tmpArr.push("N");
}

// 2. Insert "Y"s at random indexes in the temporary array
for (var i = 0; i < elements; i += 1) {
    var index = Math.round(Math.random() * (tmpArr.length + 1));
    tmpArr.splice(index, 0, "Y");
}

// 3. Split temporary array into 10 seperate arrays
// and insert them into the final array
for (var i = 0; i < rows; i += 1) {
    var row = tmpArr.slice(i * cols, (i + 1) * cols);
    arr.push(row);
}
console.log(arr)