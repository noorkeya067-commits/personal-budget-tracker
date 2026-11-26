# SpendWise – Personal Budget & Expense Tracker

## Project Description
SpendWise is a personal budget and expense tracker that helps users manage their monthly budgets, record multiple expenses, calculate total spending, and monitor their remaining balance.

The application uses HTML, CSS, and JavaScript to collect and process budgeting information.

## JavaScript Concepts Implemented

### 1. Variables
Variables store important budgeting information, including:
- Monthly budget
- Expense names
- Expense amounts
- Total expenses
- Remaining balance

The project uses `let` to declare variables whose values can change.

### 2. Data Types
The project uses:
- Strings for expense names.
- Numbers for monthly budgets and expense amounts.
- Arrays to store multiple expense names and amounts.

### 3. User Input
The JavaScript `prompt()` function collects the monthly budget, expense names, and expense amounts.

Users can enter multiple expenses. Typing `done` ends the expense-entry process.

The `Number()` function converts numerical input into numbers for calculations.

### 4. Arrays and Loops
Arrays store multiple expense names and amounts.

A `while` loop allows users to enter expenses repeatedly until they type `done`.

A `for` loop displays all recorded expenses in the browser console.

### 5. Budget Calculations
SpendWise calculates total expenses by adding all expense amounts stored in an array.

The `calculateTotalExpenses()` function uses the array `reduce()` method to calculate the sum.

The remaining balance is calculated using:

Remaining Balance = Monthly Budget - Total Expenses.

### 6. Reusable Functions
Functions organize the application logic and make calculations reusable.

The project includes:
- `calculateTotalExpenses()` – adds all expense amounts in an array.
- `calculateRemainingBalance()` – calculates the remaining budget.
- `displayBudgetSummary()` – displays the budget and expense summary.

### 7. Input Validation
The application checks that:
- The monthly budget is a valid positive number.
- Expense names are not empty.
- Expense amounts are valid positive numbers.

Invalid expense amounts are rejected with an alert message.

### 8. Displaying Results
The `console.log()` function displays clearly labeled budgeting information in the browser developer console.

## How to Run the Project
1. Download or clone the project repository.
2. Open `index.html` in a web browser.
3. Enter your monthly budget when prompted.
4. Enter expense names and amounts.
5. Type `done` when you finish entering expenses.
6. Open the browser developer console to view the results.

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Project Status
Week 6 – JavaScript Foundation completed with multiple-expense tracking, array calculations, loops, reusable functions, and input validation.