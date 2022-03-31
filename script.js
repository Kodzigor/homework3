let userAge = +prompt("Сколько тебе лет");
// let userAge = '15';


if (typeof userAge === 'number') {
    if (userAge % 100 <= 20 ) {
        if (userAge === 0 || userAge >= 5 && userAge < 21) {
            alert(`тебе ${userAge} лет`);
        } else if (userAge >= 2 && userAge <= 4) {
            alert(`тебе ${userAge} года`);
        } else if (userAge == 1) {
            alert(`тебе ${userAge} год`);
        } else {
            alert(`тебе ${userAge} лет`);
        }
    } else if (userAge % 100 > 20) {
        if (userAge === 0 || userAge % 10 >= 5 && userAge % 10 < 21) {
            alert(`тебе ${userAge} лет`);
        } else if (userAge % 10 >= 2 && userAge % 10 <= 4) {
            alert(`тебе ${userAge} года`);
        } else if (userAge % 10 == 1) {
            alert(`тебе ${userAge} год`);
        } else {
            alert(`тебе ${userAge} лет`);
        }


    }
    
} else {
    console.log("Введите цифру");
}


// console.log(2 % 100);


