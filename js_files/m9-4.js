let num1 = prompt('Введите первое число:')
let num2 = prompt('Введите второе число:')
let oper = prompt('Введите оператор (+, -, *, /):')
let result
if(oper == '+')
    result = num1 + num2
else if(oper == '-')
    result = num1 - num2
else if(oper == '*')
    result = num1 * num2
else if(oper == '/')
    if (num2 == 0)
        result = 'Ошибка: Деление на 0!'
    else
        result = num1 / num2
else
    result = 'Ошибка: Неверный оператор!'
alert(`Ответ: ${result}`)