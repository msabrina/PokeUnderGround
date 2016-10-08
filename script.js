console.log('I work');
//make array of all pokemons so I can loop and randomize.
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
var pokeBalls = 9;
var pokeCounter = 0;
var pokeBallInHand = true;

$(document).ready(function () {
  randomOnLoad();

// make pokemon show up when box they are in is clicked.
var $findPokemon = $('.pokemon');
function pokemonVisibility(event) {
  if (pokeBallInHand) {
    pokeBalls--;
    console.log('show pokemon');
    $(this).css({'opacity': '1'});
    pokeBallInHand = false;

    // if the div you clicked on has src (! empty)
    // get src img and append it to your container
  } else {
    console.log('You dont have a pokeball stupid');
  }
}

$findPokemon.click(pokemonVisibility);
// option a. decrease pokeball

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

  var $pokeStore = $('.pokeStore');
  console.log($pokeStore);
  $($pokeStore).append(pokeBalls);

  function getPoke(event) {
    console.log("You got another PokeBall!!")
    if (pokeBallInHand) {
      console.log("You already got a PokeBall in your hand");
    } else if (pokeBalls > 0) {
      pokeBallInHand = true;
    } else {
      alert('No PokeBalls left! You lose!!')
    }
  };
  $('.pokeStore').click(getPoke);

});
//create function when mouse clicks on poke ball, cursor turns into pb and picks up 3 balls
//append pokeBalls to pokeCounter
//create function that releases a ball from cursor when box is clicked.
//Once the clicks have been made cursor turns normal and you have to go get more balls


  //console.log('poke balls reloaded!');
