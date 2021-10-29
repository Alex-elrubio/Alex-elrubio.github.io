"use strict"
let beer;
let message;

if (doesWantBeer) {
    message = 'пошли выпьем!!!' ;
    } else {
    message = 'жаль, в другой раз' ;
}
//
const message2 = beer ? 'пошли выпьем!!!' : 'жаль, в другой раз';
//

let userAge;
 
if (userAge > 30) { 
    ('Добро пожаловать! ');
} else if { 
        (userAge < 18 )("повзрослей малышь) ");
} else {
        ('дарова атец ;) ');
}
//
const howOld = userAge > 30 ? 
'Добро пожаловать!' : 
(userAge > 18 ? 'повзрослей малышь' : 'Добро пожаловать!');
//

let isTea;
let withShugar;

if (isTea && withShugar) {
    isTea = 'чай с сахаром';
}else if (isTea){
    isTea = 'чай без сахара';
}else if (withShugar){
    isTea = 'кофе с сахаром';
}else 
    isTea = 'кофе без сахара';
}
//
const whatDoYouWant = isTea && withShugar ? 
    'чай с сахаром' :
    isTea ? 
    'чай без сахара' :
        withShugar ? 
        'кофе с сахаром' : 'кофе без сахара';
//

//