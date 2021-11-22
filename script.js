let footer = document.getElementsByTagName('footer')[0];

let nbClicks = 0;
footer.addEventListener('click', function() {
    nbClicks += 1;
    console.log('clique ' + nbClicks);
});

let navHidden = document.getElementById('navbarHeader');
let navButton = document.querySelector('header button');
navButton.addEventListener('click', function() {
    navHidden.classList.toggle('collapse');
});

let card1 = document.getElementsByClassName('card')[0];
let button2 = card1.getElementsByTagName('button')[1];
button2.addEventListener('click', function() {
    card1.style.color = 'red';
});