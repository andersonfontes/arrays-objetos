const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0];
    const clock2 = document.getElementsByClassName('clock2')[0];
    const calendar = document.querySelector('#calendar');
    const nomeDia = new Array('dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.');

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();

    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;
    const second = seconds < 10 ? `0${seconds}` : seconds;
    
    clock.innerHTML = `${hour}:${minute}`;
    clock2.innerHTML = `${hour}:${minute}:${second}`;
    calendar.innerHTML = `${nomeDia[date.getDay()]}, ${dia}/${mes}/${ano}`;
}

setInterval(() => {
    getHours()
}, 1000);

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

function inicio() {
    control = setInterval(cronometro, 10);
    document.getElementById("inicio").disabled = true;
    document.getElementById("parar").disabled = false;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = false;
}

function parar() {
    clearInterval(control);
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = false;
}

function reinicio() {
    clearInterval(control);
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    Centesimas.innerHTML = ":00";
    Segundos.innerHTML = ":00";
    Minutos.innerHTML = ":00";
    Horas.innerHTML = "00";
    document.getElementById("inicio").disabled = false;
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = true;
}

function cronometro() {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0" + centesimas }
        Centesimas.innerHTML = ":" + centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos++;
        if (segundos < 10) { segundos = "0" + segundos }
        Segundos.innerHTML = ":" + segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ((centesimas == 0) && (segundos == 0)) {
        minutos++;
        if (minutos < 10) { minutos = "0" + minutos }
        Minutos.innerHTML = ":" + minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
    if ((centesimas == 0) && (segundos == 0) && (minutos == 0)) {
        horas++;
        if (horas < 10) { horas = "0" + horas }
        Horas.innerHTML = horas;
    }
}

const tagA = document.querySelectorAll('.toqueTagA');
const somToque = new Audio('../audio/mixkit-modern-technology-select-3124.wav');

tagA.forEach(aTag => {
    aTag.addEventListener('mousedown', function () {
        aTag.classList.add('toqueBtnA');
        somToque.currentTime = 0.7;
        somToque.play();
    });
});

tagA.forEach(aTag => {
    aTag.addEventListener('mouseup', function () {
        aTag.classList.remove('toqueBtnA');
    });
});

const tagLi = document.querySelectorAll('.toqueTagLi');

tagLi.forEach(liTag => {
    liTag.addEventListener('mousedown', function () {
        liTag.classList.add('toqueBtnLi');
    });
});

tagLi.forEach(liTag => {
    liTag.addEventListener('mouseup', function () {
        liTag.classList.remove('toqueBtnLi');
    });
});