function fullName(firstName, LastName) {
  return `${firstName} ${LastName}`;
}
console.log(fullName("Rufaidat", "Al-siddiq"));
let addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(2, 3));

let areaOfRectangle = (length, breath) => length * breath;
console.log(areaOfRectangle(5, 20));

let perimeterOfRectangle = (length, breath) => 2 * (length + breath);
console.log(perimeterOfRectangle(5, 20));

let volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(5, 2, 3));

let areaOfCircle = (radius) => Math.PI * Math.pow(radius, 2);
console.log(areaOfCircle(3));

let circumOfCircle = (r) => 2 * Math.PI * r;
console.log(circumOfCircle(5));

let density = (m, v) => m / v;
console.log(density(20, 5));

let speed = (d, t) => d / t;
console.log(speed(10, 2));

let weight = (m, g = 9.8) => m * g;
console.log(weight(5));

let convertCelsiusToFahrenheit = (temp) => (temp * 9) / 5 + 32;
console.log(convertCelsiusToFahrenheit(32));

function checkBmi(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi <= 24.9) {
    return "normal Weight";
  } else if (bmi <= 29.9) {
    return "Overweight";
  } else {
    return "obese";
  }
}
console.group(checkBmi(35));

function checkSeason(month) {
  mot = month.toLowerCase();
  switch (mot) {
    case "january":
    case "february":
    case "march":
      return "autumn";
      break;
    case "april":
    case "may":
    case "june":
      return "winter";
      break;
    case "july":
    case "august":
    case "september":
      return "spring";
      break;
    case "october":
    case "november":
    case "december":
      return "summer";
      break;
  }
}
console.log(checkSeason("december"));

let findMax = (...args) => Math.max(...args);
console.log(findMax(0, 10, 5));
10;
console.log(findMax(0, -10, -2));
0;

// level2
let solveLinEquation = (a, x, b, y, c) => a * x + b * y + c;

function solveQuadratic(a = 5, x = 1, b = 2, c = 3) {
  return a * Math.pow(x, 2) + b * x + c;
}
console.log(solveQuadratic());
console.log(solveQuadratic(1, 4, 4));
console.log(solveQuadratic(1, -1, -2));
console.log(solveQuadratic(1, 7, 12));
console.log(solveQuadratic(1, 0, -4));
console.log(solveQuadratic(1, -1, 0));

function printArray(arr) {
  return arr;
}
// console.log(printArray(2, 5, 6, 2, 7, 8, 9, 10));
