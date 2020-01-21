let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    while (isNaN(money) || money == '' || typeof (money) === null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD format', '');
}
start();

let appDate = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let q1 = prompt('Введите обязательную статью расходов в етом месяце?', '');
        let q2 = prompt('Во сколько обойдется?', '');
        if (typeof (q1) === 'string' && typeof (q1) != null && typeof (q2) != null && q1 != '' && q2 != '' && q1.length < 50) {
            appDate.expenses[q1] = q2;
        } else {
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appDate.moneyPerDay = (appDate.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appDate.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appDate.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appDate.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

function checkSavings() {
    if (appDate.savings === true) {
        let save = +prompt('Какова сумма накоплений?');
        let percent = prompt('Под какой процент?');
        appDate.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + (appDate.monthIncome).toFixed());
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let q3 = prompt('Статья необязательных расходов?');
        appDate.optionalExpenses[i] = q3;
    }
}
chooseOptExpenses()

console.log(appDate);