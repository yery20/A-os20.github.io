let text = document.getElementById('text')
let navigation = document.getElementById('navigation')
let mano1 = document.getElementById('mano1')
let mano2 = document.getElementById('mano2')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    mano2.style.top = value * -1.5 + 'px';
    mano2.style.left = value * 1.5 + 'px';
    mano1.style.top = value * -1.5 + 'px';
    mano1.style.right = value * 1.5 + 'px';

});






