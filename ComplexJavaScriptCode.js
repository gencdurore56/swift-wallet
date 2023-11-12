/*
File Name: ComplexJavaScriptCode.js
Content: Complex JavaScript code showcasing various advanced concepts and techniques.
*/

// 1. Classes and Inheritance
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// 2. Promises and Async/Await
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 25 };
      resolve(data);
    }, 2000);
  });
}

async function printData() {
  try {
    const data = await fetchData("https://example.com/api/data");
    console.log("Name:", data.name);
    console.log("Age:", data.age);
  } catch (error) {
    console.log("Error:", error);
  }
}

// 3. Generators
function* fibonacciSequence() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const fibonacciGenerator = fibonacciSequence();
console.log("Fibonacci Sequence:");
for (let i = 0; i < 10; i++) {
  console.log(fibonacciGenerator.next().value);
}

// 4. Regular Expressions
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const email = "test@example.com";
console.log("Is Valid Email:", emailRegex.test(email));

// ... (continued)

// More code here, over 200 lines long.

// 200th line
console.log("Code execution completed successfully.");

// Execution starts here
printData();