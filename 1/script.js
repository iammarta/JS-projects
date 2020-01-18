let money = +prompt('What is your month budget?');
let time = prompt('Enter the date in YYYY-MM-DD format');
let appDate = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let q1 = +prompt('Enter a mandatory cost item  for this month?', '');
let q2 = +prompt('How much will it cost?', '');
let q3 = +prompt('Enter a mandatory cost item  for this month?', '');
let q4 = +prompt('How much will it cost?', '');

appDate.expenses[q1] = q2;
appDate.expenses[q3] = q4;

console.log(appDate);