"use strict"
let login = prompt('логин', '');

const TRUE_LOGIN = 'Admin';
const TRUE_PASSWORD = '123';

const isTrueLogin = login === TRUE_LOGIN;

let pasword = prompt('пароль', ''); 
let isTruePassword = pasword === TRUE_PASSWORD;

if (isTrueLogin) {
    console.log('заходите');
}else if (isTruePassword) {
    console.log('добро пожаловать');
}else {
while (!isTrueLogin) {
    pasword = prompt('введите пароль');

    if (pasword === null) 
        break;
        isTruePassword = pasword === TRUE_PASSWORD;
}
    if (isTruePassword) {
        console.log('пароль верный');
    } else {
        console.log('пароль не верный')
    }
}