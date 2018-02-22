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
      $('#gif').remove()
      $('#elementos').append('<div class="row" id="elementos"></div>')
    })
})

.fail(function() {
  console.log("error");
})
};

function getImages() {

const artistVal = $('#searchArtist').val();
  console.log(artistVal);

$.ajax({
      url: "http://api.giphy.com/v1/gifs/search",
      type: "GET",
      datatype: "json",
      data : {
        q : artistVal,
        api_key : "dc6zaTOxFJmzC"
      },
    })

.done(function(response) {
const firstResult = response.data[0];
const firstGif =response.data[0].images.downsized_large.url;
console.log(response.data[0]);

console.log(response.data[0].images.downsized_large.url)

$('#elementos').append(`<div><img id="gif" src = ${firstGif}/>`)



    })


.fail(function() {
  console.log("error");
})

};

});

