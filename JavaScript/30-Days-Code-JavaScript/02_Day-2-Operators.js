function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
let tip = meal_cost * tip_percent / 100;
let tax = meal_cost * tax_percent / 100;

//Math.round: The Math.round() function returns the value of a number rounded to the nearest integer.
let total_cost = Math.round(meal_cost + tip + tax);

console.log(total_cost)
}