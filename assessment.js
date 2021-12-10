function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                console.log(true);
            } else {
                console.log(false);
            }
        }
    }
}

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

// addToZero([1, 2, 3, -2]);
// // -> True