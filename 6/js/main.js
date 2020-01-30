let start = document.getElementById('start');
console.log(start);

let budgetValue = document.getElementsByClassName('budget-value');
console.log(budgetValue);
let dayBudgetValue = document.getElementsByClassName('daybudget-value');
console.log(dayBudgetValue);
let levelValue = document.getElementsByClassName('level-value');
console.log(levelValue);
let expensesValue = document.getElementsByClassName('expenses-value');
console.log(expensesValue);
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value');
console.log(optionalExpensesValue);
let incomeValue = document.getElementsByClassName('income-value');
console.log(incomeValue);
let monthsavingsValue = document.getElementsByClassName('monthsavings-value');
console.log(monthsavingsValue);
let yearsavingsValue = document.getElementsByClassName('yearsavings-value');
console.log(yearsavingsValue);

let expensesItems = document.getElementsByClassName('expenses-item');
console.log(expensesItems);

let button1 = document.getElementsByTagName('button')[1];
console.log(button1);
let button2 = document.getElementsByTagName('button')[2];
console.log(button2);

let optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalExpensesItems);

let incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');