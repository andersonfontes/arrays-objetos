const tecla = document.querySelectorAll('h2');
const sons = new Audio('../audio/keypad press1.mp3');

tecla.forEach(tec => {
    tec.addEventListener('click', function () {
        sons.currentTime = 0.7;
        sons.play();
    })
}) 