let text = document.getElementById('text')
let navigation = document.getElementById('navigation')


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';


});

