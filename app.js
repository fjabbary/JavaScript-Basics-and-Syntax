
const studentName = 'John Doe';
const studentAge = 35;
const studentGrade = 85;
const studentAttendenceStatus = true;

console.log(studentName, studentAge, studentGrade, studentAttendenceStatus);


// ========================================================
// ===============|| JavaScript Operators ||===============
// ========================================================

let num1 = 15
let num2 = 11

// Task 3: Perform arithmetic operations
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", (num1/num2).toFixed(2));

// Task 4: Explore assignment operators
console.log("Updated num1: ", num1 += 10);
console.log("Updated num2: ", num2 *= 3);


// Task 5: Use comparison operators
 // As per Task 4, num1 value is 25 and num2 is 33
console.log("Is num1 value is equal to num2? ", num1 == num2);
console.log("Is num1 greater than num2? ", num1 > num2);
console.log("Is num1 not equal to num2? ", num1 != num2);



// Task 6: Apply logical operators
// As per Task 4, num1 value is 25 and num2 is 33
let isPositive = num1 > 0 && num2 > 0;  
let isEven = num1%2 == 0 || num2%2 == 0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
