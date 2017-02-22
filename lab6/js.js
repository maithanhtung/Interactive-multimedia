function myfunction() {
  var tags = document.getElementById("tags").value;
  console.log(tags);
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: tags,
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#gallery" );
        if ( i === 7 ) {
          return false;
        }
      });
    });
};