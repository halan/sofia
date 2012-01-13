$(function()
{
    var flickrURL = 'http://api.flickr.com/services/rest/?method=',
        api_key   = '62b554836855b2a348a4b9433baa0d24',
        user_id   = '99837685@N00';
    $.getJSON(flickrURL+"flickr.photosets.getList&user_id="+user_id+"&api_key="+api_key+"&format=json&jsoncallback=?",
      function(data){
        $(data.photosets.photoset).each(function()
        {
          img_src = 'http://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.primary+'_'+this.secret+'_t.jpg';
          $("<div class='album'><h2>"+this.title._content+"</h2><img src="+img_src+"></div>").appendTo('#albums');
        });     
      });

    // Load the classic theme
	Galleria.loadTheme('/javascripts/galleria.sofia.js');

	// Initialize Galleria
  $('#galleria').galleria(
  {
    flickr: 'set:72157603286612966',
    flickrOptions:
    {
      description: true
    }
  });


})

