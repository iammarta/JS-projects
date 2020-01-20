let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD format', '');

let appDate = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let q1 = prompt('Введите обязательную статью расходов в етом месяце?', '');
    let q2 = prompt('Во сколько обойдется?', '');
    if (typeof (q1) === 'string' && typeof (q1) !== null && typeof (q2) !== null && q1 !== '' && q2 !== '' && q1.length < 50) {
        appDate.expenses[q1] = q2;
    } else {
        i--;
    }
}

/*
let i = 0;
while (i<2){
let q1 = prompt('Введите обязательную статью расходов в етом месяце?', '');
let q2 = prompt('Во сколько обойдется?', '');
if (typeof (q1) === 'string' && typeof (q1) !== null && typeof (q2) !== null && q1 !== '' && q2 !== '' && q1.length < 50) {
        appDate.expenses[q1] = q2;
    } else {
        i--;
    }
    i++;
}
*/
/*
let i = 0;
do {
    let q1 = prompt('Введите обязательную статью расходов в етом месяце?', '');
    let q2 = prompt('Во сколько обойдется?', '');   
    if (typeof (q1) === 'string' && typeof (q1) !== null && typeof (q2) !== null && q1 !== '' && q2 !== '' && q1.length < 50) {
        appDate.expenses[q1] = q2;
    } else {
        i--;
    }
     i++;
}
while (i<2);
*/
appDate.moneyPerDay = appDate.budget / 30;

alert('Ежедневный бюджет' + appDate.moneyPerDay);

if (appDate.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appDate.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}