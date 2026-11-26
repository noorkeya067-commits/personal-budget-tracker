
# SpendWise – Personal Budget & Expense Tracker

## Project Description

SpendWise is an interactive personal budget and expense tracker built using HTML, CSS, and JavaScript.

It allows users to set a monthly budget, add expenses, view total spending, monitor their remaining balance, delete expenses, and track spending by category.

The application uses browser localStorage to save budget and expense information, so the data remains available after refreshing the page.

## Live Website

**Netlify Live URL:** https://spendwise-noorkeya067.netlify.app

## GitHub Repository

**Public GitHub Repository:** https://github.com/noorkeya067-commits/personal-budget-tracker

## Features

- Set a monthly budget.
- Add expenses with a name, amount, and category.
- View all recorded expenses in a table.
- Calculate total expenses automatically.
- Calculate the remaining budget.
- Display warnings when expenses exceed the budget.
- Delete recorded expenses.
- View spending totals by category.
- Validate user input.
- Save budget and expense information using localStorage.
- Retain saved information after refreshing the browser.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git and GitHub
- Netlify
- Browser localStorage

## JavaScript Concepts Implemented

### 1. Variables and Data Types

Variables store the monthly budget, expense records, and references to HTML elements.

The project uses strings, numbers, arrays, and objects.

### 2. Conditional Statements

Conditional statements (`if`, `else if`, and `else`) are used to check budgets, validate inputs, and display appropriate feedback messages.

### 3. Arrays and Loops

An array named `expenses` stores multiple expense records.

For loops process expense records to calculate totals, display expenses, and calculate category spending.

### 4. Functions

Reusable functions organize the application logic:

- `formatMoney()` formats amounts in Kenyan Shillings.
- `calculateTotalExpenses()` calculates total spending.
- `updateDashboard()` updates the budget summary.
- `displayExpenses()` displays expense records.
- `displayCategories()` calculates category totals.
- `saveData()` saves budget and expense information.

### 5. DOM Manipulation

JavaScript updates the dashboard, expense table, category summaries, and feedback messages without reloading the page.

### 6. Event Listeners

Event listeners respond to form submissions and Delete button clicks.

### 7. Input Validation

The application checks that budget and expense amounts are valid positive numbers and that required fields are completed.

### 8. Local Storage

The application uses `localStorage` and JSON to save and retrieve budget and expense information in the browser.

## Deployment Process Summary

1. Organized the project files, including `index.html`, `style.css`, `script.js`, and `README.md`.
2. Created a public GitHub repository for SpendWise.
3. Uploaded the project files to GitHub.
4. Connected the GitHub repository to Netlify.
5. Deployed the website using Netlify.
6. Changed the default Netlify subdomain to a meaningful project name.
7. Made a visible change to the application and pushed it to GitHub.
8. Verified that Netlify automatically deployed the changes.
9. Tested the live application, including budget setting, adding expenses, deleting expenses, and saving information after refreshing.

## Challenges and Solutions

- **Challenge:** Updating the dashboard when expenses change.  
  **Solution:** Created reusable functions to recalculate and display the latest totals.

- **Challenge:** Managing multiple expense records.  
  **Solution:** Used an array of objects to store expense information.

- **Challenge:** Preventing invalid user input.  
  **Solution:** Added conditional statements to validate budget and expense information.

- **Challenge:** Keeping information after refreshing the page.  
  **Solution:** Implemented browser localStorage to save and retrieve application data.

- **Challenge:** Publishing the application online.  
  **Solution:** Connected the GitHub repository to Netlify and enabled automatic deployment.

## Lessons Learned

- How to organize an HTML, CSS, and JavaScript project.
- How to use JavaScript to make webpages interactive.
- How to work with arrays, objects, loops, and functions.
- How to manipulate webpage elements using the DOM.
- How to save information using localStorage.
- How to use Git and GitHub to manage project versions.
- How to deploy a website using Netlify.
- How continuous deployment updates a live website after pushing changes to GitHub.

## How to Run the Project Locally

1. Clone or download the GitHub repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Set a monthly budget.
5. Add expenses using the expense form.
6. View the updated dashboard and expense table.
7. Use the Delete button to remove expenses.

## Project Status

Deployment and testing completed.

The SpendWise application is publicly available through Netlify.

