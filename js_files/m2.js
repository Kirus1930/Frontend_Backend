const callback = () => {
    alert("Заявление принято! Спасибо, что воспользовались моим сервисом!");
    };
const button = document.querySelector('#Final');

button.addEventListener('click', callback);