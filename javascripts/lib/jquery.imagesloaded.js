/*!
 * jQuery imagesLoaded plugin v1.0.4
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */
(function(a,b){a.fn.imagesLoaded=function(a){function f(){a.call(b,c)}function g(a){--d<=0&&a.target.src!==e&&(setTimeout(f),c.unbind("load error",g))}var b=this,c=b.find("img").add(b.filter("img")),d=c.length,e="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";return d||f(),c.bind("load error",g).each(function(){if(this.complete||typeof this.complete=="undefined"){var a=this.src;this.src=e,this.src=a}}),b}})(jQuery)