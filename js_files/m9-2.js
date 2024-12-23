function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandomInt(1, 11)
console.log(`Загаданное число: ${num}`)
let enter = prompt('Загадано число от 1 до 10. Угадайте число:')

if(enter == num)
    alert(`Поздравляем! Вы угадали число!`)
else
    if(enter > 5)
        alert(`Вы не угадали. Ваше число больше 5`)
    else if(enter < 5)
        alert(`Вы не угадали. Ваше число меньше 5`)
    else
        alert(`Вы не угадали`)