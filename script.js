'use strict'
let userAge = +prompt("Сколько тебе лет");
// let userAge = '15';


if (!isFinite(userAge) || userAge == '' || userAge == null) {
    alert(`Введите номер`);
} else if (userAge == 0 || userAge % 100 >=5 && userAge % 100 <= 20 ) {
        alert(`Вам ${userAge} лет`); 
    } else if (userAge % 10 >= 2 && userAge % 10 <= 4 ) {
        alert(`Вам ${userAge} года`);
    } else if (userAge % 10 === 1) {
        alert(`Вам ${userAge} год`);
    } else {
        alert(`Вам ${userAge} лет`);
    
};