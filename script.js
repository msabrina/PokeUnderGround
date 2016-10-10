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
        'img/Zubat.png',
        'img/growlithe',
        'img/krabby',
        'img/rattata'
         ];
// var idArray = ['fishy', 'eevee', 'caterpie'];
var pokeBalls = 9;
var pokeCounter = 0;
var pokeBallInHand = true;



$(document).ready(function() {
  randomOnLoad();

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


setInterval(pokeStore(), 1000);

function pokeStore() {
  var pokeOn = $('.pokeStore')
  if (pokeOn.display == 'visible') {
      pokeOn.css('hidden');
  } else {
  }
}

// make pokemon show up when box they are in is clicked.
var $findPokemon = $('.pokemon');
var src = $('src');
function pokemonVisibility(event) {
  // debugger
  if (pokeBallInHand) {
    pokeBalls--;
    console.log('show pokemon');
    $(this).css({'opacity': '1'});
    pokeBallInHand = false;
  } else {
    console.log('You dont have a pokeball stupid');
  }
  if (this.attributes.src.nodeValue !== "") {
    alert('You found a Pokemon!! Yes!')
    console.log('poke');
  } else console.log('no poke');
}

$findPokemon.click(pokemonVisibility);

 // if the div you clicked on has src (! empty)
    // get src img and append it to your container

  var $pokeStore = $('.pokeStore');
  console.log($pokeStore);
  $($pokeStore).append(pokeBalls);

  function getPoke(event) {
    console.log("You got another PokeBall!!")
    if (pokeBallInHand) {
      alert('You already got a PokeBall in your hand');
    } else if (pokeBalls > 0) {
      pokeBallInHand = true;
    } else {
      alert('No PokeBalls left! You lose!!')
    }
  };

$('.pokeStore').click(getPoke);

$('#reload').click(function() {
    window.location.reload();
})


// var $data = window.location.search.substring(1);
// var firstArr = $data.split('&');
// var tempArr = [];

// for (i = 0; i <firstArr.length; i++) {
//   tempArr = firstArr[i].split('=');
//       }
//   tempArr.push(firstArr[i].split('='));
//    }
// }
$.post('index.html')

});
//create function when mouse clicks on poke ball, cursor turns into pb and picks up 3 balls
//append pokeBalls to pokeCounter
//create function that releases a ball from cursor when box is clicked.
//Once the clicks have been made cursor turns normal and you have to go get more balls


