
// ==========================================
// SpendWise - Interactive Budget Tracker
// ==========================================

// 1. Application data
let monthlyBudget = 0;
let expenses = [];

// 2. Select HTML elements
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-amount");

const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");

const monthlyBudgetDisplay = document.getElementById("monthly-budget");
const totalExpensesDisplay = document.getElementById("total-expenses");
const remainingBalanceDisplay = document.getElementById("remaining-balance");

const expenseList = document.getElementById("expense-list");
const feedbackMessage = document.getElementById("feedback-message");
const categorySummary = document.getElementById("category-summary");

// 3. Format money in Kenyan Shillings
function formatMoney(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// 4. Calculate total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// 5. Update dashboard information
function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = monthlyBudget - totalExpenses;

    monthlyBudgetDisplay.textContent = formatMoney(monthlyBudget);
    totalExpensesDisplay.textContent = formatMoney(totalExpenses);
    remainingBalanceDisplay.textContent = formatMoney(remainingBalance);

    // Decision making
    if (monthlyBudget === 0) {
        feedbackMessage.textContent = "Please set your monthly budget.";
    } else if (remainingBalance < 0) {
        feedbackMessage.textContent = "Warning! You have exceeded your budget.";
    } else if (remainingBalance === 0) {
        feedbackMessage.textContent = "You have used your entire budget.";
    } else {
        feedbackMessage.textContent = "Your budget is within the limit.";
    }
}

// 6. Display expenses using DOM manipulation
function displayExpenses() {
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.innerHTML = `
            <tr>
                <td colspan="4">No expenses yet.</td>
            </tr>
        `;
        return;
    }

    // Loop through expense records
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const amountCell = document.createElement("td");
        amountCell.textContent = formatMoney(expense.amount);

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function() {
            expenses.splice(i, 1);
            displayExpenses();
            updateDashboard();
            displayCategories();
        });

        actionCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(categoryCell);
        row.appendChild(amountCell);
        row.appendChild(actionCell);

        expenseList.appendChild(row);
    }
}

// 7. Display category totals
function displayCategories() {
    categorySummary.innerHTML = "";

    if (expenses.length === 0) {
        categorySummary.textContent = "No expense categories yet.";
        return;
    }

    const categoryTotals = {};

    for (let i = 0; i < expenses.length; i++) {
        const category = expenses[i].category;

        if (categoryTotals[category] === undefined) {
            categoryTotals[category] = 0;
        }

        categoryTotals[category] += expenses[i].amount;
    }

    for (const category in categoryTotals) {
        const card = document.createElement("article");
        card.className = "category-card";

        const heading = document.createElement("h3");
        heading.textContent = category;

        const amount = document.createElement("strong");
        amount.textContent = formatMoney(categoryTotals[category]);

        card.appendChild(heading);
        card.appendChild(amount);

        categorySummary.appendChild(card);
    }
}

// 8. Handle monthly budget form submission
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const newBudget = Number(budgetInput.value);

    if (!Number.isFinite(newBudget) || newBudget <= 0) {
        feedbackMessage.textContent = "Please enter a valid budget greater than zero.";
        return;
    }

    monthlyBudget = newBudget;

    budgetForm.reset();

    updateDashboard();
});

// 9. Handle expense form submission
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    // Validate expense information
    if (name === "" || category === "") {
        feedbackMessage.textContent = "Please complete all expense fields.";
        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        feedbackMessage.textContent = "Enter an expense amount greater than zero.";
        return;
    }

    if (monthlyBudget <= 0) {
        feedbackMessage.textContent = "Please set your monthly budget first.";
        return;
    }

    // Store expense in an array
    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    // Update webpage
    expenseForm.reset();

    displayExpenses();
    updateDashboard();
    displayCategories();
});

// 10. Initial dashboard display
updateDashboard();
displayExpenses();
displayCategories();

