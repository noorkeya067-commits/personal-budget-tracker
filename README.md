# SpendWise Dashboard

## Project Overview

SpendWise is a personal finance dashboard designed to help users visualize their monthly budget, expenses, savings, and spending categories.

This project focuses on building a clean, modern, and responsive dashboard using HTML5 and CSS3.

## Features

### 1. Dashboard Layout
- Sidebar navigation menu.
- Dashboard header with welcome message.
- Financial summary section.
- Six expense category cards.

### 2. Financial Summary
The dashboard displays:
- Monthly Budget: KSh 80,000
- Total Expenses: KSh 52,500
- Remaining Balance: KSh 27,500

### 3. Expense Categories
The dashboard includes six categories:
- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

### 4. CSS Grid and Flexbox
- CSS Grid controls the overall dashboard layout and expense card arrangement.
- Flexbox organizes the sidebar, navigation, header, summary cards, and category card contents.

### 5. Theme and Styling
CSS custom properties defined in `:root` manage the application's colors:
- Brand color
- Accent color
- Background and surface colors
- Primary and secondary text colors

### 6. Responsive Design
A media query adapts the dashboard into a single-column layout on screens narrower than 768px.

### 7. Micro-interactions
Expense cards include hover and keyboard-focus animations using CSS transforms and box shadows. Animations last 200ms.

### 8. Dark Theme
The dashboard supports the user's operating system color preference through `prefers-color-scheme: dark`.

## Technologies Used
- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Custom Properties
- Media Queries

## Project Files

```text
personal-budget-tracker/
│
├── index.html
├── style.css
└── README.md
```

## How to Run
1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

## Project Purpose

The purpose of this project is to demonstrate modern CSS layout techniques and responsive dashboard design.

**Note:** This is a static dashboard. JavaScript functionality is not included in this week's requirements.