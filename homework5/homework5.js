// хотел задать значения на confirm на кнопках но так и не разобрался как это сделать
let answer = prompt("Ты хочешь пива??");

if (answer  === 'да') {
    alert("пошли выпьем!!!");

} else if(answer === 'нет'){
    alert("жаль, в другой раз");
}

//

confirm("Ты хочешь пива??") ? alert("пошли выпьем!!!") : alert("жаль, в другой раз");

//
let userAge = prompt('введите свой возраст?');
 
if (userAge >= 18) {
    if (userAge >= 30 ) {
        alert('Добро пожаловать!');
    } else {
        alert('дарова атец ;)');
    }
} else {
    alert("повзрослей малышь) ");
}

// 

let userAge;
(userAge = prompt('введите свой возраст?')) >= 18 
    ? (userAge >= 30 ? alert('Добро пожаловать!') : alert('дарова атец ;)'))
    : alert("повзрослей малышь) ");

// 

let isTea = confirm('чай или кофе?'),
    hasSugar;

if (isTea) {
    hasSugar = confirm('с сахаром?');
    if (hasSugar) {
        alert('ваш чай с сахаром');
    } else {
        alert('ваш чай без сахара');
    }
} else {
    hasSugar = confirm('с сахаром?');
    if (hasSugar) {
        alert('ваш кофе с сахаром');
    } else {
        alert('ваш кофе без сахара');
    }
}

// 

confirm('чай или кофе?') 
    ? (confirm('с сахаром?') ? alert('ваш чай с сахаром') : alert('ваш чай без сахара'))
    : (confirm('с сахаром?') ? alert('ваш кофе с сахаром') : alert('ваш кофе без сахара'));