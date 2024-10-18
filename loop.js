for
              (let i = 1; i <= 7; i++) {
              console.log("1 = ", i);
              }

console.log("Squaring of No");

// squaring of No
let result = 1;
let number = 2;
for (let i = 1; i <= 10; i++) {
              result *= number;
              console.log("Result =", result);
}
console.log("2 the power 10 is:", result);


let root3 = Math.sqrt(7);
console.log("Root 7 value is: ", + root3);










// // Degrees ko radians mein convert karne ka function
// function degreesToRadians(degrees) {
//               return degrees * (Math.PI / 180);
// }

// // Sin, Cos aur Tan ki values nikalne ka function
// function calculateTrigonometryValues(angleInDegrees) {
//               let angleInRadians = degreesToRadians(angleInDegrees);

//               // Sin aur Cos values nikalna
//               let sinValue = Math.sin(angleInRadians);
//               let cosValue = Math.cos(angleInRadians);

//               // Special cases ke liye rounding (cos value near 0 to handle undefined tan)
//               cosValue = Math.abs(cosValue) < 1e-10 ? 0 : cosValue;

//               // Tan ki value, special case for undefined values
//               let tanValue;
//               if (cosValue === 0) {
//                             tanValue = "undefined";  // Tan is undefined for cos(90°), cos(270°), etc.
//               } else {
//                             tanValue = Math.tan(angleInRadians);
//               }

//               // Values ko return karna
//               return {
//                             sin: sinValue,
//                             cos: cosValue,
//                             tan: tanValue
//               };
// }

// // User se angle input lena
// let angleInDegrees = parseFloat(prompt("Enter an angle in degrees (0 to 360):"));

// // Input angle ke liye trig values calculate karna
// if (angleInDegrees >= 0 && angleInDegrees <= 360) {
//               let values = calculateTrigonometryValues(angleInDegrees);
//               console.log(`Angle: ${angleInDegrees} degrees`);
//               console.log(`Sin: ${values.sin}`);
//               console.log(`Cos: ${values.cos}`);
//               console.log(`Tan: ${values.tan}`);
// } else {
//               console.log("Please enter a valid angle between 0 and 360 degrees.");
// }





// Function to find the square root of a number
// function findSquareRoot(number) {
//               return Math.sqrt(number);
// }

// // Examples
// let sqrt45 = findSquareRoot(45);
// let sqrt85 = findSquareRoot(85);

// console.log( sqrt45);
// console.log( sqrt85);






