let userAge = +prompt("Сколько тебе лет");
// let userAge = '15';


if (typeof userAge === 'number') {
    if (userAge === 0 || userAge > 4 && userAge <= 20 ) {
        alert(`Тебе дружок ${userAge} лет`); 
    } else if (userAge > 20) {
        if((userAge % 10) > 4 && (userAge % 10) <=10 ) {
            alert(`Тебе дружок ${userAge} лет`);
        } else if ((userAge % 10) === 1) {
            alert(`Тебе дружок ${userAge} год`);
        } else if ((userAge % 10) >= 2 && (userAge % 10) <= 4) {
            alert(`Тебе дружок ${userAge} года`);
        }
    } else if (userAge >= 2 && userAge <= 4) {
        alert(`Тебе дружок ${userAge} года`);
    } else {
        alert(`Тебе дружок ${userAge} год`);
    }
} else {
    alert(`Введите число`);
}