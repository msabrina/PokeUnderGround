console.log('I work');

var srcArray = [
        'img/fishy.png',
        'img/Eevee.png',
        'img/Caterpie.png',
        'img/Bulbasaur.png',
        'img/gastly.png',
        'img/Golduck.png',
        'img/krabby.png',
        'img/lapras.png',
        'img/Lickilicky.png',
        'img/Oddish.png',
        'img/Spearow.png',
        'img/squirtle.png',
        'img/Zubat.png'
         ];
var idArray = ['fishy', 'eevee', 'caterpie'];

$(document).ready(function () {
  randomOnLoad();


var $findPokemon = $('.pokemon');
function pokemonVisibility(event) {
  console.log('show pokemon');
  $(this).css({'opacity': '1'});
}

$findPokemon.click(pokemonVisibility);

function randomOnLoad() {
var allBoxes = $('.pokemon');
  for (var i = 0; i < srcArray.length; i++) {
    var thisBox = allBoxes.eq(Math.floor(Math.random() * allBoxes.length));
  while (thisBox.attr('src') != '') {
      var thisBox = allBoxes.eq(Math.floor(Math.random() * allBoxes.length));
    }
    //thisBox.attr('id', idArray[i]);
    thisBox.attr('src', srcArray[i]);
    console.log(thisBox);
  }
}

event.preventDefault();
});


function drag(e) {
    var pokeBalls =
    e.dataTransfer.setData("text", ev.target.id);
}

//create function when mouse clicks on poke ball, cursor turns into pb and picks up 3 balls
//create function that releases a ball from cursor when box is clicked.
//Once the clicks have been made cursor turns normal and you have to go get some more
