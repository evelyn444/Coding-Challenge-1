// Task 1: Variables and Data Types
let employeeName = "Katie Jones";
const employeeID = 1;
var isActive = true;

console.log(employeeName), typeof (employeeName);
console.log(employeeID), typeof (employeeID);
console.log(isActive), typeof(isActive);


//Task 2: Compound Data Types

let products = ["lipstick", "blush", "eyeshadow"];
const productDetails= {
    name: products, 
    inStock
    Price: 20.00,

}
console.log(products,productDetails)

//Task 3: Assignment Operators

let accountBalance = 1234.00
accountBalance += 50.00; 
console.log("Updated Balance:",accountBalance); // update: 1284.00
accountBalance -= 145.00;
console.log("Updated Balance:",accountBalance); // update: 1139.00
accountBalance *= 2.00;
console.log("Updated Balance:",accountBalance); // update: 2278.00
accountBalance /= 2.00;
console.log("Updated Balance:",accountBalance); // update: 1139.00
accountBalance %= 3.00;
console.log("Updated Balance:",accountBalance); // update: 2

//Task 4: Comparison Operators:

let employeeScore1 = 96
let employeeScore2 = 78

employeeScore1 > employeeScore2
console.log(employeeScore1 > employeeScore2); // Output = true

employeeScore1 < employeeScore2
console.log(employeeScore1 < employeeScore2); // Output = false

employeeScore1 <= employeeScore2
console.log(employeeScore1 <= employeeScore2); // Output = false

employeeScore1 >= employeeScore2
console.log(employeeScore1 >= employeeScore2); // Output = true

employeeScore1 === employeeScore2
console.log(employeeScore1 === employeeScore2); // Output = false

employeeScore1 !== employeeScore2
console.log(employeeScore1 !== employeeScore2); // Output = true