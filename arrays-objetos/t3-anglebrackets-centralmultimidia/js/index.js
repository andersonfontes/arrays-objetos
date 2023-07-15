var footer = document.getElementById('menu');
footer.style.display = 'none';

setTimeout(function() {
  footer.style.display = 'block';
//   footer.style.transition = 'ease-in-out 0.6s';
//   footer.style.perspective = '(100px)';
}, 3100);

const tagA = document.querySelector('.toqueTagA');
const somToque = new Audio('../audio/mixkit-modern-technology-select-3124.wav');

tagA.forEach(aTag => {
    aTag.addEventListener('click', function () {
        somToque.currentTime = 0.7;
        somToque.play();
    });
});