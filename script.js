footer = document.getElementsByTagName('footer')[0];

let nbClicks = 0;
footer.addEventListener('click', function() {
    nbClicks += 1;
    console.log('clique ' + nbClicks);
});