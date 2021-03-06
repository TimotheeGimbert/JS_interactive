// Fonctionnalité 1
let footer = document.getElementsByTagName('footer')[0];
let nbClicks = 0;
footer.addEventListener('click', function() {
    nbClicks += 1;
    console.log('clique ' + nbClicks);
});

// Fonctionnalité 2
let navHidden = document.getElementById('navbarHeader');
let navButton = document.querySelector('header button');
navButton.addEventListener('click', function() {
    navHidden.classList.toggle('collapse');
});

// Fonctionnalité 3
let card1 = document.getElementsByClassName('card')[0];
let card1button2 = card1.getElementsByTagName('button')[1];
card1button2.addEventListener('click', function() {
    card1.style.color = 'red';
});

// Fonctionnalité 4
let card2 = document.getElementsByClassName('card')[1];
let button2 = card2.getElementsByTagName('button')[1];
button2.addEventListener('click', function() {
    if (card2.style.color === 'green') {
        card2.style.color = 'black';
    }
    else {
        card2.style.color = 'green';
    }
});

// Fonctionnalité 5
let head = document.getElementsByTagName('head')[0];
let navbar = document.getElementsByClassName('navbar')[0];
let bootstrapCDN = head.getElementsByTagName('link')[0].href;
navbar.addEventListener('dblclick', function() {
  if (head.getElementsByTagName('link')[0].href !== bootstrapCDN) {
    head.getElementsByTagName('link')[0].href = bootstrapCDN;
    console.log(bootstrapCDN);
  }
  else {
    head.getElementsByTagName('link')[0].href = '';
    console.log(bootstrapCDN);
  }
});

// Fonctionnalité 6
let cardsList = document.getElementsByClassName('card');
for (let i = 0; i < cardsList.length; i++) { 
  let card = cardsList[i];
  let buttonEvent = card.getElementsByTagName('button')[0];
  buttonEvent.addEventListener('mouseover', function() {
    if (card.getElementsByTagName('img')[0].style.width !== '20%') {
      card.getElementsByTagName('img')[0].style.width = '20%';
    }
    else {
      card.getElementsByTagName('img')[0].style.width = '100%';
    }
    card.getElementsByClassName('card-text')[0].classList.toggle('collapse');
  });
};