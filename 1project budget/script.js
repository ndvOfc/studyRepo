
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");




var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let a = prompt('Введите статью обязательных расходов'),
    b = prompt('Введите нужную  сумму')
switch (a) {
    case a < 2:
        prompt('Введите статью обязательных расходов')
         
        console.log('Done')
        
        break;

    default:
        break;
}

// for (let i = 0; i < 2; i++) 
// {
//     let a = prompt('Введите статью обязательных расходов'),
//         b = prompt('Введите нужную  сумму');
//     if ((typeof(a)==='string' && (typeof(a)) != null && (typeof(b)) != null && a !='' && b !='' && a.length < 50 )) {
//         console.log('Данные верны');
//         appData.expenses[a]=b;
//     } else {
//         alert('ВВЕДИТЕ ВЕРНЫЕ ДАННЫЕ');
        
        
//     }
    

    
    
// }

    
    



appData.moneyPerDay = appData.budget/30;

alert('Ваш ежедневный бюждет: '+appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Низкий уровень достатка')
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    
}







