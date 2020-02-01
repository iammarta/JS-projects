let startBTN = document.querySelector('.start');
let budgetValue = document.querySelector('.budget-value');
let dayBudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalExpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthsavingsValue = document.querySelector('.monthsavings-value');
let yearsavingsValue = document.querySelector('.yearsavings-value');
let expensesItems = document.querySelectorAll('.expenses-item');
let button1 = document.getElementsByTagName('button')[0];
let button2 = document.getElementsByTagName('button')[1];
let button3 = document.getElementsByTagName('button')[2];
let optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');
let incomeItem = document.querySelector('.choose-income'),
    countBudget = document.querySelector('.count-budget-btn'),
    expensesBTN = document.querySelector('.expenses-item-btn'),
    optionalExpensesBTN = document.querySelector('.optionalexpenses-btn'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;
button1.disabled = true;
button2.disabled = true;
button3.disabled = true;

startBTN.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD format', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == '' || typeof (money) === null) {
        money = prompt('Ваш бюджет на месяц?', '');
    }
    budgetValue.textContent = money;
    appDate.budget = money;
    appDate.timeDate = time;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
});

expensesBTN.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
        let q1 = expensesItems[i].value;
        let q2 = expensesItems[++i].value;
        if (typeof (q1) === 'string' && typeof (q1) != null && typeof (q2) != null && q1 != '' && q2 != '' && q1.length < 50) {
            appDate.expenses[q1] = q2;
            sum += +q2;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBTN.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let q3 = optionalExpensesItems[i].value;
        appDate.optionalExpenses[i] = q3;
        optionalExpensesValue.textContent += appDate.optionalExpenses[i] + '';
    }
});

countBudget.addEventListener('click', function () {
    appDate.moneyPerDay = (appDate.budget / 30).toFixed();
    dayBudgetValue.textContent = appDate.moneyPerDay;
    if (appDate.budget != undefined) {
        if (appDate.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appDate.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appDate.income = items.split(', ');
    incomeValue.textContent = appDate.income;
});

checkSavings.addEventListener('click', function () {
    if (appDate.savings == true) {
        appDate.savings = false;
    } else {
        appDate.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appDate.savings == true) {
        let sum = sumValue.value;
        let percent = percentValue.value;
        appDate.monthIncome = sum / 100 / 12 * percent;
        appDate.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appDate.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appDate.yearIncome.toFixed(1);
    }
});

yearValue.addEventListener('input', function () {
    if (appDate.savings == true) {
        let sum = sumValue.value;
        let percent = percentValue.value;
        appDate.monthIncome = sum / 100 / 12 * percent;
        appDate.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appDate.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appDate.yearIncome.toFixed(1);
    }
});

let appDate = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
