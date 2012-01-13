/**
 * @preserve Galleria Classic Theme 2011-08-01
 * http://galleria.aino.se
 *
 * Copyright (c) 2011, Aino
 * Licensed under the MIT license.
 */

/*global jQuery, Galleria */

Galleria.requires(1.25, 'This version of Classic theme requires Galleria 1.2.5 or later');

(function($) {

Galleria.addTheme({
    name: 'sofia',
    author: 'Halan Pinheiro',
    defaults: {
        transition: 'slide',
        thumbCrop:  'height',
        fullscreenCrop: false,
        thumbnails: true,
        carouselSpeed: 3000,

        // set this to false if you want to show the caption all the time:
        _toggleInfo: false
    },
    init: function(options) {
        this.exitFullscreen = function(){};
        this.enterFullscreen();

        this.addElement('toolbar', 'content-overlay');
        this.append({
            'container' : ['toolbar', 'content-overlay']
        });

        var toolbar       = this.$('toolbar'),
            super_overlay = this.$('content-overlay').fadeToggle(0);

        super_overlay.append($('#content-overlay').show()).append('<br clear="all"/>');
        toolbar.append('<a class="center button icon">:</a>').
                append('<span class="album-title">1 mês</span>').
                append('<div class="button-set right"><a class="button icon">t</a><a class="button icon" >g</a><a class="button icon">f</a></div>');

        this.$('image-nav-right').addClass('icon').text('>');
        this.$('image-nav-left').addClass('icon').text('<');

        this.$('thumb-nav-right').addClass('icon').text('>');
        this.$('thumb-nav-left').addClass('icon').text('<');




        $('.center.button', toolbar).click(function()
        {
          super_overlay.fadeToggle();
          $(this).toggleClass('pressed');
          var $albums = $('#albums', super_overlay);
           $albums.imagesLoaded(function()
           {
              $albums.masonry({columnWidth: 106, isFitWidth: true});
           });
        });


        // add some elements
        this.addElement('info-link','info-close');
        this.append({
            'info' : ['info-link','info-close']
        });

        // cache some stuff
        var info = this.$('info-link,info-close,info-text'),
            touch = Galleria.TOUCH,
            click = touch ? 'touchstart' : 'click';

        // show loader & counter with opacity
        this.$('loader,counter').show().css('opacity', 0.8);

        // some stuff for non-touch browsers
        if (! touch ) {
            this.addIdleState( this.get('image-nav-left'), { left:-50 });
            this.addIdleState( this.get('image-nav-right'), { right:-50 });
            this.addIdleState( this.get('counter'), { opacity:0 });
        }

        // toggle info
        if ( options._toggleInfo === true ) {
            info.bind( click, function() {
                info.toggle();
            });
        } else {
            info.show();
            this.$('info-link, info-close').hide();
        }

        // bind some stuff
        this.attachKeyboard(
        {
          escape: function()
          {
            $('.center.button', toolbar).click();
          }
        });
        
        this.bind('idle_enter', function()
        {
          if(super_overlay.css('display') == 'none')
          {
            toolbar.animate({'bottom': -30}, 200);
            this.$('thumbnails-container').animate({'bottom': -100}, 200);
          }
        });

        this.bind('idle_exit', function()
        {
          toolbar.animate({'bottom': 0}, 200);
          this.$('thumbnails-container').animate({'bottom': 30}, 200);
        });
 

        this.bind('thumbnail', function(e) {

            if (! touch ) {
                // fade thumbnails
                $(e.thumbTarget).css('opacity', 0.3).parent().hover(function() {
                    $(this).not('.active').children().stop().fadeTo(100, 1);
                }, function() {
                    $(this).not('.active').children().stop().fadeTo(400, 0.3);
                });

                if ( e.index === this.getIndex() ) {
                    $(e.thumbTarget).css('opacity',1);
                }
            } else {
                $(e.thumbTarget).css('opacity', this.getIndex() ? 1 : 0.3);
            }
        });

        this.bind('loadstart', function(e) {
            if (!e.cached) {
                this.$('loader').show().fadeTo(200, 0.4);
            }

            this.$('info').toggle( this.hasInfo() );

            $(e.thumbTarget).css('opacity',1).parent().siblings().children().css('opacity', 0.3);
        });

        this.bind('loadfinish', function(e) {
            this.$('loader').fadeOut(200);
        });
    }
});

}(jQuery));
