let value;

if (confirm("Ты хочешь пива??")) {
    value = 'Is True';;
} else{
    value = 'Is False';;
}

const value2 = confirm("Ты хочешь пива??")
 ? 'Is True' 
 : 'Is False';

console.log(value);
console.log(value2);

//

let userAge = prompt('введите свой возраст?');
let value10 = (userAge >= 18);
let value20 = (userAge >= 30 );
let value30 = (userAge < 18);

if (value10) {
    if (value20 ) {
        value20 = 'Добро пожаловать!';
    } else {
        value10 = 'дарова атец ;)';
    }
} else ((userAge <18) === value30); {
    value30 = "повзрослей малышь)";
}

const userAge = prompt('введите свой возраст?') 
? value20('Добро пожаловать!') 
: value("повзрослей малышь)");

// 


