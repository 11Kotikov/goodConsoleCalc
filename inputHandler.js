// Функция для обработки ввода пользователя
function handleInput(input, callback) {
    const expression = input.split(' ');
    const num1 = parseFloat(expression[0]);
    const operator = expression[1];
    const num2 = parseFloat(expression[2]);
  
    callback(num1, operator, num2);
  }
  
  module.exports = handleInput;
  