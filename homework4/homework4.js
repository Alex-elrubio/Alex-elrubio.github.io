let number1 = prompt('firstOperand');
let operator = prompt('operator')
let number2 = prompt('secondOperand');

let array = [
    'first operand',
    'second operand',
    'operator'
  ];
  
  let operands = [];
  
  let operations = [
    '+', '-', '*', '/', '**'
  ];
  
  array.sort(() => .5 - Math.random());
  
  let result, operator;
  for (let i = 0; i < array.length; i++) {
    result = prompt(array[i]);
    
    if (array[i] === 'operator') {
      if (operations.indexOf(result) !== -1) {
        operator = result;
        continue;
      }
      alert('Введенное значение оператора не поддерживается.');
      break;
    } else {
      result = Number(result);
      if (!isNaN(result) && typeof result === 'number') {
        operands.push(result);
        continue;
      }
      
      alert('Введенный операнд не валидный.');
      break;
    }
  }
  
  if (operator && 0 in operands && 1 in operands) {
    console.log( eval( operands[0] + '' + operator + '' + operands[1]) );
  }