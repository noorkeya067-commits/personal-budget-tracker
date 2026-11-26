# SpendWise – Personal Budget & Expense Tracker

## Project Description
SpendWise is an interactive personal budget and expense tracker built using HTML, CSS, and JavaScript.

It allows users to set a monthly budget, add expenses, view total spending, monitor their remaining balance, and delete expenses.

## Features
- Set a monthly budget.
- Add expenses with a name, amount, and category.
- View all recorded expenses in a table.
- Calculate total expenses automatically.
- Calculate the remaining budget.
- Display a warning when expenses exceed the budget.
- Delete recorded expenses.
- View spending totals by category.
- Validate user input.

## JavaScript Concepts Implemented

### 1. Variables
Variables store the monthly budget, expense records, and references to HTML elements.

### 2. Data Types
The project uses:
- Strings for expense names and categories.
- Numbers for budget and expense amounts.
- Arrays to store multiple expense records.
- Objects to organize individual expense details.

### 3. Conditional Statements
Conditional statements (`if`, `else if`, and `else`) are used to:
- Check whether the monthly budget has been entered.
- Warn users when they exceed their budget.
- Display a message when the budget is fully used.
- Validate expense names and amounts.
- Display a message when there are no expenses.

### 4. Arrays and Loops
An array named `expenses` stores multiple expense records.

Each expense is stored as an object containing its name, amount, and category.

`for` loops process expense records to calculate totals, display expenses, and calculate category spending.

### 5. Functions
Functions organize the application logic:
- `formatMoney()` formats amounts in Kenyan Shillings.
- `calculateTotalExpenses()` calculates total spending.
- `updateDashboard()` updates the budget summary and feedback.
- `displayExpenses()` displays expense records.
- `displayCategories()` calculates and displays category totals.

### 6. DOM Manipulation
The JavaScript uses DOM manipulation to update the webpage without reloading it.

It updates:
- Monthly budget.
- Total expenses.
- Remaining balance.
- Expense table.
- Category summaries.
- Feedback messages.

### 7. Event Listeners
Event listeners respond to user actions.

The project uses form submission event listeners to set a budget and add expenses. Delete buttons use click event listeners to remove expenses.

### 8. Input Validation
The application checks that:
- The monthly budget is a valid positive number.
- Expense names are not empty.
- Expense amounts are valid positive numbers.
- A monthly budget is set before adding expenses.

Invalid information is rejected with a helpful feedback message.

## Challenges and Solutions
- **Challenge:** Updating the dashboard when expenses change.  
  **Solution:** Created reusable functions to recalculate and display the latest totals.

- **Challenge:** Managing multiple expense records.  
  **Solution:** Used an array of objects to store expense information.

- **Challenge:** Preventing invalid user input.  
  **Solution:** Added conditional statements to validate budget and expense information.

- **Challenge:** Keeping the webpage updated after user actions.  
  **Solution:** Used DOM manipulation and event listeners.

## How to Run the Project
1. Clone or download the project repository.
2. Open `index.html` in a web browser.
3. Enter a monthly budget.
4. Add expenses using the expense form.
5. View the updated dashboard and expense table.
6. Use the Delete button to remove an expense.

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Project Status
Week 6 – Interactive JavaScript Budget Tracker completed.
