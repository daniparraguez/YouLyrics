$(document).ready(function(){

$('#buscar').click(function() {

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

    $('#lyrics').append(`<h2>${artistVal}/${songVal}</h2><h5 id='letra'>${letra}</h5>`);
    $('#search').hide()
    $('#btn').append('<button type="button" class="btn btn-default btn">Search again!</button>')
    $('.btn').click(function() {
      $('#search').show()


    })
})

.fail(function() {
  console.log("error");
})

});

});