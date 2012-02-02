Galleria.requires 1.25, "This version of Classic theme requires Galleria 1.2.5 or later"
(($) ->
  Galleria.addTheme
    name: "sofia"
    author: "Halan Pinheiro"
    defaults:
      transition: "slide"
      thumbCrop: "height"
      fullscreenCrop: false
      thumbnails: true
      carouselSpeed: 3000
      _toggleInfo: false

    init: (options) ->
      @exitFullscreen = ->

      @enterFullscreen()

      #SOCIAL BUTTONS
      social_buttons = $("<div class=\"button-set right\"><span class=\"twitter\"></span><span class=\"facebook\"></span></div>")
      $('.twitter', social_buttons).sharrre
        share:
          twitter: true
        template: '<a class="button icon">t</a>'
        url: 'http://halan.github.com/sofia'
        enableHover: false
        text: 'O mundo de sofia! #mundodesofia'
        click: (api, options)->
          api.simulateClick()
          api.openPopup 'twitter'
      $('.facebook', social_buttons).sharrre
        share:
          facebook: true
        template: '<a class="button icon">f</a>'
        url: 'http://halan.github.com/sofia'
        enableHover: false
        click: (api, options)->
          api.simulateClick()
          api.openPopup 'facebook'
      '''
      $('.googleplus', social_buttons).sharrre
        share:
          googlePlus: true
        template: '<a class="button icon">g</a>'
        url: 'http://halan.github.com/sofia'
        urlCurl: ""
        enableCounter: false
        enableHover: false
        click: (api, options)->
          api.simulateClick()
          api.openPopup 'googlePlus'
      '''


      @addElement "toolbar"
      @append container: [ "toolbar"]
      toolbar = @$("toolbar")
      toolbar.append("<a class=\"center button icon\">:</a>")
        #.append("<span class=\"album-title\">1 mês</span>")
        .append social_buttons
        
      @$("image-nav-right").addClass("icon").text ">"
      @$("image-nav-left").addClass("icon").text "<"
      @$("thumb-nav-right").addClass("icon").text ">"
      @$("thumb-nav-left").addClass("icon").text "<"

      super_overlay = $('#content-overlay')
      main_button = $(".center.button", toolbar).click ->
        super_overlay.fadeToggle()
        $(this).toggleClass "pressed"
        $albums = $("#albums", super_overlay)
        $albums.imagesLoaded ->
          $albums.masonry
            columnWidth: 106
            isFitWidth: true

      @addElement "info-link", "info-close"
      @append info: [ "info-link", "info-close" ]
      info = @$("info-link,info-close,info-text")
      touch = Galleria.TOUCH
      click = (if touch then "touchstart" else "click")
      @$("loader,counter").show().css "opacity", 0.8
      unless touch
        @addIdleState @get("image-nav-left"),
          left: -50

        @addIdleState @get("image-nav-right"),
          right: -50

        @addIdleState @get("counter"),
          opacity: 0
      if options._toggleInfo is true
        info.bind click, ->
          info.toggle()
      else
        info.show()
        @$("info-link, info-close").hide()
      @attachKeyboard escape: ->
        $(".center.button", toolbar).click()

      #@bind "idle_enter", ->
      #  if super_overlay.css("display") is "none"
      #    toolbar.animate
      #      bottom: -30
      #    , 200
      #    @$("thumbnails-container").animate
      #      bottom: -100
      #    , 200

      #@bind "idle_exit", ->
      #  toolbar.animate
      #    bottom: 0
      #  , 200
      #  @$("thumbnails-container").animate
      #    bottom: 30
      #  , 200

      @bind "thumbnail", (e) ->
        unless touch
          $(e.thumbTarget).css("opacity", 0.3).parent().hover (->
            $(this).not(".active").children().stop().fadeTo 100, 1
          ), ->
            $(this).not(".active").children().stop().fadeTo 400, 0.3

          $(e.thumbTarget).css "opacity", 1  if e.index is @getIndex()
        else
          $(e.thumbTarget).css "opacity", (if @getIndex() then 1 else 0.3)

      @bind "loadstart", (e) ->
        #@$('thumbnails-container').animate bottom: -100

        @$("loader").show().fadeTo 200, 0.4  unless e.cached
        $(e.thumbTarget).css("opacity", 1).parent().siblings().children().css "opacity", 0.3

      @bind "loadfinish", (e) ->
        $galleria = $ '#galleria'
        photoset  = $galleria.data 'photoset'
        if photoset and not $galleria.data 'lock-history'
          $galleria.removeData 'lock-history'
          window.location.hash = "#/set/#{photoset}/#{e.index}"

        @$("loader").fadeOut 200
) jQuery
