$(document).ready(function(){

$('#buscar').click(showing)

function showing() {
  getLyrics();
  getImages();
}

function getLyrics() {

  const artistVal = $('#searchArtist').val();
  const songVal = $('#searchSong').val();
  console.log(artistVal);
  console.log(songVal);

$.ajax({
  url: `https://api.lyrics.ovh/v1/${artistVal}/${songVal}`,
  type: 'GET',
  dataType: 'json',
})
.done(function(response) {
console.log(response.lyrics);
const letra = response.lyrics;

    $('#toappend').append(`<div id="cancionBuscada"><h2>${artistVal}/${songVal}</h2><p class='letra'>${letra}</p></div>`);
    $('#search').hide()
    $('#busqueda').append('<button type="button" class="btn btn-default boton">Search again!</button>')
    $('.boton').click(function() {
      $('#search').show()
      $('#cancionBuscada').remove()
      $('.boton').remove();
      $('#toappend').append('<p id="lyrics"></p>')
    })
})

.fail(function() {
  console.log("error");
})

};

function getImages() {
}
});