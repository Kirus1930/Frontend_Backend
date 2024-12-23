let name_you = prompt('Как вас зовут?')
let age = prompt('Сколько тебе лет?')

const adult = age >= 18

if(age%10>=5 || !(10<age<20))
    alert(`Здравствуйте! Вас зовут ${name_you}. Вам ${age} лет`)
else
    alert(`Здравствуйте! Вас зовут ${name_you}. Вам ${age} года`)

console.log(`Здравствуйте! Ваше имя: ${name_you}. Ваш возраст: ${age}`)

if(adult)
    alert(`Вы уже летний совершенно`)
else
    alert(`Вы несовершеннолетний`)