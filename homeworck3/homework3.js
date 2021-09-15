"use strict"
const USERNAME = prompt('Имя');
const USERAGE = prompt(25);
console.log(USERNAME != '' && (USERAGE) >= 18 );//первое задание

const USERROLE = prompt('роль пользователя');
const USEROCCUPATION = prompt('роль деятельности пользователя');
console.log(USERROLE === 'Admin'  && USEROCCUPATION === 'CEO');//второе задание

console.log(USERNAME != '' ? USEROCCUPATION : USERROLE );//третье задание

console.log((USERNAME != '' && (USERAGE) >=  18 ) || USERROLE === 'Admin');//четвертое задание

console.log(USERROLE != 'Admin'  && USERNAME != '' ? USERAGE : false)