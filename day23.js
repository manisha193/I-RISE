var start = 345;
var end = 876;
var target = 5000;

function printNumber(start, end, target) {
    // console.log(start, end, target)
    if (target >= start && target <= end) {
        // console.log("TARGET IN RANGE")
        for (var i = start; i <= end; i = i + 1) {
            console.log(i)
         }
    } else {
        console.log("TARGET IS THE OUT OF THE RANGE.")
    }
}
printNumber(start, end, target);

var number = 61;
console.log(number > 10)
console.log(number < 50)
console.log( number > 10 && number < 50 &&  number < 60)
console.log( number > 10 || number < 50 ||  number < 60)


// array  - multiple data in single varible

var mystring = "ABC";

var myArray = ["ABC", "AYZ", "JKL", "WWWW", 5623, true, "WELCOME", "HI"];

console.log(myArray)
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3])
console.log(myArray[4])
console.log(myArray[5])
console.log(myArray.length)

for (var i = 0; i < myArray.length; i = i + 1) {
    console.log(myArray[i])
}