flickr = new Galleria.Flickr()
app = undefined
$ ->
  super_overlay = $('#content-overlay')#.fadeToggle(0)
  super_overlay.append "<br clear=\"all\"/>"


  flickrURL = "http://api.flickr.com/services/rest/?method="
  api_key = "2a2ce06c15780ebeb0b706650fc890b2"
  user_id = "75716207@N02"
  $.getJSON flickrURL + "flickr.photosets.getList&user_id=" + user_id + "&api_key=" + api_key + "&format=json&jsoncallback=?", (data) ->

    $(data.photosets.photoset).each ->
      img_src = "http://farm" + @farm + ".staticflickr.com/" + @server + "/" + @primary + "_" + @secret + "_t.jpg"
      album   = $("<div class='album'><h2>" + @title._content + "</h2><img src=" + img_src + "></div>").appendTo "#albums"
      album.click =>
        #       $('.galleria-toolbar .center.button').click()
        super_overlay.fadeToggle =>
          $.sammy().setLocation "#/set/#{@id}/0"
        
    last_photoset = $(data.photosets.photoset).get(-1)

    app = $.sammy ->

      @bind 'load-galleria', (e, data)->
        
        galleria = $('#galleria').data('galleria')
        unless $('#galleria').data('photoset') == data.id
          galleria = $("#galleria").galleria
            show: data.pic
            flickr: "set:#{data.id}"
            flickrOptions:
              description: true
          
        else unless galleria.getIndex() == parseInt data.pic
          $('#galleria').data('lock-history', true);
          galleria.show data.pic
        $('#galleria').data('photoset', data.id)
      
      @get '#/set/:id/:pic', ->
        @trigger 'load-galleria', {id: @params['id'], pic: @params['pic']}
      @get /.*/, ->
        @trigger 'load-galleria', {id: last_photoset.id, pic: 0}

    app.run "#/set/#{last_photoset.id}/0"
    


