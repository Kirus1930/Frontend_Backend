let name_you = prompt('Как вас зовут?')
let age = prompt('Сколько тебе лет?')

const adult = age >= 18

console.log(`Здравствуйте! Ваше имя: ${name_you}. Ваш возраст: ${age}`)

if(adult)
    alert(`Вы уже летний совершенно`)
else
    alert(`Вы несовершеннолетний`)