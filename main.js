//переменные для удобного вызова отельных функций
const readline = require('readline');
const add = require('./operations/add');
const subtract = require('./operations/subtract');
const multiply = require('./operations/multiply');
const divide = require('./operations/divide');
const power = require('./operations/power');
const handleInput = require('./inputHandler');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Основная функция калькулятора
function calculator() {
  rl.question('Введите выражение (например, 2 + 3): ', (input) => {
    // Обработка ввода пользователя
    handleInput(input, (num1, operator, num2) => {
      let result;

      // Выбор операции в зависимости от оператора
      switch (operator) {
        case '+':
          result = add(num1, num2);
          break;
        case '-':
          result = subtract(num1, num2);
          break;
        case '*':
          result = multiply(num1, num2);
          break;
        case '/':
          result = divide(num1, num2);
          break;
        case '^':
          result = power(num1, num2);
          break;
        default:
          console.log('Неверная операция');
          rl.close();
          return;
      }

      // Вывод результата
      console.log('Результат: ' + result);
      calculator(); // Рекурсивный вызов для обработки следующего выражения
    });
  });
}

calculator(); // Запуск калькулятора
