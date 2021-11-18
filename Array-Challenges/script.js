//1. Always Hungry
function alwaysHungry(arr) {
    var food = false;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            food = true;
        }
    }
    if (food == false) {
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

console.log("--------NEW CHALLENGE--------")

//2. High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var x = 0; x <= arr.length - 1; x++) {
        if (arr[x] > cutoff) {
            filteredArr.push(arr[x]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

console.log("--------NEW CHALLENGE--------")

//3. Better than Average
function betterThanAverage(arr) {
    var sum = 0;
    for (var y = 0; y <= arr.length - 1; y++) {
        sum += arr[y];
    }
    sum = sum / arr.length;
    var count = 0
    for (var n = 0; n <= arr.length - 1; n++) {
        if ( arr[n] > sum) {
            count += 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

console.log("--------NEW CHALLENGE--------")

//4. Array Reverse
function reverse(arr) {
    var newArr = [];
    for (var j = arr.length - 1; j >= 0; j--) {
        newArr.push(arr[j]);
    }
    return newArr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

console.log("--------NEW CHALLENGE--------")

//5. Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var z = 1; z <= n; z++) {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
