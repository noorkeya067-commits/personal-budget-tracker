
// ==================================
// SpendWise - JavaScript Foundation
// ==================================

// 1. Store application data
let monthlyBudget = 0;
let expenseName = "";
let expenseAmount = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// 2. Collect user input
monthlyBudget = Number(prompt("Welcome to SpendWise!\nEnter your monthly budget:"));

expenseName = prompt("Enter your expense name:");

expenseAmount = Number(prompt("Enter the expense amount:"));

// 3. Calculate total expenses
function calculateTotalExpenses(amount) {
    return amount;
}

// 4. Calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// 5. Display budget results
function displayBudgetSummary() {
    console.log("===== SPENDWISE BUDGET SUMMARY =====");
    console.log("Monthly Budget: KSh " + monthlyBudget);
    console.log("Expense Name: " + expenseName);
    console.log("Expense Amount: KSh " + expenseAmount);

    console.log("Total Expenses: KSh " + totalExpenses);
    console.log("Remaining Balance: KSh " + remainingBalance);
    console.log("====================================");
}

// 6. Process the budgeting information
if (
    monthlyBudget > 0 &&
    expenseName !== null &&
    expenseName.trim() !== "" &&
    Number.isFinite(expenseAmount) &&
    expenseAmount >= 0
) {
    totalExpenses = calculateTotalExpenses(expenseAmount);

    remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    displayBudgetSummary();

} else {
    console.log("Invalid input. Please refresh and enter valid information.");
}
