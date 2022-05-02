let header = document.querySelector('header');
let firstWoman = document.getElementById('first-woman');
let firstMan = document.getElementById('first-man');
let secondWoman = document.getElementById('second-woman');
let escalator = document.getElementById('escalator');
let secondMan = document.getElementById('second-man');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    header.style.top = value * 0.5 + 'px';
    firstWoman.style.top = value * 0.75 + 'px';
    firstWoman.style.left = value * -0.5 + 'px';
    firstMan.style.top = value * 0.25 + 'px';
    firstMan.style.left = value * 0.5 + 'px';
    secondWoman.style.top = value * 0.25 + 'px';
    secondWoman.style.left = value * -0.5 + 'px';
    escalator.style.top = value * 0.5 + 'px';
    secondMan.style.top = value * 0.35 + 'px';
    secondMan.style.left = value * -0.25 + 'px';
});