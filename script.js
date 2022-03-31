let userAge = +prompt("Сколько тебе лет");
// let userAge = '15';


if (typeof userAge === 'number') {
    if (userAge < 100) {
        if (userAge === 0 || userAge > 4 && userAge <= 20 ) {
            console.log(`Тебе дружок ${userAge} лет`); 
        } else if (userAge % 10 == 1) {
            console.log(`Тебе дружок ${userAge} год`);   
        } else if (userAge % 10 >= 2 && userAge % 10 <= 4) {
            console.log(`Тебе дружок ${userAge} года`);
        } else {
            console.log(`Тебе дружок ${userAge} лет`);
        }
    } else if (userAge > 100) {
        if (userAge % 100 == 1) {
            console.log(`Тебе дружок ${userAge} год`);   
        } else if (userAge % 100 >= 2 && userAge % 100 <= 4) {
            console.log(`Тебе дружок ${userAge} года`);
        } else if (userAge % 100 >=5 || userAge % 100 <=20) {
            console.log(`Тебе дружок ${userAge} лет`);
        }
    }
    
} else {
    console.log("Введите цифру");
}


