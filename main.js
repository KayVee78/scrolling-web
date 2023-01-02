let moon = document.getElementById('moon');
let bg = document.getElementById('background');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let clouds = document.getElementById('clouds');
let rocks = document.getElementById('rocks');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    rocks.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.45 + 'px';
    bg.style.right = value * 0.5 + 'px';
    clouds.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 0.2 + 'px';
    btn.style.marginTop = value * 0.2 + 'px';
    btn.style.marginRight = value * 0.3 + 'px';
    header.style.top = value * 0.5 + 'px';
})