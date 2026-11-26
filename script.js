
// ==================================
// SpendWise - JavaScript Foundation
// ==================================

// 1. Store application data
let monthlyBudget = 0;
let expenseNames = [];
let expenseAmounts = [];
let totalExpenses = 0;
let remainingBalance = 0;

// 2. Collect monthly budget
monthlyBudget = Number(
    prompt("Welcome to SpendWise!\nEnter your monthly budget:")
);

// 3. Collect multiple expenses using a loop
if (Number.isFinite(monthlyBudget) && monthlyBudget > 0) {

    while (true) {

        let expenseName = prompt(
            "Enter expense name (or type 'done' to finish):"
        );

        if (expenseName === null || expenseName.toLowerCase() === "done") {
            break;
        }

        expenseName = expenseName.trim();

        if (expenseName === "") {
            alert("Please enter a valid expense name.");
            continue;
        }

        let expenseAmount = Number(
            prompt("Enter the amount for " + expenseName + ":")
        );

        if (
            !Number.isFinite(expenseAmount) ||
            expenseAmount <= 0
        ) {
            alert("Please enter a valid expense amount greater than zero.");
            continue;
        }

        expenseNames.push(expenseName);
        expenseAmounts.push(expenseAmount);
    }

    // 4. Calculate total expenses from an array
    function calculateTotalExpenses(amounts) {
        return amounts.reduce(function(total, amount) {
            return total + amount;
        }, 0);
    }

    // 5. Calculate remaining balance
    function calculateRemainingBalance(budget, expenses) {
        return budget - expenses;
    }

    // 6. Display budget summary
    function displayBudgetSummary() {

        console.log("===== SPENDWISE BUDGET SUMMARY =====");

        console.log("Monthly Budget: KSh " + monthlyBudget);

        console.log("----- EXPENSE DETAILS -----");

        for (let i = 0; i < expenseNames.length; i++) {
            console.log(
                expenseNames[i] + ": KSh " + expenseAmounts[i]
            );
        }

        console.log("Total Expenses: KSh " + totalExpenses);

        console.log("Remaining Balance: KSh " + remainingBalance);

        console.log("====================================");
    }

    // 7. Process budgeting information
    totalExpenses = calculateTotalExpenses(expenseAmounts);

    remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    displayBudgetSummary();

} else {
    console.log("Invalid monthly budget. Please refresh and try again.");
}
