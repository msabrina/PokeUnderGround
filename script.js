console.log('I work');

$(document).ready(function () {


var $findPokemon = $('.pokemon');
function pokemonVisibility () {
  console.log('show pokemon');

  $findPokemon.css({'opacity': '1'});
}


//$findPokemon.click(pokemonVisibility);
// }

$findPokemon.click(pokemonVisibility);

//$('#pikachu').click();

});
