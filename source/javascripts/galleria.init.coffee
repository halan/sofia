flickr = new Galleria.Flickr()

$ ->
  flickrURL = "http://api.flickr.com/services/rest/?method="
  api_key = "62b554836855b2a348a4b9433baa0d24"
  user_id = "99837685@N00"
  $.getJSON flickrURL + "flickr.photosets.getList&user_id=" + user_id + "&api_key=" + api_key + "&format=json&jsoncallback=?", (data) ->

    $("#galleria").galleria
      flickr: "set:#{$(data.photosets.photoset).get(-1).id}"
      flickrOptions:
        description: true

    $(data.photosets.photoset).each ->
      img_src = "http://farm" + @farm + ".staticflickr.com/" + @server + "/" + @primary + "_" + @secret + "_t.jpg"
      album   = $("<div class='album'><h2>" + @title._content + "</h2><img src=" + img_src + "></div>").appendTo "#albums"
      album.click =>
        $('.galleria-toolbar .center.button').click()
        flickr.set @id, (data) ->
          Galleria.get(0).load data
        


