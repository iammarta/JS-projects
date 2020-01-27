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
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let q1 = prompt('Введите обязательную статью расходов в етом месяце?', '');
            let q2 = prompt('Во сколько обойдется?', '');
            if (typeof (q1) === 'string' && typeof (q1) != null && typeof (q2) != null && q1 != '' && q2 != '' && q1.length < 50) {
                appDate.expenses[q1] = q2;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appDate.moneyPerDay = (appDate.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appDate.moneyPerDay);
    },
    detectLevel: function () {
        if (appDate.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appDate.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appDate.savings === true) {
            let save = +prompt('Какова сумма накоплений?');
            let percent = prompt('Под какой процент?');
            appDate.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + (appDate.monthIncome).toFixed());
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let q3 = prompt('Статья необязательных расходов?');
            appDate.optionalExpenses[i] = q3;
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход?(перечислите через запятую)', '');
        if (typeof (items) !== 'string' && typeof (items) != null && items != '') {
            alert('Вы ввели некорректные данные или не ввели их вовсе');
        } else {
            appDate.income = items.split(', ');
            appDate.income.push(prompt('Может что-то еще?', ''));
            appDate.income.sort();
        }
        appDate.income.forEach(function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
        });
        for (let key in appDate) {
            console.log("Наша программа включает в себя данные: " + key + " - " + appDate[key]);
        }
    },
};

appDate.chooseExpenses();
appDate.detectDayBudget();
appDate.detectLevel();
appDate.checkSavings();
appDate.chooseOptExpenses();
appDate.chooseIncome();
console.log(appDate);