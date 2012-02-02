/*
 Galleria v 1.2.6 2011-12-12
 http://galleria.aino.se

 Copyright (c) 2011, Aino
 Licensed under the MIT license.
*/

(function(e){var k=this,m=k.document,G=e(m),u=e(k),H=!0,A=3E4,B=!1,x=navigator.userAgent.toLowerCase(),I=k.location.hash.replace(/#\//,""),q=function(){var a=3,b=m.createElement("div"),d=b.getElementsByTagName("i");do b.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>";while(d[0]);return a>4?a:void 0}(),v=function(){return{html:m.documentElement,body:m.body,head:m.getElementsByTagName("head")[0],title:m.title}},J=function(){var a=[];e.each("data ready thumbnail loadstart loadfinish image play pause progress fullscreen_enter fullscreen_exit idle_enter idle_exit rescale lightbox_open lightbox_close lightbox_image".split(" "),
function(b,d){a.push(d);/_/.test(d)&&a.push(d.replace(/_/g,""))});return a}(),K=function(a){var b;if(typeof a!=="object")return a;e.each(a,function(d,c){/^[a-z]+_/.test(d)&&(b="",e.each(d.split("_"),function(a,c){b+=a>0?c.substr(0,1).toUpperCase()+c.substr(1):c}),a[b]=c,delete a[d])});return a},C=function(a){return e.inArray(a,J)>-1?Galleria[a.toUpperCase()]:a},w={trunk:{},add:function(a,b,d,c){c=c||!1;this.clear(a);if(c)var e=b,b=function(){e();w.add(a,b,d)};this.trunk[a]=k.setTimeout(b,d)},clear:function(a){var b=
function(a){k.clearTimeout(this.trunk[a]);delete this.trunk[a]},d;if(a&&a in this.trunk)b.call(w,a);else if(typeof a==="undefined")for(d in this.trunk)this.trunk.hasOwnProperty(d)&&b.call(w,d)}},z=[],y=[],L=!1,t=!1,M=[],D=function(a){Galleria.theme=a;e.each(M,function(a,d){d._initialized||d._init.call(d)})},f=function(){return{array:function(a){return Array.prototype.slice.call(a,0)},create:function(a,b){var d=m.createElement(b||"div");d.className=a;return d},getScriptPath:function(a){a=a||e("script:last").attr("src");
a=a.split("/");if(a.length==1)return"";a.pop();return a.join("/")+"/"},animate:function(){var a=function(a){var b="transition WebkitTransition MozTransition OTransition".split(" "),c;if(k.opera)return!1;for(c=0;b[c];c++)if(typeof a[b[c]]!=="undefined")return b[c];return!1}((m.body||m.documentElement).style),b={MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],d={_default:[0.25,0.1,0.25,1],galleria:[0.645,0.045,0.355,1],
galleriaIn:[0.55,0.085,0.68,0.53],galleriaOut:[0.25,0.46,0.45,0.94],ease:[0.25,0,0.25,1],linear:[0.25,0.25,0.75,0.75],"ease-in":[0.42,0,1,1],"ease-out":[0,0,0.58,1],"ease-in-out":[0.42,0,0.58,1]},c=function(a,b,c){var d={},c=c||"transition";e.each("webkit moz ms o".split(" "),function(){d["-"+this+"-"+c]=b});a.css(d)},h=function(a){c(a,"none","transition");Galleria.WEBKIT&&Galleria.TOUCH&&(c(a,"translate3d(0,0,0)","transform"),a.data("revert")&&(a.css(a.data("revert")),a.data("revert",null)))},j,
i,g,l,p,n,E;return function(o,s,r){r=e.extend({duration:400,complete:function(){},stop:!1},r);o=e(o);r.duration?a?(r.stop&&(o.unbind(b),h(o)),j=!1,e.each(s,function(a,b){E=o.css(a);f.parseValue(E)!=f.parseValue(b)&&(j=!0);o.css(a,E)}),j?(i=[],g=r.easing in d?d[r.easing]:d._default,l=" "+r.duration+"ms cubic-bezier("+g.join(",")+")",k.setTimeout(function(){o.one(b,function(a){return function(){h(a);r.complete.call(a[0])}}(o));if(Galleria.WEBKIT&&Galleria.TOUCH&&(p={},n=[0,0,0],e.each(["left","top"],
function(a,b){b in s&&(n[a]=f.parseValue(s[b])-f.parseValue(o.css(b))+"px",p[b]=s[b],delete s[b])}),n[0]||n[1]))o.data("revert",p),i.push("-webkit-transform"+l),c(o,"translate3d("+n.join(",")+")","transform");e.each(s,function(a){i.push(a+l)});c(o,i.join(","));o.css(s)},1)):k.setTimeout(function(){r.complete.call(o[0])},r.duration)):o.animate(s,r):(o.css(s),r.complete.call(o[0]))}}(),removeAlpha:function(a){if(q<9&&a){var b=a.style,a=(a=a.currentStyle)&&a.filter||b.filter||"";if(/alpha/.test(a))b.filter=
a.replace(/alpha\([^)]*\)/i,"")}},forceStyles:function(a,b){a=e(a);a.attr("style")&&a.data("styles",a.attr("style")).removeAttr("style");a.css(b)},revertStyles:function(){e.each(f.array(arguments),function(a,b){b=e(b);b.removeAttr("style");b.attr("style","");b.data("styles")&&b.attr("style",b.data("styles")).data("styles",null)})},moveOut:function(a){f.forceStyles(a,{position:"absolute",left:-1E4})},moveIn:function(){f.revertStyles.apply(f,f.array(arguments))},elem:function(a){return a instanceof
e?{$:a,dom:a[0]}:{$:e(a),dom:a}},hide:function(a,b,d){var d=d||function(){},c=f.elem(a),e=c.$,a=c.dom;e.data("opacity")||e.data("opacity",e.css("opacity"));c={opacity:0};b?f.animate(a,c,{duration:b,complete:q<9&&a?function(){f.removeAlpha(a);a.style.visibility="hidden";d.call(a)}:d,stop:!0}):q<9&&a?(f.removeAlpha(a),a.style.visibility="hidden"):e.css(c)},show:function(a,b,d){var d=d||function(){},c=f.elem(a),e=c.$,a=c.dom,j={opacity:parseFloat(e.data("opacity"))||1};if(b){if(q<9)e.css("opacity",0),
a.style.visibility="visible";f.animate(a,j,{duration:b,complete:q<9&&a?function(){j.opacity==1&&f.removeAlpha(a);d.call(a)}:d,stop:!0})}else q<9&&j.opacity==1&&a?(f.removeAlpha(a),a.style.visibility="visible"):e.css(j)},optimizeTouch:function(){var a,b,d,c,f={},j=function(a){a.preventDefault();f=e.extend({},a,!0)},i=function(){this.evt=f},g=function(){this.handler.call(a,this.evt)};return function(l){e(l).bind("touchend",function(l){a=l.target;for(c=!0;a.parentNode&&a!=l.currentTarget&&c;)b=e(a).data("events"),
d=e(a).data("fakes"),b&&"click"in b?(c=!1,l.preventDefault(),e(a).click(j).click(),b.click.pop(),e.each(b.click,i),e(a).data("fakes",b.click),delete b.click):d&&(c=!1,l.preventDefault(),e.each(d,g)),a=a.parentNode})}}(),addTimer:function(){w.add.apply(w,f.array(arguments));return this},clearTimer:function(){w.clear.apply(w,f.array(arguments));return this},wait:function(a){var a=e.extend({until:function(){return!1},success:function(){},error:function(){Galleria.raise("Could not complete wait function.")},
timeout:3E3},a),b=f.timestamp(),d,c,h=function(){c=f.timestamp();d=c-b;if(a.until(d))return a.success(),!1;if(c>=b+a.timeout)return a.error(),!1;k.setTimeout(h,10)};k.setTimeout(h,10)},toggleQuality:function(a,b){if(!(q!==7&&q!==8)&&a)typeof b==="undefined"&&(b=a.style.msInterpolationMode==="nearest-neighbor"),a.style.msInterpolationMode=b?"bicubic":"nearest-neighbor"},insertStyleTag:function(a){var b=m.createElement("style");v().head.appendChild(b);b.styleSheet?b.styleSheet.cssText=a:(a=m.createTextNode(a),
b.appendChild(a))},loadScript:function(a,b){var d=!1,c=e("<script>").attr({src:a,async:!0}).get(0);c.onload=c.onreadystatechange=function(){if(!d&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"))d=!0,c.onload=c.onreadystatechange=null,typeof b==="function"&&b.call(this,this)};v().head.appendChild(c)},parseValue:function(a){return typeof a==="number"?a:typeof a==="string"?(a=a.match(/\-?\d|\./g))&&a.constructor===Array?a.join("")*1:0:0},timestamp:function(){return(new Date).getTime()},
loadCSS:function(a,b,d){var c,h=!1,j;e("link[rel=stylesheet]").each(function(){if(RegExp(a).test(this.href))return c=this,!1});typeof b==="function"&&(d=b,b=void 0);d=d||function(){};if(c)return d.call(c,c),c;j=m.styleSheets.length;e("#"+b).length?(e("#"+b).attr("href",a),j--,h=!0):(c=e("<link>").attr({rel:"stylesheet",href:a,id:b}).get(0),k.setTimeout(function(){var b=e('link[rel="stylesheet"], style');b.length?b.get(0).parentNode.insertBefore(c,b[0]):v().head.appendChild(c);q?j>=31?Galleria.raise("You have reached the browser stylesheet limit (31)",
!0):c.onreadystatechange=function(){if(!h&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"))h=!0}:/file:\/\//i.test(a)?h=!0:e.ajax({url:a,success:function(){h=!0},error:function(a){a.isRejected()&&Galleria.WEBKIT&&(h=!0)}})},10));typeof d==="function"&&f.wait({until:function(){return h&&m.styleSheets.length>j},success:function(){k.setTimeout(function(){d.call(c,c)},100)},error:function(){Galleria.raise("Theme CSS could not load",!0)},timeout:1E4});return c}}}(),F=function(){var a=
function(a,d,c,h){var j=this.getOptions("easing"),i=this.getStageWidth(),g={left:i*(a.rewind?-1:1)},l={left:0};c?(g.opacity=0,l.opacity=1):g.opacity=1;e(a.next).css(g);f.animate(a.next,l,{duration:a.speed,complete:function(a){return function(){d();a.css({left:0})}}(e(a.next).add(a.prev)),queue:!1,easing:j});if(h)a.rewind=!a.rewind;if(a.prev){g={left:0};l={left:i*(a.rewind?1:-1)};if(c)g.opacity=1,l.opacity=0;e(a.prev).css(g);f.animate(a.prev,l,{duration:a.speed,queue:!1,easing:j,complete:function(){e(this).css("opacity",
0)}})}};return{fade:function(a,d){e(a.next).css({opacity:0,left:0}).show();f.animate(a.next,{opacity:1},{duration:a.speed,complete:d});a.prev&&(e(a.prev).css("opacity",1).show(),f.animate(a.prev,{opacity:0},{duration:a.speed}))},flash:function(a,d){e(a.next).css({opacity:0,left:0});a.prev?f.animate(a.prev,{opacity:0},{duration:a.speed/2,complete:function(){f.animate(a.next,{opacity:1},{duration:a.speed,complete:d})}}):f.animate(a.next,{opacity:1},{duration:a.speed,complete:d})},pulse:function(a,d){a.prev&&
e(a.prev).hide();e(a.next).css({opacity:0,left:0}).show();f.animate(a.next,{opacity:1},{duration:a.speed,complete:d})},slide:function(b,d){a.apply(this,f.array(arguments))},fadeslide:function(b,d){a.apply(this,f.array(arguments).concat([!0]))},doorslide:function(b,d){a.apply(this,f.array(arguments).concat([!1,!0]))}}}();Galleria=function(){var a=this;this._theme=void 0;this._options={};this._playing=!1;this._playtime=5E3;this._active=null;this._queue={length:0};this._data=[];this._dom={};this._thumbnails=
[];this._layers=[];this._firstrun=this._initialized=!1;this._stageHeight=this._stageWidth=0;this._target=void 0;this._id=Math.random();e.each("container stage images image-nav image-nav-left image-nav-right info info-text info-title info-description thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right loader counter tooltip".split(" "),function(b,c){a._dom[c]=f.create("galleria-"+c)});e.each("current total".split(" "),function(b,c){a._dom[c]=f.create("galleria-"+c,"span")});
var b=this._keyboard={keys:{UP:38,DOWN:40,LEFT:37,RIGHT:39,RETURN:13,ESCAPE:27,BACKSPACE:8,SPACE:32},map:{},bound:!1,press:function(c){var d=c.keyCode||c.which;d in b.map&&typeof b.map[d]==="function"&&b.map[d].call(a,c)},attach:function(a){var c,d;for(c in a)a.hasOwnProperty(c)&&(d=c.toUpperCase(),d in b.keys?b.map[b.keys[d]]=a[c]:b.map[d]=a[c]);if(!b.bound)b.bound=!0,G.bind("keydown",b.press)},detach:function(){b.bound=!1;b.map={};G.unbind("keydown",b.press)}},d=this._controls={0:void 0,1:void 0,
active:0,swap:function(){d.active=d.active?0:1},getActive:function(){return d[d.active]},getNext:function(){return d[1-d.active]}},c=this._carousel={next:a.$("thumb-nav-right"),prev:a.$("thumb-nav-left"),width:0,current:0,max:0,hooks:[],update:function(){var b=0,d=0,f=[0];e.each(a._thumbnails,function(a,c){c.ready&&(b+=c.outerWidth||e(c.container).outerWidth(!0),f[a+1]=b,d=Math.max(d,c.outerHeight||e(c.container).outerHeight(!0)))});a.$("thumbnails").css({width:b,height:d});c.max=b;c.hooks=f;c.width=
a.$("thumbnails-list").width();c.setClasses();a.$("thumbnails-container").toggleClass("galleria-carousel",b>c.width);c.width=a.$("thumbnails-list").width()},bindControls:function(){var b;c.next.bind("click",function(d){d.preventDefault();if(a._options.carouselSteps==="auto")for(b=c.current;b<c.hooks.length;b++){if(c.hooks[b]-c.hooks[c.current]>c.width){c.set(b-2);break}}else c.set(c.current+a._options.carouselSteps)});c.prev.bind("click",function(d){d.preventDefault();if(a._options.carouselSteps===
"auto")for(b=c.current;b>=0;b--)if(c.hooks[c.current]-c.hooks[b]>c.width){c.set(b+2);break}else{if(b===0){c.set(0);break}}else c.set(c.current-a._options.carouselSteps)})},set:function(a){for(a=Math.max(a,0);c.hooks[a-1]+c.width>=c.max&&a>=0;)a--;c.current=a;c.animate()},getLast:function(a){return(a||c.current)-1},follow:function(a){if(a===0||a===c.hooks.length-2)c.set(a);else{for(var b=c.current;c.hooks[b]-c.hooks[c.current]<c.width&&b<=c.hooks.length;)b++;a-1<c.current?c.set(a-1):a+2>b&&c.set(a-
b+c.current+2)}},setClasses:function(){c.prev.toggleClass("disabled",!c.current);c.next.toggleClass("disabled",c.hooks[c.current]+c.width>=c.max)},animate:function(){c.setClasses();var b=c.hooks[c.current]*-1;isNaN(b)||f.animate(a.get("thumbnails"),{left:b},{duration:a._options.carouselSpeed,easing:a._options.easing,queue:!1})}},h=this._tooltip={initialized:!1,open:!1,init:function(){h.initialized=!0;f.insertStyleTag(".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}");
a.$("tooltip").css("opacity",0.8);f.hide(a.get("tooltip"))},move:function(b){var c=a.getMousePosition(b).x,b=a.getMousePosition(b).y,d=a.$("tooltip"),e=b,f=d.outerHeight(!0)+1,h=d.outerWidth(!0),j=f+15,h=a.$("container").width()-h-2,f=a.$("container").height()-f-2;!isNaN(c)&&!isNaN(e)&&(c+=10,e-=30,c=Math.max(0,Math.min(h,c)),e=Math.max(0,Math.min(f,e)),b<j&&(e=j),d.css({left:c,top:e}))},bind:function(b,c){if(!Galleria.TOUCH){h.initialized||h.init();var d=function(b,c){h.define(b,c);e(b).hover(function(){f.clearTimer("switch_tooltip");
a.$("container").unbind("mousemove",h.move).bind("mousemove",h.move).trigger("mousemove");h.show(b);Galleria.utils.addTimer("tooltip",function(){a.$("tooltip").stop().show().animate({opacity:1});h.open=!0},h.open?0:500)},function(){a.$("container").unbind("mousemove",h.move);f.clearTimer("tooltip");a.$("tooltip").stop().animate({opacity:0},200,function(){a.$("tooltip").hide();f.addTimer("switch_tooltip",function(){h.open=!1},1E3)})})};typeof c==="string"?d(b in a._dom?a.get(b):b,c):e.each(b,function(b,
c){d(a.get(b),c)})}},show:function(b){var b=e(b in a._dom?a.get(b):b),c=b.data("tt"),d=function(a){k.setTimeout(function(a){return function(){h.move(a)}}(a),10);b.unbind("mouseup",d)};if(c=typeof c==="function"?c():c)a.$("tooltip").html(c.replace(/\s/,"&nbsp;")),b.bind("mouseup",d)},define:function(b,c){if(typeof c!=="function")var d=c,c=function(){return d};b=e(b in a._dom?a.get(b):b).data("tt",c);h.show(b)}},j=this._fullscreen={scrolled:0,crop:void 0,transition:void 0,active:!1,keymap:a._keyboard.map,
enter:function(b){j.active=!0;f.hide(a.getActiveImage());a.$("container").addClass("fullscreen");j.scrolled=u.scrollTop();f.forceStyles(a.get("container"),{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1E4});var c={height:"100%",overflow:"hidden",margin:0,padding:0},d=a.getData(),h=a._options;f.forceStyles(v().html,c);f.forceStyles(v().body,c);j.keymap=e.extend({},a._keyboard.map);a.attachKeyboard({escape:a.exitFullscreen,right:a.next,left:a.prev});j.crop=h.imageCrop;if(h.fullscreenCrop!=
void 0)h.imageCrop=h.fullscreenCrop;if(d&&d.big&&d.image!==d.big){var c=new Galleria.Picture,i=c.isCached(d.big),g=a.getIndex(),r=a._thumbnails[g];a.trigger({type:Galleria.LOADSTART,cached:i,rewind:!1,index:g,imageTarget:a.getActiveImage(),thumbTarget:r});c.load(d.big,function(b){a._scaleImage(b,{complete:function(b){a.trigger({type:Galleria.LOADFINISH,cached:i,index:g,rewind:!1,imageTarget:b.image,thumbTarget:r});var c=a._controls.getActive().image;c&&e(c).width(b.image.width).height(b.image.height).attr("style",
e(b.image).attr("style")).attr("src",b.image.src)}})})}a.rescale(function(){f.addTimer("fullscreen_enter",function(){f.show(a.getActiveImage());typeof b==="function"&&b.call(a)},100);a.trigger(Galleria.FULLSCREEN_ENTER)});u.resize(function(){j.scale()})},scale:function(){a.rescale()},exit:function(b){j.active=!1;f.hide(a.getActiveImage());a.$("container").removeClass("fullscreen");f.revertStyles(a.get("container"),v().html,v().body);k.scrollTo(0,j.scrolled);a.detachKeyboard();a.attachKeyboard(j.keymap);
a._options.imageCrop=j.crop;var c=a.getData().big,d=a._controls.getActive().image;c&&c==d.src&&k.setTimeout(function(a){return function(){d.src=a}}(a.getData().image),1);a.rescale(function(){f.addTimer("fullscreen_exit",function(){f.show(a.getActiveImage());typeof b==="function"&&b.call(a)},50);a.trigger(Galleria.FULLSCREEN_EXIT)});u.unbind("resize",j.scale)}},i=this._idle={trunk:[],bound:!1,add:function(a,b){if(a){i.bound||i.addEvent();var a=e(a),c={},d;for(d in b)b.hasOwnProperty(d)&&(c[d]=a.css(d));
a.data("idle",{from:c,to:b,complete:!0,busy:!1});i.addTimer();i.trunk.push(a)}},remove:function(b){b=jQuery(b);e.each(i.trunk,function(c,d){d.length&&!d.not(b).length&&(a._idle.show(b),a._idle.trunk.splice(c,1))});i.trunk.length||(i.removeEvent(),f.clearTimer("idle"))},addEvent:function(){i.bound=!0;a.$("container").bind("mousemove click",i.showAll)},removeEvent:function(){i.bound=!1;a.$("container").unbind("mousemove click",i.showAll)},addTimer:function(){f.addTimer("idle",function(){a._idle.hide()},
a._options.idleTime)},hide:function(){a._options.idleMode&&(a.trigger(Galleria.IDLE_ENTER),e.each(i.trunk,function(b,c){var d=c.data("idle");if(d)c.data("idle").complete=!1,f.animate(c,d.to,{duration:a._options.idleSpeed})}))},showAll:function(){f.clearTimer("idle");e.each(a._idle.trunk,function(b,c){a._idle.show(c)})},show:function(b){var c=b.data("idle");if(!c.busy&&!c.complete)c.busy=!0,a.trigger(Galleria.IDLE_EXIT),f.clearTimer("idle"),f.animate(b,c.from,{duration:a._options.idleSpeed/2,complete:function(){e(this).data("idle").busy=
!1;e(this).data("idle").complete=!0}});i.addTimer()}},g=this._lightbox={width:0,height:0,initialized:!1,active:null,image:null,elems:{},keymap:!1,init:function(){a.trigger(Galleria.LIGHTBOX_OPEN);if(!g.initialized){g.initialized=!0;var b={},c=a._options,d="",c={overlay:"position:fixed;display:none;opacity:"+c.overlayOpacity+";filter:alpha(opacity="+c.overlayOpacity*100+");top:0;left:0;width:100%;height:100%;background:"+c.overlayBackground+";z-index:99990",box:"position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991",
shadow:"position:absolute;background:#000;width:100%;height:100%;",content:"position:absolute;background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden",info:"position:absolute;bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px",close:"position:absolute;top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999",image:"position:absolute;top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;",
prevholder:"position:absolute;width:50%;top:0;bottom:40px;cursor:pointer;",nextholder:"position:absolute;width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;",prev:"position:absolute;top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif",next:"position:absolute;top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000",
title:"float:left",counter:"float:right;margin-left:8px;"},h={};q===8&&(c.nextholder+="background:#000;filter:alpha(opacity=0);",c.prevholder+="background:#000;filter:alpha(opacity=0);");e.each(c,function(a,b){d+=".galleria-lightbox-"+a+"{"+b+"}"});f.insertStyleTag(d);e.each("overlay box content shadow title info close prevholder prev nextholder next counter image".split(" "),function(c,d){a.addElement("lightbox-"+d);b[d]=g.elems[d]=a.get("lightbox-"+d)});g.image=new Galleria.Picture;e.each({box:"shadow content close prevholder nextholder",
info:"title counter",content:"info image",prevholder:"prev",nextholder:"next"},function(a,b){var c=[];e.each(b.split(" "),function(a,b){c.push("lightbox-"+b)});h["lightbox-"+a]=c});a.append(h);e(b.image).append(g.image.container);e(v().body).append(b.overlay,b.box);f.optimizeTouch(b.box);(function(a){return a.hover(function(){e(this).css("color","#bbb")},function(){e(this).css("color","#444")})})(e(b.close).bind("click",g.hide).html("&#215;"));e.each(["Prev","Next"],function(a,c){var d=e(b[c.toLowerCase()]).html(/v/.test(c)?
"&#8249;&nbsp;":"&nbsp;&#8250;"),f=e(b[c.toLowerCase()+"holder"]);f.bind("click",function(){g["show"+c]()});q<8||Galleria.TOUCH?d.show():f.hover(function(){d.show()},function(){d.stop().fadeOut(200)})});e(b.overlay).bind("click",g.hide);if(Galleria.IPAD)a._options.lightboxTransitionSpeed=0}},rescale:function(b){var c=Math.min(u.width()-40,g.width),d=Math.min(u.height()-60,g.height),d=Math.min(c/g.width,d/g.height),c=Math.round(g.width*d)+40,d=Math.round(g.height*d)+60,c={width:c,height:d,"margin-top":Math.ceil(d/
2)*-1,"margin-left":Math.ceil(c/2)*-1};b?e(g.elems.box).css(c):e(g.elems.box).animate(c,{duration:a._options.lightboxTransitionSpeed,easing:a._options.easing,complete:function(){var b=g.image,c=a._options.lightboxFadeSpeed;a.trigger({type:Galleria.LIGHTBOX_IMAGE,imageTarget:b.image});e(b.container).show();f.show(b.image,c);f.show(g.elems.info,c)}})},hide:function(){g.image.image=null;u.unbind("resize",g.rescale);e(g.elems.box).hide();f.hide(g.elems.info);a.detachKeyboard();a.attachKeyboard(g.keymap);
g.keymap=!1;f.hide(g.elems.overlay,200,function(){e(this).hide().css("opacity",a._options.overlayOpacity);a.trigger(Galleria.LIGHTBOX_CLOSE)})},showNext:function(){g.show(a.getNext(g.active))},showPrev:function(){g.show(a.getPrev(g.active))},show:function(b){g.active=b=typeof b==="number"?b:a.getIndex();g.initialized||g.init();if(!g.keymap)g.keymap=e.extend({},a._keyboard.map),a.attachKeyboard({escape:g.hide,right:g.showNext,left:g.showPrev});u.unbind("resize",g.rescale);var c=a.getData(b),d=a.getDataLength(),
h=a.getNext(b),j,i,r;f.hide(g.elems.info);try{for(r=a._options.preload;r>0;r--)i=new Galleria.Picture,j=a.getData(h),i.preload("big"in j?j.big:j.image),h=a.getNext(h)}catch(k){}g.image.load(c.big||c.image,function(a){g.width=a.original.width;g.height=a.original.height;e(a.image).css({width:"100.5%",height:"100.5%",top:0,zIndex:99998});f.hide(a.image);g.elems.title.innerHTML=c.title||"";g.elems.counter.innerHTML=b+1+" / "+d;u.resize(g.rescale);g.rescale()});e(g.elems.overlay).show();e(g.elems.box).show()}};
return this};Galleria.prototype={constructor:Galleria,init:function(a,b){b=K(b);this._original={target:a,options:b,data:null};this._target=this._dom.target=a.nodeName?a:e(a).get(0);y.push(this);if(this._target){this._options={autoplay:!1,carousel:!0,carouselFollow:!0,carouselSpeed:400,carouselSteps:"auto",clicknext:!1,dataConfig:function(){return{}},dataSelector:"img",dataSource:this._target,debug:void 0,dummy:void 0,easing:"galleria",extend:function(){},fullscreenCrop:void 0,fullscreenDoubleTap:!0,
fullscreenTransition:void 0,height:"auto",idleMode:!0,idleTime:3E3,idleSpeed:200,imageCrop:!1,imageMargin:0,imagePan:!1,imagePanSmoothness:12,imagePosition:"50%",imageTimeout:void 0,initialTransition:void 0,keepSource:!1,layerFollow:!0,lightbox:!1,lightboxFadeSpeed:200,lightboxTransitionSpeed:200,linkSourceImages:!0,maxScaleRatio:void 0,minScaleRatio:void 0,overlayOpacity:0.85,overlayBackground:"#0b0b0b",pauseOnInteraction:!0,popupLinks:!1,preload:2,queue:!0,show:0,showInfo:!0,showCounter:!0,showImagenav:!0,
swipe:!0,thumbCrop:!0,thumbEventType:"click",thumbFit:!0,thumbMargin:0,thumbQuality:"auto",thumbnails:!0,touchTransition:void 0,transition:"fade",transitionInitial:void 0,transitionSpeed:400,useCanvas:!1,width:"auto"};this._options.initialTransition=this._options.initialTransition||this._options.transitionInitial;b&&b.debug===!1&&(H=!1);if(b&&typeof b.imageTimeout==="number")A=b.imageTimeout;if(b&&typeof b.dummy==="string")B=b.dummy;e(this._target).children().hide();typeof Galleria.theme==="object"?
this._init():M.push(this);return this}else Galleria.raise("Target not found.",!0)},_init:function(){var a=this,b=this._options;if(this._initialized)return Galleria.raise("Init failed: Gallery instance already initialized."),this;this._initialized=!0;if(!Galleria.theme)return Galleria.raise("Init failed: No theme found."),this;e.extend(!0,b,Galleria.theme.defaults,this._original.options);(function(a){"getContext"in a&&(t=t||{elem:a,context:a.getContext("2d"),cache:{},length:0})})(m.createElement("canvas"));
this.bind(Galleria.DATA,function(){Galleria.QUIRK&&Galleria.raise("Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML.");this._original.data=this._data;this.get("total").innerHTML=this.getDataLength();var c=this.$("container"),d={width:0,height:0},i=function(){return a.$("stage").height()};f.wait({until:function(){e.each(["width","height"],function(e,i){d[i]=b[i]&&typeof b[i]==="number"?b[i]:Math.max(f.parseValue(c.css(i)),f.parseValue(a.$("target").css(i)),
c[i](),a.$("target")[i]());c[i](d[i])});return i()&&d.width&&d.height>10},success:function(){Galleria.WEBKIT?k.setTimeout(function(){a._run()},1):a._run()},error:function(){i()?Galleria.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:"+d.width+"px, height: "+d.height+"px.",!0):Galleria.raise("Could not extract a stage height from the CSS. Traced height: "+i()+"px.",!0)},timeout:1E4})});this.append({"info-text":["info-title","info-description"],info:["info-text"],
"image-nav":["image-nav-right","image-nav-left"],stage:["images","loader","counter","image-nav"],"thumbnails-list":["thumbnails"],"thumbnails-container":["thumb-nav-left","thumbnails-list","thumb-nav-right"],container:["stage","thumbnails-container","info","tooltip"]});f.hide(this.$("counter").append(this.get("current"),m.createTextNode(" / "),this.get("total")));this.setCounter("&#8211;");f.hide(a.get("tooltip"));this.$("container").addClass(Galleria.TOUCH?"touch":"notouch");e.each(Array(2),function(b){var c=
new Galleria.Picture;e(c.container).css({position:"absolute",top:0,left:0}).prepend(a._layers[b]=e(f.create("galleria-layer")).css({position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:2})[0]);a.$("images").append(c.container);a._controls[b]=c});this.$("images").css({position:"relative",top:0,left:0,width:"100%",height:"100%"});this.$("thumbnails, thumbnails-list").css({overflow:"hidden",position:"relative"});this.$("image-nav-right, image-nav-left").bind("click",function(c){b.clicknext&&c.stopPropagation();
b.pauseOnInteraction&&a.pause();c=/right/.test(this.className)?"next":"prev";a[c]()});e.each(["info","counter","image-nav"],function(c,d){b["show"+d.substr(0,1).toUpperCase()+d.substr(1).replace(/-/,"")]===!1&&f.moveOut(a.get(d.toLowerCase()))});this.load();if(!b.keepSource&&!q)this._target.innerHTML="";this.get("errors")&&this.appendChild("target","errors");this.appendChild("target","container");if(b.carousel){var d=0,c=b.show;this.bind(Galleria.THUMBNAIL,function(){this.updateCarousel();++d==this.getDataLength()&&
typeof c=="number"&&c>0&&this._carousel.follow(c)})}b.swipe&&(function(b){var c=[0,0],d=[0,0],e=!1,l=0,p,n={start:"touchstart",move:"touchmove",stop:"touchend"},k=function(a){a.originalEvent.touches&&a.originalEvent.touches.length>1||(p=a.originalEvent.touches?a.originalEvent.touches[0]:a,d=[p.pageX,p.pageY],c[0]||(c=d),Math.abs(c[0]-d[0])>10&&a.preventDefault())},o=function(s){b.unbind(n.move,k);s.originalEvent.touches&&s.originalEvent.touches.length||e?e=!e:(f.timestamp()-l<1E3&&Math.abs(c[0]-d[0])>
30&&Math.abs(c[1]-d[1])<100&&(s.preventDefault(),a[c[0]>d[0]?"next":"prev"]()),c=d=[0,0])};b.bind(n.start,function(a){a.originalEvent.touches&&a.originalEvent.touches.length>1||(p=a.originalEvent.touches?a.originalEvent.touches[0]:a,l=f.timestamp(),c=d=[p.pageX,p.pageY],b.bind(n.move,k).one(n.stop,o))})}(a.$("images")),b.fullscreenDoubleTap&&this.$("stage").bind("touchstart",function(){var b,c,d,e,f,p;return function(n){p=Galleria.utils.timestamp();c=(n.originalEvent.touches?n.originalEvent.touches[0]:
n).pageX;d=(n.originalEvent.touches?n.originalEvent.touches[0]:n).pageY;p-b<500&&c-e<20&&d-f<20?(a.toggleFullscreen(),n.preventDefault(),a.$("stage").unbind("touchend",arguments.callee)):(b=p,e=c,f=d)}}()));f.optimizeTouch(this.get("container"));return this},_createThumbnails:function(){this.get("total").innerHTML=this.getDataLength();var a,b,d,c,h,j=this,i=this._options,g=function(){var a=j.$("thumbnails").find(".active");return!a.length?!1:a.find("img").attr("src")}(),l=typeof i.thumbnails==="string"?
i.thumbnails.toLowerCase():null,p=function(a){return m.defaultView&&m.defaultView.getComputedStyle?m.defaultView.getComputedStyle(d.container,null)[a]:h.css(a)},n=function(a,b,c){return function(){e(c).append(a);j.trigger({type:Galleria.THUMBNAIL,thumbTarget:a,index:b})}},q=function(a){i.pauseOnInteraction&&j.pause();var b=e(a.currentTarget).data("index");j.getIndex()!==b&&j.show(b);a.preventDefault()},o=function(a){a.scale({width:a.data.width,height:a.data.height,crop:i.thumbCrop,margin:i.thumbMargin,
canvas:i.useCanvas,complete:function(a){var b=["left","top"],c,d;e.each(["Width","Height"],function(f,h){c=h.toLowerCase();if((i.thumbCrop!==!0||i.thumbCrop===c)&&i.thumbFit)d={},d[c]=a[c],e(a.container).css(d),d={},d[b[f]]=0,e(a.image).css(d);a["outer"+h]=e(a.container)["outer"+h](!0)});f.toggleQuality(a.image,i.thumbQuality===!0||i.thumbQuality==="auto"&&a.original.width<a.width*3);j.trigger({type:Galleria.THUMBNAIL,thumbTarget:a.image,index:a.data.order})}})};this._thumbnails=[];this.$("thumbnails").empty();
for(a=0;this._data[a];a++)c=this._data[a],i.thumbnails===!0?(d=new Galleria.Picture(a),b=c.thumb||c.image,this.$("thumbnails").append(d.container),h=e(d.container),d.data={width:f.parseValue(p("width")),height:f.parseValue(p("height")),order:a},i.thumbFit&&i.thumbCrop!==!0?h.css({width:0,height:0}):h.css({width:d.data.width,height:d.data.height}),d.load(b,o),i.preload==="all"&&d.preload(c.image)):l==="empty"||l==="numbers"?(d={container:f.create("galleria-image"),image:f.create("img","span"),ready:!0},
l==="numbers"&&e(d.image).text(a+1),this.$("thumbnails").append(d.container),k.setTimeout(n(d.image,a,d.container),50+a*20)):d={container:null,image:null},e(d.container).add(i.keepSource&&i.linkSourceImages?c.original:null).data("index",a).bind(i.thumbEventType,q),g===b&&e(d.container).addClass("active"),this._thumbnails.push(d)},_run:function(){var a=this;a._createThumbnails();f.wait({until:function(){Galleria.OPERA&&a.$("stage").css("display","inline-block");a._stageWidth=a.$("stage").width();a._stageHeight=
a.$("stage").height();return a._stageWidth&&a._stageHeight>50},success:function(){z.push(a);f.show(a.get("counter"));a._options.carousel&&a._carousel.bindControls();if(a._options.autoplay){a.pause();if(typeof a._options.autoplay==="number")a._playtime=a._options.autoplay;a.trigger(Galleria.PLAY);a._playing=!0}a._firstrun?typeof a._options.show==="number"&&a.show(a._options.show):(a._firstrun=!0,a._options.clicknext&&!Galleria.TOUCH&&(e.each(a._data,function(a,d){delete d.link}),a.$("stage").css({cursor:"pointer"}).bind("click",
function(){a._options.pauseOnInteraction&&a.pause();a.next()})),Galleria.History&&Galleria.History.change(function(b){isNaN(b)?k.history.go(-1):a.show(b,void 0,!0)}),e.each(Galleria.ready.callbacks,function(){this.call(a,a._options)}),a.trigger(Galleria.READY),Galleria.theme.init.call(a,a._options),a._options.extend.call(a,a._options),/^[0-9]{1,4}$/.test(I)&&Galleria.History?a.show(I,void 0,!0):a._data[a._options.show]&&a.show(a._options.show))},error:function(){Galleria.raise("Stage width or height is too small to show the gallery. Traced measures: width:"+
a._stageWidth+"px, height: "+a._stageHeight+"px.",!0)}})},load:function(a,b,d){var c=this;this._data=[];this._thumbnails=[];this.$("thumbnails").empty();typeof b==="function"&&(d=b,b=null);a=a||this._options.dataSource;b=b||this._options.dataSelector;d=d||this._options.dataConfig;/^function Object/.test(a.constructor)&&(a=[a]);if(a.constructor===Array)return this.validate(a)?(this._data=a,this._parseData().trigger(Galleria.DATA)):Galleria.raise("Load failed: JSON Array not valid."),this;e(a).find(b).each(function(a,
b){var b=e(b),f={},g=b.parent(),l=g.attr("href"),g=g.attr("rel");if(l)f.image=f.big=l;if(g)f.big=g;c._data.push(e.extend({title:b.attr("title")||"",thumb:b.attr("src"),image:b.attr("src"),big:b.attr("src"),description:b.attr("alt")||"",link:b.attr("longdesc"),original:b.get(0)},f,d(b)))});this.getDataLength()?this.trigger(Galleria.DATA):Galleria.raise("Load failed: no data found.");return this},_parseData:function(){var a=this;e.each(this._data,function(b,d){if("thumb"in d===!1)a._data[b].thumb=d.image;
if(!1 in d)a._data[b].big=d.image});return this},splice:function(){Array.prototype.splice.apply(this._data,f.array(arguments));return this._parseData()._createThumbnails()},push:function(){Array.prototype.push.apply(this._data,f.array(arguments));return this._parseData()._createThumbnails()},_getActive:function(){return this._controls.getActive()},validate:function(){return!0},bind:function(a,b){a=C(a);this.$("container").bind(a,this.proxy(b));return this},unbind:function(a){a=C(a);this.$("container").unbind(a);
return this},trigger:function(a){a=typeof a==="object"?e.extend(a,{scope:this}):{type:C(a),scope:this};this.$("container").trigger(a);return this},addIdleState:function(a,b){this._idle.add.apply(this._idle,f.array(arguments));return this},removeIdleState:function(a){this._idle.remove.apply(this._idle,f.array(arguments));return this},enterIdleMode:function(){this._idle.hide();return this},exitIdleMode:function(){this._idle.showAll();return this},enterFullscreen:function(a){this._fullscreen.enter.apply(this,
f.array(arguments));return this},exitFullscreen:function(a){this._fullscreen.exit.apply(this,f.array(arguments));return this},toggleFullscreen:function(a){this._fullscreen[this.isFullscreen()?"exit":"enter"].apply(this,f.array(arguments));return this},bindTooltip:function(a,b){this._tooltip.bind.apply(this._tooltip,f.array(arguments));return this},defineTooltip:function(a,b){this._tooltip.define.apply(this._tooltip,f.array(arguments));return this},refreshTooltip:function(a){this._tooltip.show.apply(this._tooltip,
f.array(arguments));return this},openLightbox:function(){this._lightbox.show.apply(this._lightbox,f.array(arguments));return this},closeLightbox:function(){this._lightbox.hide.apply(this._lightbox,f.array(arguments));return this},getActiveImage:function(){return this._getActive().image||void 0},getActiveThumb:function(){return this._thumbnails[this._active].image||void 0},getMousePosition:function(a){return{x:a.pageX-this.$("container").offset().left,y:a.pageY-this.$("container").offset().top}},addPan:function(a){if(this._options.imageCrop!==
!1){var a=e(a||this.getActiveImage()),b=this,d=a.width()/2,c=a.height()/2,h=parseInt(a.css("left"),10),j=parseInt(a.css("top"),10),i=h||0,g=j||0,l=0,p=0,n=!1,k=f.timestamp(),o=0,s=0,r=function(b,c,d){if(b>0&&(s=Math.round(Math.max(b*-1,Math.min(0,c))),o!==s))if(o=s,q===8)a.parent()["scroll"+d](s*-1);else b={},b[d.toLowerCase()]=s,a.css(b)},m=function(a){if(!(f.timestamp()-k<50))n=!0,d=b.getMousePosition(a).x,c=b.getMousePosition(a).y};q===8&&(a.parent().scrollTop(g*-1).scrollLeft(i*-1),a.css({top:0,
left:0}));this.$("stage").unbind("mousemove",m).bind("mousemove",m);f.addTimer("pan",function(){n&&(l=a.width()-b._stageWidth,p=a.height()-b._stageHeight,h=d/b._stageWidth*l*-1,j=c/b._stageHeight*p*-1,i+=(h-i)/b._options.imagePanSmoothness,g+=(j-g)/b._options.imagePanSmoothness,r(p,g,"Top"),r(l,i,"Left"))},50,!0);return this}},proxy:function(a,b){if(typeof a!=="function")return function(){};b=b||this;return function(){return a.apply(b,f.array(arguments))}},removePan:function(){this.$("stage").unbind("mousemove");
f.clearTimer("pan");return this},addElement:function(a){var b=this._dom;e.each(f.array(arguments),function(a,c){b[c]=f.create("galleria-"+c)});return this},attachKeyboard:function(a){this._keyboard.attach.apply(this._keyboard,f.array(arguments));return this},detachKeyboard:function(){this._keyboard.detach.apply(this._keyboard,f.array(arguments));return this},appendChild:function(a,b){this.$(a).append(this.get(b)||b);return this},prependChild:function(a,b){this.$(a).prepend(this.get(b)||b);return this},
remove:function(a){this.$(f.array(arguments).join(",")).remove();return this},append:function(a){var b,d;for(b in a)if(a.hasOwnProperty(b))if(a[b].constructor===Array)for(d=0;a[b][d];d++)this.appendChild(b,a[b][d]);else this.appendChild(b,a[b]);return this},_scaleImage:function(a,b){if(a=a||this._controls.getActive()){var d,c=function(a){e(a.container).children(":first").css({top:Math.max(0,f.parseValue(a.image.style.top)),left:Math.max(0,f.parseValue(a.image.style.left)),width:f.parseValue(a.image.width),
height:f.parseValue(a.image.height)})},b=e.extend({width:this._stageWidth,height:this._stageHeight,crop:this._options.imageCrop,max:this._options.maxScaleRatio,min:this._options.minScaleRatio,margin:this._options.imageMargin,position:this._options.imagePosition},b);this._options.layerFollow&&this._options.imageCrop!==!0?typeof b.complete=="function"?(d=b.complete,b.complete=function(){d.call(a,a);c(a)}):b.complete=c:e(a.container).children(":first").css({top:0,left:0});a.scale(b);return this}},updateCarousel:function(){this._carousel.update();
return this},rescale:function(a,b,d){var c=this;typeof a==="function"&&(d=a,a=void 0);var e=function(){c._stageWidth=a||c.$("stage").width();c._stageHeight=b||c.$("stage").height();c._scaleImage();c._options.carousel&&c.updateCarousel();c.trigger(Galleria.RESCALE);typeof d==="function"&&d.call(c)};Galleria.WEBKIT&&!a&&!b?f.addTimer("scale",e,10):e.call(c);return this},refreshImage:function(){this._scaleImage();this._options.imagePan&&this.addPan();return this},show:function(a,b,d){if(!(a===!1||!this._options.queue&&
this._queue.stalled))if(a=Math.max(0,Math.min(parseInt(a,10),this.getDataLength()-1)),b=typeof b!=="undefined"?!!b:a<this.getIndex(),!d&&Galleria.History)Galleria.History.set(a.toString());else return this._active=a,Array.prototype.push.call(this._queue,{index:a,rewind:b}),this._queue.stalled||this._show(),this},_show:function(){var a=this,b=this._queue[0],d=this.getData(b.index);if(d){var c=this.isFullscreen()&&"big"in d?d.big:d.image,h=this._controls.getActive(),j=this._controls.getNext(),i=j.isCached(c),
g=this._thumbnails[b.index],l=function(b,c,d,i,h){return function(){a._queue.stalled=!1;f.toggleQuality(c.image,a._options.imageQuality);a._layers[a._controls.active].innerHTML="";e(d.container).css({zIndex:0,opacity:0}).show();e(c.container).css({zIndex:1}).show();a._controls.swap();a._options.imagePan&&a.addPan(c.image);(b.link||a._options.lightbox)&&e(c.image).css({cursor:"pointer"}).bind("mouseup",function(){b.link?a._options.popupLinks?k.open(b.link,"_blank"):k.location.href=b.link:a.openLightbox()});
Array.prototype.shift.call(a._queue);a._queue.length&&a._show();a._playCheck();a.trigger({type:Galleria.IMAGE,index:i.index,imageTarget:c.image,thumbTarget:h.image})}}(d,j,h,b,g);this._options.carousel&&this._options.carouselFollow&&this._carousel.follow(b.index);if(this._options.preload){var p,n,m=this.getNext(),o;try{for(n=this._options.preload;n>0;n--)p=new Galleria.Picture,o=a.getData(m),p.preload(this.isFullscreen()&&"big"in o?o.big:o.image),m=a.getNext(m)}catch(s){}}f.show(j.container);e(a._thumbnails[b.index].container).addClass("active").siblings(".active").removeClass("active");
a.trigger({type:Galleria.LOADSTART,cached:i,index:b.index,rewind:b.rewind,imageTarget:j.image,thumbTarget:g.image});j.load(c,function(c){var g=e(a._layers[1-a._controls.active]).html(d.layer||"").hide();a._scaleImage(c,{complete:function(c){"image"in h&&f.toggleQuality(h.image,!1);f.toggleQuality(c.image,!1);a._queue.stalled=!0;a.removePan();a.setInfo(b.index);a.setCounter(b.index);if(d.layer&&(g.show(),d.link||a._options.clicknext))g.css("cursor","pointer").one("click",function(){d.link?e(c.image).trigger("mouseup"):
a.$("stage").trigger("click")});a.trigger({type:Galleria.LOADFINISH,cached:i,index:b.index,rewind:b.rewind,imageTarget:c.image,thumbTarget:a._thumbnails[b.index].image});var j=a._options.transition;e.each({initial:h.image===null,touch:Galleria.TOUCH,fullscreen:a.isFullscreen()},function(b,c){if(c&&a._options[b+"Transition"]!==void 0)return j=a._options[b+"Transition"],!1});j in F===!1?l():F[j].call(a,{prev:h.container,next:c.container,rewind:b.rewind,speed:a._options.transitionSpeed||400},l)}})})}},
getNext:function(a){a=typeof a==="number"?a:this.getIndex();return a===this.getDataLength()-1?0:a+1},getPrev:function(a){a=typeof a==="number"?a:this.getIndex();return a===0?this.getDataLength()-1:a-1},next:function(){this.getDataLength()>1&&this.show(this.getNext(),!1);return this},prev:function(){this.getDataLength()>1&&this.show(this.getPrev(),!0);return this},get:function(a){return a in this._dom?this._dom[a]:null},getData:function(a){return a in this._data?this._data[a]:this._data[this._active]},
getDataLength:function(){return this._data.length},getIndex:function(){return typeof this._active==="number"?this._active:!1},getStageHeight:function(){return this._stageHeight},getStageWidth:function(){return this._stageWidth},getOptions:function(a){return typeof a==="undefined"?this._options:this._options[a]},setOptions:function(a,b){typeof a==="object"?e.extend(this._options,a):this._options[a]=b;return this},play:function(a){this._playing=!0;this._playtime=a||this._playtime;this._playCheck();
this.trigger(Galleria.PLAY);return this},pause:function(){this._playing=!1;this.trigger(Galleria.PAUSE);return this},playToggle:function(a){return this._playing?this.pause():this.play(a)},isPlaying:function(){return this._playing},isFullscreen:function(){return this._fullscreen.active},_playCheck:function(){var a=this,b=0,d=f.timestamp(),c="play"+this._id;if(this._playing){f.clearTimer(c);var e=function(){b=f.timestamp()-d;b>=a._playtime&&a._playing?(f.clearTimer(c),a.next()):a._playing&&(a.trigger({type:Galleria.PROGRESS,
percent:Math.ceil(b/a._playtime*100),seconds:Math.floor(b/1E3),milliseconds:b}),f.addTimer(c,e,20))};f.addTimer(c,e,20)}},setPlaytime:function(a){this._playtime=a;return this},setIndex:function(a){this._active=a;return this},setCounter:function(a){typeof a==="number"?a++:typeof a==="undefined"&&(a=this.getIndex()+1);this.get("current").innerHTML=a;if(q){var a=this.$("counter"),b=a.css("opacity");parseInt(b,10)===1?f.removeAlpha(a[0]):this.$("counter").css("opacity",b)}return this},setInfo:function(a){var b=
this,d=this.getData(a);e.each(["title","description"],function(a,e){var f=b.$("info-"+e);d[e]?f[d[e].length?"show":"hide"]().html(d[e]):f.empty().hide()});return this},hasInfo:function(a){var b="title description".split(" "),d;for(d=0;b[d];d++)if(this.getData(a)[b[d]])return!0;return!1},jQuery:function(a){var b=this,d=[];e.each(a.split(","),function(a,c){c=e.trim(c);b.get(c)&&d.push(c)});var c=e(b.get(d.shift()));e.each(d,function(a,d){c=c.add(b.get(d))});return c},$:function(a){return this.jQuery.apply(this,
f.array(arguments))}};e.each(J,function(a,b){var d=/_/.test(b)?b.replace(/_/g,""):b;Galleria[b.toUpperCase()]="galleria."+d});e.extend(Galleria,{IE9:q===9,IE8:q===8,IE7:q===7,IE6:q===6,IE:q,WEBKIT:/webkit/.test(x),SAFARI:/safari/.test(x),CHROME:/chrome/.test(x),QUIRK:q&&m.compatMode&&m.compatMode==="BackCompat",MAC:/mac/.test(navigator.platform.toLowerCase()),OPERA:!!k.opera,IPHONE:/iphone/.test(x),IPAD:/ipad/.test(x),ANDROID:/android/.test(x),TOUCH:"ontouchstart"in m});Galleria.addTheme=function(a){a.name||
Galleria.raise("No theme name specified");a.defaults=typeof a.defaults!=="object"?{}:K(a.defaults);var b=!1,d;typeof a.css==="string"?(e("link").each(function(c,e){d=RegExp(a.css);if(d.test(e.href))return b=!0,D(a),!1}),b||e("script").each(function(c,e){d=RegExp("galleria\\."+a.name.toLowerCase()+"\\.");d.test(e.src)&&(b=e.src.replace(/[^\/]*$/,"")+a.css,f.addTimer("css",function(){f.loadCSS(b,"galleria-theme",function(){D(a)})},1))}),b||Galleria.raise("No theme CSS loaded")):D(a);return a};Galleria.loadTheme=
function(a,b){var d=z.length,c=k.setTimeout(function(){Galleria.raise("Theme at "+a+" could not load, check theme path.",!0)},5E3);Galleria.theme=void 0;f.loadScript(a,function(){k.clearTimeout(c);if(d){var a=[];e.each(Galleria.get(),function(c,d){var f=e.extend(d._original.options,{data_source:d._data},b);d.$("container").remove();var l=new Galleria;l._id=d._id;l.init(d._original.target,f);a.push(l)});z=a}})};Galleria.get=function(a){if(y[a])return y[a];else if(typeof a!=="number")return y;else Galleria.raise("Gallery index "+
a+" not found")};Galleria.addTransition=function(a,b){F[a]=b};Galleria.utils=f;Galleria.log=function(){return"console"in k&&"log"in k.console?k.console.log:function(){k.alert(f.array(arguments).join(", "))}}();Galleria.ready=function(a){e.each(z,function(b,d){a.call(d,d._options)});Galleria.ready.callbacks.push(a)};Galleria.ready.callbacks=[];Galleria.raise=function(a,b){var d=b?"Fatal error":"Error",c=function(a){var c='<div style="padding:4px;margin:0 0 2px;background:#'+(b?"811":"222")+'";>'+(b?
"<strong>"+d+": </strong>":"")+a+"</div>";e.each(y,function(){var a=this.$("errors"),b=this.$("target");a.length||(b.css("position","relative"),a=this.addElement("errors").appendChild("target","errors").$("errors").css({color:"#fff",position:"absolute",top:0,left:0,zIndex:1E5}));a.append(c)})};if(H){if(c(a),b)throw Error(d+": "+a);}else b&&!L&&(L=!0,b=!1,c("Image gallery could not load."))};Galleria.version=1.26;Galleria.requires=function(a,b){Galleria.version<a&&Galleria.raise(b||"You need to upgrade Galleria to version "+
a+" to use one or more components.",!0)};Galleria.Picture=function(a){this.id=a||null;this.image=null;this.container=f.create("galleria-image");e(this.container).css({overflow:"hidden",position:"relative"});this.original={width:0,height:0};this.ready=!1;this.tid=null};Galleria.Picture.prototype={cache:{},show:function(){f.show(this.image)},hide:function(){f.moveOut(this.image)},clear:function(){this.image=null},isCached:function(a){return!!this.cache[a]},preload:function(a){e(new Image).load(function(a,
d){return function(){d[a]=a}}(a,this.cache)).attr("src",a)},load:function(a,b){this.tid=k.setTimeout(function(a){return function(){Galleria.raise("Image not loaded in "+Math.round(A/1E3)+" seconds: "+a)}}(a),A);this.image=new Image;var d=!1,c=e(this.container),h=e(this.image),j=function(a,b,c){return function(){var d=function(){e(this).unbind("load");a.original={height:this.height,width:this.width};a.cache[c]=c;k.clearTimeout(a.tid);typeof b=="function"&&k.setTimeout(function(){b.call(a,a)},1)};!this.width||
!this.height?k.setTimeout(function(a){return function(){a.width&&a.height?d.call(a):Galleria.raise("Could not extract width/height from image: "+a.src+". Traced measures: width:"+a.width+"px, height: "+a.height+"px.")}}(this),2):d.call(this)}}(this,b,a);c.find("img").remove();h.css("display","block").appendTo(this.container);f.hide(this.image);if(this.cache[a])return e(this.image).load(j).attr("src",a),this.container;e(this.image).load(j).error(function(){d?B?e(this).attr("src",B):Galleria.raise("Image not found: "+
a):(d=!0,k.setTimeout(function(a,b){return function(){a.attr("src",b+"?"+f.timestamp())}}(e(this),a),50))}).attr("src",a);return this.container},scale:function(a){a=e.extend({width:0,height:0,min:void 0,max:void 0,margin:0,complete:function(){},position:"center",crop:!1,canvas:!1},a);if(!this.image)return this.container;var b,d,c=this,h=e(c.container),j;f.wait({until:function(){b=a.width||h.width()||f.parseValue(h.css("width"));d=a.height||h.height()||f.parseValue(h.css("height"));return b&&d},success:function(){var i=
(b-a.margin*2)/c.original.width,g=(d-a.margin*2)/c.original.height,h={"true":Math.max(i,g),width:i,height:g,"false":Math.min(i,g)}[a.crop.toString()],i="";a.max&&(h=Math.min(a.max,h));a.min&&(h=Math.max(a.min,h));e.each(["width","height"],function(a,b){e(c.image)[b](c[b]=c.image[b]=Math.round(c.original[b]*h))});e(c.container).width(b).height(d);if(a.canvas&&t)t.elem.width=c.width,t.elem.height=c.height,i=c.image.src+":"+c.width+"x"+c.height,c.image.src=t.cache[i]||function(a){t.context.drawImage(c.image,
0,0,c.original.width*h,c.original.height*h);try{return j=t.elem.toDataURL(),t.length+=j.length,t.cache[a]=j}catch(b){return c.image.src}}(i);var k={},n={},i=function(a,b,d){var h=0;/\%/.test(a)?(a=parseInt(a,10)/100,b=c.image[b]||e(c.image)[b](),h=Math.ceil(b*-1*a+d*a)):h=f.parseValue(a);return h},m={top:{top:0},left:{left:0},right:{left:"100%"},bottom:{top:"100%"}};e.each(a.position.toLowerCase().split(" "),function(a,b){b==="center"&&(b="50%");k[a?"top":"left"]=b});e.each(k,function(a,b){m.hasOwnProperty(b)&&
e.extend(n,m[b])});k=k.top?e.extend(k,n):n;k=e.extend({top:"50%",left:"50%"},k);e(c.image).css({position:"absolute",top:i(k.top,"height",d),left:i(k.left,"width",b)});c.show();c.ready=!0;a.complete.call(c,c)},error:function(){Galleria.raise("Could not scale image: "+c.image.src)},timeout:1E3});return this}};e.extend(e.easing,{galleria:function(a,b,d,c,e){return(b/=e/2)<1?c/2*b*b*b+d:c/2*((b-=2)*b*b+2)+d},galleriaIn:function(a,b,d,c,e){return c*(b/=e)*b+d},galleriaOut:function(a,b,d,c,e){return-c*
(b/=e)*(b-2)+d}});e.fn.galleria=function(a){return this.each(function(){e(this).data("galleria",(new Galleria).init(this,a))})}})(jQuery);
/**
 * @preserve Galleria Flickr Plugin 2011-08-01
 * http://galleria.aino.se
 *
 * Copyright 2011, Aino
 * Licensed under the MIT license.
 */

/*global jQuery, Galleria, window */


Galleria.requires(1.25, 'The Flickr Plugin requires Galleria version 1.2.5 or later.');

(function($) {

// The script path
var PATH = Galleria.utils.getScriptPath();

/**

    @class
    @constructor

    @example var flickr = new Galleria.Flickr();

    @author http://aino.se

    @requires jQuery
    @requires Galleria

    @param {String} [api_key] Flickr API key to be used, defaults to the Galleria key

    @returns Instance
*/

Galleria.Flickr = function( api_key ) {

    this.api_key = api_key || '2a2ce06c15780ebeb0b706650fc890b2';

    this.options = {
        max: 30,                       // photos to return
        imageSize: 'medium',           // photo size ( thumb,small,medium,big,original )
        thumbSize: 'thumb',            // thumbnail size ( thumb,small,medium,big,original )
        sort: 'interestingness-desc',  // sort option ( date-posted-asc, date-posted-desc, date-taken-asc, date-taken-desc, interestingness-desc, interestingness-asc, relevance )
        description: false,            // set this to true to get description as caption
        complete: function(){},        // callback to be called inside the Galleria.prototype.load
        backlink: false                // set this to true if you want to pass a link back to the original image
    };
};

Galleria.Flickr.prototype = {

    // bring back the constructor reference

    constructor: Galleria.Flickr,

    /**
        Search for anything at Flickr

        @param {String} phrase The string to search for
        @param {Function} [callback] The callback to be called when the data is ready

        @returns Instance
    */

    search: function( phrase, callback ) {
        return this._find({
            text: phrase
        }, callback );
    },

    /**
        Search for anything at Flickr by tag

        @param {String} tag The tag(s) to search for
        @param {Function} [callback] The callback to be called when the data is ready

        @returns Instance
    */

    tags: function( tag, callback ) {
        return this._find({
            tags: tag
        }, callback);
    },

    /**
        Get a user's public photos

        @param {String} username The username as shown in the URL to fetch
        @param {Function} [callback] The callback to be called when the data is ready

        @returns Instance
    */

    user: function( username, callback ) {
        return this._call({
            method: 'flickr.urls.lookupUser',
            url: 'flickr.com/photos/' + username
        }, function( data ) {
            this._find({
                user_id: data.user.id,
                method: 'flickr.people.getPublicPhotos'
            }, callback);
        });
    },

    /**
        Get photos from a photoset by ID

        @param {String|Number} photoset_id The photoset id to fetch
        @param {Function} [callback] The callback to be called when the data is ready

        @returns Instance
    */

    set: function( photoset_id, callback ) {
        return this._find({
            photoset_id: photoset_id,
            method: 'flickr.photosets.getPhotos'
        }, callback);
    },

    /**
        Get photos from a gallery by ID

        @param {String|Number} gallery_id The gallery id to fetch
        @param {Function} [callback] The callback to be called when the data is ready

        @returns Instance
    */

    gallery: function( gallery_id, callback ) {
        return this._find({
            gallery_id: gallery_id,
            method: 'flickr.galleries.getPhotos'
        }, callback);
    },

    /**
        Search groups and fetch photos from the first group found
        Useful if you know the exact name of a group and want to show the groups photos.

        @param {String} group The group name to search for
        @param {Function} [callback] The callback to be called when the data is ready

        @returns Instance
    */

    groupsearch: function( group, callback ) {
        return this._call({
            text: group,
            method: 'flickr.groups.search'
        }, function( data ) {
            this.group( data.groups.group[0].nsid, callback );
        });
    },

    /**
        Get photos from a group by ID

        @param {String} group_id The group id to fetch
        @param {Function} [callback] The callback to be called when the data is ready

        @returns Instance
    */

    group: function ( group_id, callback ) {
        return this._find({
            group_id: group_id,
            method: 'flickr.groups.pools.getPhotos'
        }, callback );
    },

    /**
        Set flickr options

        @param {Object} options The options object to blend

        @returns Instance
    */

    setOptions: function( options ) {
        $.extend(this.options, options);
        return this;
    },


    // call Flickr and raise errors

    _call: function( params, callback ) {

        var url = 'http://api.flickr.com/services/rest/?';

        var scope = this;

        params = $.extend({
            format : 'json',
            jsoncallback : '?',
            api_key: this.api_key
        }, params );

        $.each(params, function( key, value ) {
            url += '&' + key + '=' + value;
        });

        $.getJSON(url, function(data) {
            if ( data.stat === 'ok' ) {
                callback.call(scope, data);
            } else {
                Galleria.raise( data.code.toString() + ' ' + data.stat + ': ' + data.message, true );
            }
        });
        return scope;
    },


    // "hidden" way of getting a big image (~1024) from flickr

    _getBig: function( photo ) {

        if ( photo.url_l ) {
            return photo.url_l;
        } else if ( parseInt( photo.width_o, 10 ) > 1280 ) {

            return 'http://farm'+photo.farm + '.static.flickr.com/'+photo.server +
                '/' + photo.id + '_' + photo.secret + '_b.jpg';
        }

        return photo.url_o || photo.url_z || photo.url_m;

    },


    // get image size by option name

    _getSize: function( photo, size ) {

        var img;

        switch(size) {

            case 'thumb':
                img = photo.url_t;
                break;

            case 'small':
                img = photo.url_s;
                break;

            case 'big':
                img = this._getBig( photo );
                break;

            case 'original':
                img = photo.url_o ? photo.url_o : this._getBig( photo );
                break;

            default:
                img = photo.url_z || photo.url_m;
                break;
        }
        return img;
    },


    // ask flickr for photos, parse the result and call the callback with the galleria-ready data array

    _find: function( params, callback ) {

        params = $.extend({
            method: 'flickr.photos.search',
            extras: 'url_t,url_m,url_o,url_s,url_l,url_z,description',
            sort: this.options.sort
        }, params );

        return this._call( params, function(data) {

            var gallery = [],
                photos = data.photos ? data.photos.photo : data.photoset.photo,
                len = Math.min( this.options.max, photos.length ),
                photo,
                i;

            for ( i=0; i<len; i++ ) {

                photo = photos[i];

                gallery.push({
                    thumb: this._getSize( photo, this.options.thumbSize ),
                    image: this._getSize( photo, this.options.imageSize ),
                    big: this._getBig( photo ),
                    title: photos[i].title,
                    description: this.options.description && photos[i].description ? photos[i].description._content : '',
                    link: this.options.backlink ? 'http://flickr.com/photos/' + photo.owner + '/' + photo.id : ''
                });
            }
            callback.call( this, gallery );
        });
    }
};


/**
    Galleria modifications
    We fake-extend the load prototype to make Flickr integration as simple as possible
*/


// save the old prototype in a local variable

var load = Galleria.prototype.load;


// fake-extend the load prototype using the flickr data

Galleria.prototype.load = function() {

    // pass if no data is provided or flickr option not found
    if ( arguments.length || typeof this._options.flickr !== 'string' ) {
        load.apply( this, Galleria.utils.array( arguments ) );
        return;
    }

    // define some local vars
    var self = this,
        args = Galleria.utils.array( arguments ),
        flickr = this._options.flickr.split(':'),
        f,
        opts = $.extend({}, self._options.flickrOptions),
        loader = typeof opts.loader !== 'undefined' ?
            opts.loader : $('<div class="loader">').css({
                width: 48,
                height: 48,
                opacity: 0.7,
                background:'#000 url(/images/loader.gif) no-repeat 50% 50%'
            });

    if ( flickr.length ) {

        // validate the method
        if ( typeof Galleria.Flickr.prototype[ flickr[0] ] !== 'function' ) {
            Galleria.raise( flickr[0] + ' method not found in Flickr plugin' );
            return load.apply( this, args );
        }

        // validate the argument
        if ( !flickr[1] ) {
            Galleria.raise( 'No flickr argument found' );
            return load.apply( this, args );
        }

        // apply the preloader
        window.setTimeout(function() {
            self.$( 'target' ).append( loader );
        },100);

        // create the instance
        f = new Galleria.Flickr();

        // apply Flickr options
        if ( typeof self._options.flickrOptions === 'object' ) {
            f.setOptions( self._options.flickrOptions );
        }

        // call the flickr method and trigger the DATA event
        f[ flickr[0] ]( flickr[1], function( data ) {

            self._data = data;
            loader.remove();
            self.trigger( Galleria.DATA );
            f.options.complete.call(f, data);

        });
    } else {

        // if flickr array not found, pass
        load.apply( this, args );
    }
};

}( jQuery ) );
/*!
 * jQuery imagesLoaded plugin v1.0.4
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */


(function($, undefined) {

  // $('#my-container').imagesLoaded(myFunction)
  // or
  // $('img').imagesLoaded(myFunction)

  // execute a callback when all images have loaded.
  // needed because .load() doesn't work on cached images

  // callback function gets image collection as argument
  //  `this` is the container

  $.fn.imagesLoaded = function( callback ) {
    var $this = this,
        $images = $this.find('img').add( $this.filter('img') ),
        len = $images.length,
        blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

    function triggerCallback() {
      callback.call( $this, $images );
    }

    function imgLoaded( event ) {
      if ( --len <= 0 && event.target.src !== blank ){
        setTimeout( triggerCallback );
        $images.unbind( 'load error', imgLoaded );
      }
    }

    if ( !len ) {
      triggerCallback();
    }

    $images.bind( 'load error',  imgLoaded ).each( function() {
      // cached images don't fire load sometimes, so we reset src.
      if (this.complete || typeof this.complete === "undefined"){
        var src = this.src;
        // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
        // data uri bypasses webkit log warning (thx doug jones)
        this.src = blank;
        this.src = src;
      }
    });

    return $this;
  };
})(jQuery);
/**
 * jQuery Masonry v2.1.0
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2011 David DeSandro
 */

(function(a,b,c){var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()};var f=["position","height"];b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[],this.reloadItems();var d=this.element[0].style;this.originalStyle={};for(var e=0,g=f.length;e<g;e++){var h=f[e];this.originalStyle[h]=d[h]||""}this.element.css({position:"relative"}),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={x:parseInt(this.element.css("padding-"+this.horizontalDirection),10),y:parseInt(this.element.css("padding-top"),10)},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var i=this;setTimeout(function(){i.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){i.resize()})},_init:function(a){this._getColumns(),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,b){for(var c=0,d=a.length;c<d;c++)this._placeBrick(a[c]);var e={};e.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var f=0,c=this.cols;while(--c){if(this.colYs[c]!==0)break;f++}e.width=(this.cols-f)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:e});var g=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",h=this.options.animationOptions,i;for(c=0,d=this.styleQueue.length;c<d;c++)i=this.styleQueue[c],i.$el[g](i.style,h);this.styleQueue=[],b&&b.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.isFluid?this.options.columnWidth(b):this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a){var c=b(a),d,e,f,g,h;d=Math.ceil(c.outerWidth(!0)/(this.columnWidth+this.options.gutterWidth)),d=Math.min(d,this.cols);if(d===1)f=this.colYs;else{e=this.cols+1-d,f=[];for(h=0;h<e;h++)g=this.colYs.slice(h,h+d),f[h]=Math.max.apply(Math,g)}var i=Math.min.apply(Math,f),j=0;for(var k=0,l=f.length;k<l;k++)if(f[k]===i){j=k;break}var m={top:i+this.offset.y};m[this.horizontalDirection]=this.columnWidth*j+this.offset.x,this.styleQueue.push({$el:c,style:m});var n=i+c.outerHeight(!0),o=this.cols+1-l;for(k=0;k<o;k++)this.colYs[j+k]=n},resize:function(){var a=this.cols;this._getColumns(),(this.isFluid||this.cols!==a)&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(0);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d=0,e=f.length;d<e;d++){var g=f[d];c[g]=this.originalStyle[g]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){--e<=0&&this.src!==f&&(setTimeout(g),d.unbind("load error",h))}function g(){a.call(b,d)}var b=this,d=b.find("img").add(b.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e||g(),d.bind("load error",h).each(function(){if(this.complete||this.complete===c){var a=this.src;this.src=f,this.src=a}});return b};var g=function(a){this.console&&console.error(a)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d)g("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(d[a])||a.charAt(0)==="_"){g("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)}})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);
//Sharrre.com - Make your sharing widget! - Version: 1.2.0 - Author: Julien Hany - License: MIT
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(4($,g,h,i){l j=\'1L\',1M={2g:\'1L\',K:{J:O,y:O,q:O,D:O,o:O,G:O,H:O},12:\'\',S:\'\',3:h.2h.13,w:h.S,1u:\'1L.2i\',A:{},18:0,1m:x,2j:x,2k:x,1N:O,1O:4(){},2l:4(){},1v:4(){},1P:4(){},8:{J:{3:\'\',19:\'2m\',T:\'2n-33\'},y:{3:\'\',P:\'1w\',1a:\'34\',E:\'\',1n:\'O\',1Q:\'O\',1R:\'\',1o:\'\',T:\'35\'},q:{3:\'\',A:\'36\',1S:\'\',W:\'\',1x:\'\',T:\'2n\'},D:{3:\'\',Q:\'37\'},o:{3:\'\',19:\'2m\'},G:{3:\'\',1a:\'1\'},H:{3:\'\',1T:\'\'}}},1y={J:"",y:"F://38.y.r/?2o={3}&1p=?",q:"F://39.3a.q.r/1/3b/A.2p?3={3}&1p=?",D:"F://3c.D.r/2.0/3d.3e?3f={3}&Q=1b&1p=?",o:\'F://3g.o.r/3h/2p/3i/m?3={3}&1p=?\',G:"",H:"F://1c.H.r/3j/A/K?3k=3l&3={3}&1p=?"},2q={J:4(b){l c=b.6.8.J;$(b.p).U(\'.8\').X(\'<n I="Y 3m"><n I="g-1z" m-19="\'+c.19+\'" m-13="\'+(c.3!==\'\'?c.3:b.6.3)+\'"></n></n>\');g.3n={T:b.6.8.J.T};l d=0;9(B 2r===\'C\'&&d==0){d=1;(4(){l a=h.1d(\'L\');a.Q=\'w/1b\';a.1q=x;a.14=\'1r://3o.2s.r/Z/1z.Z\';l s=h.1e(\'L\')[0];s.1f.1g(a,s)})()}N{2r.1z.3p()}},y:4(c){l e=c.6.8.y;$(c.p).U(\'.8\').X(\'<n I="Y y"><n I="1U-1w" m-13="\'+(e.3!==\'\'?e.3:c.6.3)+\'" m-1n="\'+e.1n+\'" m-1a="\'+e.1a+\'" m-E="\'+e.E+\'" m-3q-1Q="\'+e.1Q+\'" m-P="\'+e.P+\'" m-1R="\'+e.1R+\'" m-1o="\'+e.1o+\'" m-W="\'+e.W+\'"></n></n>\');l f=0;9(B 1h===\'C\'&&f==0){f=1;(4(d,s,a){l b,1V=d.1e(s)[0];9(d.3r(a)){1A}b=d.1d(s);b.2o=a;b.14=\'//3s.y.3t/\'+e.T+\'/3u.Z#3v=1\';1V.1f.1g(b,1V)}(h,\'L\',\'y-3w\'))}N{1h.3x.3y()}},q:4(b){l c=b.6.8.q;$(b.p).U(\'.8\').X(\'<n I="Y q"><a 13="1r://q.r/K" I="q-K-Y" m-3="\'+(c.3!==\'\'?c.3:b.6.3)+\'" m-A="\'+c.A+\'" m-w="\'+b.6.w+\'" m-W="\'+c.W+\'" m-1S="\'+c.1S+\'" m-1x="\'+c.1x+\'" m-T="\'+c.T+\'">3z</a></n>\');l d=0;9(B 1W===\'C\'&&d==0){d=1;(4(){l a=h.1d(\'L\');a.Q=\'w/1b\';a.1q=x;a.14=\'F://1B.q.r/1C.Z\';l s=h.1e(\'L\')[0];s.1f.1g(a,s)})()}N{$.3A({3:\'F://1B.q.r/1C.Z\',3B:\'L\',3C:x})}},D:4(a){l b=a.6.8.D;$(a.p).U(\'.8\').X(\'<n I="Y D"><a I="3D \'+b.Q+\'" 3E="3F 3G" 13="F://D.r/2t?3=\'+R((b.3!==\'\'?b.3:a.6.3))+\'"></a></n>\');l c=0;9(B 3H===\'C\'&&c==0){c=1;(4(){l s=h.1d(\'2u\'),1X=h.1e(\'2u\')[0];s.Q=\'w/1b\';s.1q=x;s.14=\'F://1C.D.r/8.Z\';1X.1f.1g(s,1X)})()}},o:4(a){9(a.6.8.o.19==\'3I\'){l b=\'E:1Y;\',1Z=\'z:2v;E:1Y;1o-19:3J;1s-z:2v;\',20=\'z:2w;1s-z:2w;21-3K:1D;\'}N{l b=\'E:3L;\',1Z=\'22:3M;23:0 1D;z:1t;E:3N;1s-z:1t;\',20=\'22:3O;z:1t;1s-z:1t;\'}l c=a.1m(a.6.A.o);9(B c==="C"){c=0}$(a.p).U(\'.8\').X(\'<n I="Y o"><n 1E="\'+b+\'1o:3P 3Q,3R,3S-3T;3U:3V;1F:#3W;2x:3X-2y;22:2z;z:1t;1s-z:3Y;21:0;23:0;w-3Z:0;40-24:41;">\'+\'<n 1E="\'+1Z+\'2A-1F:#2B;21-42:43;44:45;w-24:2C;1G:2D 2E #46;1G-2F:1D;">\'+c+\'</n>\'+\'<n 1E="\'+20+\'2x:2y;23:0;w-24:2C;w-47:2z;E:1Y;2A-1F:#48;1G:2D 2E #49;1G-2F:1D;1F:#2B;">\'+\'<2G 14="F://1c.o.r/4a/2G/o.4b.4c" z="10" E="10" 4d="4e" /> 4f</n></n></n>\');$(a.p).U(\'.o\').4g(\'1v\',4(){a.2H(\'o\')})},G:4(b){l c=b.6.8.G;$(b.p).U(\'.8\').X(\'<n I="Y G"><2I:25 1a="\'+c.1a+\'" 2h="\'+(c.3!==\'\'?c.3:b.6.3)+\'"></2I:25></n>\');l d=0;9(B 1H===\'C\'&&d==0){d=1;(4(){l a=h.1d(\'L\');a.Q=\'w/1b\';a.1q=x;a.14=\'F://1B.G.r/1/1C.Z\';l s=h.1e(\'L\')[0];s.1f.1g(a,s)})();s=g.4h(4(){9(B 1H!==\'C\'){1H.2J();26(s)}},4i)}N{1H.2J()}},H:4(b){l c=b.6.8.H;$(b.p).U(\'.8\').X(\'<n I="Y H"><L Q="2K/K" m-3="\'+(c.3!==\'\'?c.3:b.6.3)+\'" m-1T="\'+c.1T+\'"></L></n>\');l d=0;9(B g.2L===\'C\'&&d==0){d=1;(4(){l a=h.1d(\'L\');a.Q=\'w/1b\';a.1q=x;a.14=\'F://1B.H.r/2K.Z\';l s=h.1e(\'L\')[0];s.1f.1g(a,s)})()}N{g.2L.27()}}},2M={J:4(){},y:4(){1U=g.2N(4(){9(B 1h!==\'C\'){1h.28.29(\'2O.4j\',4(a){1i.1j([\'1k\',\'y\',\'1w\',a])});1h.28.29(\'2O.4k\',4(a){1i.1j([\'1k\',\'y\',\'4l\',a])});1h.28.29(\'4m.1n\',4(a){1i.1j([\'1k\',\'y\',\'1n\',a])});26(1U)}},2P)},q:4(){2Q=g.2N(4(){9(B 1W!==\'C\'){1W.4n.4o(\'1I\',4(a){9(a){1i.1j([\'1k\',\'q\',\'1I\'])}});26(2Q)}},2P)},D:4(){},o:4(){},G:4(){},H:4(){4 4p(){1i.1j([\'1k\',\'H\',\'K\'])}}},2R={J:4(a){g.15("1r://1z.2s.r/4q/+1/4r?4s="+a.8.J.T+"&3="+R((a.8.J.3!==\'\'?a.8.J.3:a.3)),"","16=0, 1J=0, E=2S, z=2T")},y:4(a){g.15("F://1c.y.r/4t.2i?u="+R((a.8.y.3!==\'\'?a.8.y.3:a.3))+"&t="+a.w+"","","16=0, 1J=0, E=2S, z=2T")},q:4(a){g.15("1r://q.r/4u/1I?w="+R(a.w)+"&3="+R((a.8.q.3!==\'\'?a.8.q.3:a.3))+(a.8.q.W!==\'\'?\'&W=\'+a.8.q.W:\'\'),"","16=0, 1J=0, E=2U, z=2V")},D:4(a){g.15("F://D.r/4v/4w/2t?3="+R((a.8.D.3!==\'\'?a.8.D.3:a.3))+"&S="+a.w+"&1x=x&1E=x","","16=0, 1J=0, E=2U, z=2V")},o:4(a){g.15(\'F://1c.o.r/4x?v=5&4y&4z=4A&3=\'+R((a.8.o.3!==\'\'?a.8.o.3:a.3))+\'&S=\'+a.w,\'o\',\'16=2a,E=1l,z=1l\')},G:4(a){g.15(\'F://1c.G.r/25/?3=\'+R((a.8.o.3!==\'\'?a.8.o.3:a.3)),\'G\',\'16=2a,E=1l,z=1l\')},H:4(a){g.15(\'1r://1c.H.r/4B/K?3=\'+R((a.8.o.3!==\'\'?a.8.o.3:a.3))+\'&4C=&4D=x\',\'H\',\'16=2a,E=1l,z=1l\')}};4 V(a,b){7.p=a;7.6=$.4E(x,{},1M,b);7.6.K=b.K;7.4F=1M;7.4G=j;7.27()};V.17.27=4(){l c=7;9(7.6.1u!==\'\'){1y.J=7.6.1u+\'?3={3}&Q=J\';1y.G=7.6.1u+\'?3={3}&Q=G\'}$(7.p).4H(7.6.2g);9(B $(7.p).m(\'S\')!==\'C\'){7.6.S=$(7.p).m(\'S\')}9(B $(7.p).m(\'3\')!==\'C\'){7.6.3=$(7.p).m(\'3\')}9(B $(7.p).m(\'w\')!==\'C\'){7.6.w=$(7.p).m(\'w\')}9(c.6.2k===x){$.2b(7.6.K,4(a,b){9(b===x){4I{c.2W(a)}4J(e){}}})}N{7.2c();7.6.1P(7,7.6)}$(7.p).1O(4(){9($(7).U(\'.8\').4K===0&&c.6.2j===x){c.2c()}c.6.1O(c,c.6)},4(){c.6.2l(c,c.6)});$(7.p).1v(4(){c.6.1v(c,c.6);1A O})};V.17.2c=4(){l c=7;$(7.p).X(\'<n I="8"></n>\');$.2b(c.6.K,4(a,b){9(b==x){2q[a](c);9(c.6.1N===x){2M[a]()}}})};V.17.2W=4(b){l c=7,A=0,3=1y[b].2d(\'{3}\',R(7.6.3));9(3!=\'\'){$.4L(3,4(a){9(B a.A!=="C"){A+=2e(a.A,10)}N 9(B a.2X!=="C"){A+=2e(a.2X,10)}N 9(B a[0]!=="C"){A+=2e(a[0].4M,10)}N 9(B a[0]!=="C"){}c.6.A[b]=A;c.6.18+=A;c.2Y();c.6.1P(c,c.6)})}};V.17.2Y=4(){l a=7.6.18,12=7.6.12;9(7.6.1m===x){a=7.1m(a)}9(12!==\'\'){12=12.2d(\'{18}\',a);$(7.p).1K(12)}N{$(7.p).1K(\'<n I="4N"><a I="A" 13="#">\'+a+\'</a>\'+(7.6.S!==\'\'?\'<a I="K" 13="#">\'+7.6.S+\'</a>\':\'\')+\'</n>\')}};V.17.1m=4(a){9(a>=2Z){a=(a/2Z).30(2)+"M"}N 9(a>=31){a=(a/31).30(1)+"k"}1A a};V.17.2H=4(a){2R[a](7.6);9(7.6.1N===x){l b={J:{11:\'4O\',P:\'+1\'},y:{11:\'y\',P:\'1w\'},q:{11:\'q\',P:\'1I\'},D:{11:\'D\',P:\'2f\'},o:{11:\'o\',P:\'2f\'},G:{11:\'G\',P:\'2f\'},H:{11:\'H\',P:\'K\'}};1i.1j([\'1k\',b[a].11,b[a].P])}};V.17.4P=4(){l a=$(7.p).1K();$(7.p).1K(a.2d(7.6.18,7.6.18+1))};$.4Q[j]=4(a){1A 7.2b(4(){9(!$.m(7,\'32\'+j)){$.m(7,\'32\'+j,4R V(7,a))}})}})(4S,4T,4U);',62,305,'|||url|function||options|this|buttons|if||||||||||||var|data|div|delicious|element|twitter|com|||||text|true|facebook|height|count|typeof|undefined|digg|width|http|stumbleupon|linkedin|class|googlePlus|share|script||else|false|action|type|encodeURIComponent|title|lang|find|Plugin|via|append|button|js||site|template|href|src|open|toolbar|prototype|total|size|layout|javascript|www|createElement|getElementsByTagName|parentNode|insertBefore|FB|_gaq|push|_trackSocial|550|shorterTotal|send|font|callback|async|https|line|20px|urlCurl|click|like|related|urlJson|plusone|return|platform|widgets|3px|style|color|border|STMBLPN|tweet|status|html|sharrre|defaults|enableTracking|hover|render|faces|colorscheme|hashtags|counter|fb|fjs|twttr|s1|50px|cssCount|cssShare|margin|float|padding|align|badge|clearInterval|init|Event|subscribe|no|each|loadButtons|replace|parseInt|add|className|location|php|enableHover|enableCounter|hide|medium|en|id|json|loadButton|gapi|google|submit|SCRIPT|35px|18px|display|block|none|background|fff|center|1px|solid|radius|img|openPopup|su|processWidgets|in|IN|tracking|setInterval|edge|1000|tw|popup|900|500|650|360|getSocialJson|shares|renderer|1e6|toFixed|1e3|plugin_|US|button_count|en_US|horizontal|DiggCompact|graph|cdn|api|urls|services|story|getInfo|links|feeds|v2|urlinfo|countserv|format|jsonp|googleplus|___gcfg|apis|go|show|getElementById|connect|net|all|xfbml|jssdk|XFBML|parse|Tweet|ajax|dataType|cache|DiggThisButton|rel|nofollow|external|__DBW|tall|15px|top|93px|right|26px|left|12px|Arial|Helvetica|sans|serif|cursor|pointer|666666|inline|normal|indent|vertical|baseline|bottom|5px|overflow|hidden|ccc|decoration|7EACEE|40679C|static|small|gif|alt|Delicious|Add|on|setTimeout|100|create|remove|unlike|message|events|bind|LinkedInShare|_|confirm|hl|sharer|intent|tools|diggthis|save|noui|jump|close|cws|token|isFramed|extend|_defaults|_name|addClass|try|catch|length|getJSON|total_posts|box|Google|simulateClick|fn|new|jQuery|window|document'.split('|'),0,{}))
;
// -- Sammy.js -- /sammy.js
// http://sammyjs.org
// Version: 0.7.0
// Built: 2011-07-30 16:55:53 -0700
(function(h,j){var p,g="([^/]+)",k=/:([\w\d]+)/g,l=/\?([^#]*)$/,c=function(q){return Array.prototype.slice.call(q)},d=function(q){return Object.prototype.toString.call(q)==="[object Function]"},m=function(q){return Object.prototype.toString.call(q)==="[object Array]"},i=function(q){return decodeURIComponent((q||"").replace(/\+/g," "))},b=encodeURIComponent,f=function(q){return String(q).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},n=function(q){return function(r,s){return this.route.apply(this,[q,r,s])}},a={},o=!!(j.history&&history.pushState),e=[];p=function(){var r=c(arguments),s,q;p.apps=p.apps||{};if(r.length===0||r[0]&&d(r[0])){return p.apply(p,["body"].concat(r))}else{if(typeof(q=r.shift())=="string"){s=p.apps[q]||new p.Application();s.element_selector=q;if(r.length>0){h.each(r,function(t,u){s.use(u)})}if(s.element_selector!=q){delete p.apps[q]}p.apps[s.element_selector]=s;return s}}};p.VERSION="0.7.0";p.addLogger=function(q){e.push(q)};p.log=function(){var q=c(arguments);q.unshift("["+Date()+"]");h.each(e,function(s,r){r.apply(p,q)})};if(typeof j.console!="undefined"){if(d(j.console.log.apply)){p.addLogger(function(){j.console.log.apply(j.console,arguments)})}else{p.addLogger(function(){j.console.log(arguments)})}}else{if(typeof console!="undefined"){p.addLogger(function(){console.log.apply(console,arguments)})}}h.extend(p,{makeArray:c,isFunction:d,isArray:m});p.Object=function(q){return h.extend(this,q||{})};h.extend(p.Object.prototype,{escapeHTML:f,h:f,toHash:function(){var q={};h.each(this,function(s,r){if(!d(r)){q[s]=r}});return q},toHTML:function(){var q="";h.each(this,function(s,r){if(!d(r)){q+="<strong>"+s+"</strong> "+r+"<br />"}});return q},keys:function(q){var r=[];for(var s in this){if(!d(this[s])||!q){r.push(s)}}return r},has:function(q){return this[q]&&h.trim(this[q].toString())!==""},join:function(){var r=c(arguments);var q=r.shift();return r.join(q)},log:function(){p.log.apply(p,arguments)},toString:function(q){var r=[];h.each(this,function(t,s){if(!d(s)||q){r.push('"'+t+'": '+s.toString())}});return"Sammy.Object: {"+r.join(",")+"}"}});p.DefaultLocationProxy=function(r,q){this.app=r;this.is_native=false;this.has_history=o;this._startPolling(q)};p.DefaultLocationProxy.fullPath=function(q){var r=q.toString().match(/^[^#]*(#.+)$/);var s=r?r[1]:"";return[q.pathname,q.search,s].join("")};p.DefaultLocationProxy.prototype={bind:function(){var r=this,s=this.app,q=p.DefaultLocationProxy;h(j).bind("hashchange."+this.app.eventNamespace(),function(u,t){if(r.is_native===false&&!t){r.is_native=true;j.clearInterval(q._interval)}s.trigger("location-changed")});if(o&&!s.disable_push_state){h(j).bind("popstate."+this.app.eventNamespace(),function(t){s.trigger("location-changed")});h("a").live("click.history-"+this.app.eventNamespace(),function(u){var t=q.fullPath(this);if(this.hostname==j.location.hostname&&s.lookupRoute("get",t)){u.preventDefault();r.setLocation(t);return false}})}if(!q._bindings){q._bindings=0}q._bindings++},unbind:function(){h(j).unbind("hashchange."+this.app.eventNamespace());h(j).unbind("popstate."+this.app.eventNamespace());h("a").die("click.history-"+this.app.eventNamespace());p.DefaultLocationProxy._bindings--;if(p.DefaultLocationProxy._bindings<=0){j.clearInterval(p.DefaultLocationProxy._interval)}},getLocation:function(){return p.DefaultLocationProxy.fullPath(j.location)},setLocation:function(q){if(/^([^#\/]|$)/.test(q)){if(o){q="/"+q}else{q="#!/"+q}}if(q!=this.getLocation()){if(o&&/^\//.test(q)){history.pushState({path:q},j.title,q);this.app.trigger("location-changed")}else{return(j.location=q)}}},_startPolling:function(s){var r=this;if(!p.DefaultLocationProxy._interval){if(!s){s=10}var q=function(){var t=r.getLocation();if(typeof p.DefaultLocationProxy._last_location=="undefined"||t!=p.DefaultLocationProxy._last_location){j.setTimeout(function(){h(j).trigger("hashchange",[true])},0)}p.DefaultLocationProxy._last_location=t};q();p.DefaultLocationProxy._interval=j.setInterval(q,s)}}};p.Application=function(q){var r=this;this.routes={};this.listeners=new p.Object({});this.arounds=[];this.befores=[];this.namespace=(new Date()).getTime()+"-"+parseInt(Math.random()*1000,10);this.context_prototype=function(){p.EventContext.apply(this,arguments)};this.context_prototype.prototype=new p.EventContext();if(d(q)){q.apply(this,[this])}if(!this._location_proxy){this.setLocationProxy(new p.DefaultLocationProxy(this,this.run_interval_every))}if(this.debug){this.bindToAllEvents(function(t,s){r.log(r.toString(),t.cleaned_type,s||{})})}};p.Application.prototype=h.extend({},p.Object.prototype,{ROUTE_VERBS:["get","post","put","delete"],APP_EVENTS:["run","unload","lookup-route","run-route","route-found","event-context-before","event-context-after","changed","error","check-form-submission","redirect","location-changed"],_last_route:null,_location_proxy:null,_running:false,element_selector:"body",debug:false,raise_errors:false,run_interval_every:50,disable_push_state:false,template_engine:null,toString:function(){return"Sammy.Application:"+this.element_selector},$element:function(q){return q?h(this.element_selector).find(q):h(this.element_selector)},use:function(){var q=c(arguments),s=q.shift(),r=s||"";try{q.unshift(this);if(typeof s=="string"){r="Sammy."+s;s=p[s]}s.apply(this,q)}catch(t){if(typeof s==="undefined"){this.error("Plugin Error: called use() but plugin ("+r.toString()+") is not defined",t)}else{if(!d(s)){this.error("Plugin Error: called use() but '"+r.toString()+"' is not a function",t)}else{this.error("Plugin Error",t)}}}return this},setLocationProxy:function(q){var r=this._location_proxy;this._location_proxy=q;if(this.isRunning()){if(r){r.unbind()}this._location_proxy.bind()}},route:function(u,r,w){var t=this,v=[],q,s;if(!w&&d(r)){r=u;w=r;u="any"}u=u.toLowerCase();if(r.constructor==String){k.lastIndex=0;while((s=k.exec(r))!==null){v.push(s[1])}r=new RegExp(r.replace(k,g)+"$")}if(typeof w=="string"){w=t[w]}q=function(x){var y={verb:x,path:r,callback:w,param_names:v};t.routes[x]=t.routes[x]||[];t.routes[x].push(y)};if(u==="any"){h.each(this.ROUTE_VERBS,function(y,x){q(x)})}else{q(u)}return this},get:n("get"),post:n("post"),put:n("put"),del:n("delete"),any:n("any"),mapRoutes:function(r){var q=this;h.each(r,function(s,t){q.route.apply(q,t)});return this},eventNamespace:function(){return["sammy-app",this.namespace].join("-")},bind:function(q,s,u){var t=this;if(typeof u=="undefined"){u=s}var r=function(){var x,v,w;x=arguments[0];w=arguments[1];if(w&&w.context){v=w.context;delete w.context}else{v=new t.context_prototype(t,"bind",x.type,w,x.target)}x.cleaned_type=x.type.replace(t.eventNamespace(),"");u.apply(v,[x,w])};if(!this.listeners[q]){this.listeners[q]=[]}this.listeners[q].push(r);if(this.isRunning()){this._listen(q,r)}return this},trigger:function(q,r){this.$element().trigger([q,this.eventNamespace()].join("."),[r]);return this},refresh:function(){this.last_location=null;this.trigger("location-changed");return this},before:function(q,r){if(d(q)){r=q;q={}}this.befores.push([q,r]);return this},after:function(q){return this.bind("event-context-after",q)},around:function(q){this.arounds.push(q);return this},isRunning:function(){return this._running},helpers:function(q){h.extend(this.context_prototype.prototype,q);return this},helper:function(q,r){this.context_prototype.prototype[q]=r;return this},run:function(q){if(this.isRunning()){return false}var r=this;h.each(this.listeners.toHash(),function(s,t){h.each(t,function(v,u){r._listen(s,u)})});this.trigger("run",{start_url:q});this._running=true;this.last_location=null;if(!(/\#(.+)/.test(this.getLocation()))&&typeof q!="undefined"){this.setLocation(q)}this._checkLocation();this._location_proxy.bind();this.bind("location-changed",function(){r._checkLocation()});this.bind("submit",function(t){var s=r._checkFormSubmission(h(t.target).closest("form"));return(s===false)?t.preventDefault():false});h(j).bind("beforeunload",function(){r.unload()});return this.trigger("changed")},unload:function(){if(!this.isRunning()){return false}var q=this;this.trigger("unload");this._location_proxy.unbind();this.$element().unbind("submit").removeClass(q.eventNamespace());h.each(this.listeners.toHash(),function(r,s){h.each(s,function(u,t){q._unlisten(r,t)})});this._running=false;return this},bindToAllEvents:function(r){var q=this;h.each(this.APP_EVENTS,function(s,t){q.bind(t,r)});h.each(this.listeners.keys(true),function(t,s){if(h.inArray(s,q.APP_EVENTS)==-1){q.bind(s,r)}});return this},routablePath:function(q){return q.replace(l,"")},lookupRoute:function(w,u){var v=this,t=false,s=0,q,r;if(typeof this.routes[w]!="undefined"){q=this.routes[w].length;for(;s<q;s++){r=this.routes[w][s];if(v.routablePath(u).match(r.path)){t=r;break}}}return t},runRoute:function(s,F,u,x){var t=this,D=this.lookupRoute(s,F),r,A,v,z,E,B,y,C,q;this.log("runRoute",[s,F].join(" "));this.trigger("run-route",{verb:s,path:F,params:u});if(typeof u=="undefined"){u={}}h.extend(u,this._parseQueryString(F));if(D){this.trigger("route-found",{route:D});if((C=D.path.exec(this.routablePath(F)))!==null){C.shift();h.each(C,function(G,H){if(D.param_names[G]){u[D.param_names[G]]=i(H)}else{if(!u.splat){u.splat=[]}u.splat.push(i(H))}})}r=new this.context_prototype(this,s,F,u,x);v=this.arounds.slice(0);E=this.befores.slice(0);y=[r].concat(u.splat);A=function(){var G;while(E.length>0){B=E.shift();if(t.contextMatchesOptions(r,B[0])){G=B[1].apply(r,[r]);if(G===false){return false}}}t.last_route=D;r.trigger("event-context-before",{context:r});G=D.callback.apply(r,y);r.trigger("event-context-after",{context:r});return G};h.each(v.reverse(),function(G,H){var I=A;A=function(){return H.apply(r,[I])}});try{q=A()}catch(w){this.error(["500 Error",s,F].join(" "),w)}return q}else{return this.notFound(s,F)}},contextMatchesOptions:function(t,v,r){var s=v;if(typeof s==="undefined"||s=={}){return true}if(typeof r==="undefined"){r=true}if(typeof s==="string"||d(s.test)){s={path:s}}if(s.only){return this.contextMatchesOptions(t,s.only,true)}else{if(s.except){return this.contextMatchesOptions(t,s.except,false)}}var q=true,u=true;if(s.path){if(!d(s.path.test)){s.path=new RegExp(s.path.toString()+"$")}q=s.path.test(t.path)}if(s.verb){if(typeof s.verb==="string"){u=s.verb===t.verb}else{u=s.verb.indexOf(t.verb)>-1}}return r?(u&&q):!(u&&q)},getLocation:function(){return this._location_proxy.getLocation()},setLocation:function(q){return this._location_proxy.setLocation(q)},swap:function(q){return this.$element().html(q)},templateCache:function(q,r){if(typeof r!="undefined"){return a[q]=r}else{return a[q]}},clearTemplateCache:function(){return a={}},notFound:function(s,r){var q=this.error(["404 Not Found",s,r].join(" "));return(s==="get")?q:true},error:function(r,q){if(!q){q=new Error()}q.message=[r,q.message].join(" ");this.trigger("error",{message:q.message,error:q});if(this.raise_errors){throw (q)}else{this.log(q.message,q)}},_checkLocation:function(){var q,r;q=this.getLocation();if(!this.last_location||this.last_location[0]!="get"||this.last_location[1]!=q){this.last_location=["get",q];r=this.runRoute("get",q)}return r},_getFormVerb:function(s){var r=h(s),t,q;q=r.find('input[name="_method"]');if(q.length>0){t=q.val()}if(!t){t=r[0].getAttribute("method")}if(!t||t==""){t="get"}return h.trim(t.toString().toLowerCase())},_checkFormSubmission:function(s){var q,t,v,u,r;this.trigger("check-form-submission",{form:s});q=h(s);t=q.attr("action")||"";v=this._getFormVerb(q);this.log("_checkFormSubmission",q,t,v);if(v==="get"){this.setLocation(t+"?"+this._serializeFormParams(q));r=false}else{u=h.extend({},this._parseFormParams(q));r=this.runRoute(v,t,u,s.get(0))}return(typeof r=="undefined")?false:r},_serializeFormParams:function(r){var t="",q=r.serializeArray(),s;if(q.length>0){t=this._encodeFormPair(q[0].name,q[0].value);for(s=1;s<q.length;s++){t=t+"&"+this._encodeFormPair(q[s].name,q[s].value)}}return t},_encodeFormPair:function(q,r){return b(q)+"="+b(r)},_parseFormParams:function(q){var t={},s=q.serializeArray(),r;for(r=0;r<s.length;r++){t=this._parseParamPair(t,s[r].name,s[r].value)}return t},_parseQueryString:function(t){var v={},s,r,u,q;s=t.match(l);if(s){r=s[1].split("&");for(q=0;q<r.length;q++){u=r[q].split("=");v=this._parseParamPair(v,i(u[0]),i(u[1]||""))}}return v},_parseParamPair:function(s,q,r){if(s[q]){if(m(s[q])){s[q].push(r)}else{s[q]=[s[q],r]}}else{s[q]=r}return s},_listen:function(q,r){return this.$element().bind([q,this.eventNamespace()].join("."),r)},_unlisten:function(q,r){return this.$element().unbind([q,this.eventNamespace()].join("."),r)}});p.RenderContext=function(q){this.event_context=q;this.callbacks=[];this.previous_content=null;this.content=null;this.next_engine=false;this.waiting=false};p.RenderContext.prototype=h.extend({},p.Object.prototype,{then:function(s){if(!d(s)){if(typeof s==="string"&&s in this.event_context){var r=this.event_context[s];s=function(t){return r.apply(this.event_context,[t])}}else{return this}}var q=this;if(this.waiting){this.callbacks.push(s)}else{this.wait();j.setTimeout(function(){var t=s.apply(q,[q.content,q.previous_content]);if(t!==false){q.next(t)}},0)}return this},wait:function(){this.waiting=true},next:function(q){this.waiting=false;if(typeof q!=="undefined"){this.previous_content=this.content;this.content=q}if(this.callbacks.length>0){this.then(this.callbacks.shift())}},load:function(q,r,t){var s=this;return this.then(function(){var u,v,x,w;if(d(r)){t=r;r={}}else{r=h.extend({},r)}if(t){this.then(t)}if(typeof q==="string"){x=(q.match(/\.json$/)||r.json);u=((x&&r.cache===true)||r.cache!==false);s.next_engine=s.event_context.engineFor(q);delete r.cache;delete r.json;if(r.engine){s.next_engine=r.engine;delete r.engine}if(u&&(v=this.event_context.app.templateCache(q))){return v}this.wait();h.ajax(h.extend({url:q,data:{},dataType:x?"json":null,type:"get",success:function(y){if(u){s.event_context.app.templateCache(q,y)}s.next(y)}},r));return false}else{if(q.nodeType){return q.innerHTML}if(q.selector){s.next_engine=q.attr("data-engine");if(r.clone===false){return q.remove()[0].innerHTML.toString()}else{return q[0].innerHTML.toString()}}}})},loadPartials:function(q){if(q){this.partials=this.partials||{};for(name in q){this.load(q[name]).then(function(r){this.partials[name]=r})}}return this},render:function(q,s,t,r){if(d(q)&&!s){return this.then(q)}else{return this.loadPartials(r).load(q).interpolate(s,q).then(t)}},partial:function(q,r){return this.render(q,r).swap()},send:function(){var s=this,r=c(arguments),q=r.shift();if(m(r[0])){r=r[0]}return this.then(function(t){r.push(function(u){s.next(u)});s.wait();q.apply(q,r);return false})},collect:function(u,t,q){var s=this;var r=function(){if(d(u)){t=u;u=this.content}var v=[],w=false;h.each(u,function(x,z){var y=t.apply(s,[x,z]);if(y.jquery&&y.length==1){y=y[0];w=true}v.push(y);return y});return w?v:v.join("")};return q?r():this.then(r)},renderEach:function(q,r,s,t){if(m(r)){t=s;s=r;r=null}return this.load(q).then(function(v){var u=this;if(!s){s=m(this.previous_content)?this.previous_content:[]}if(t){h.each(s,function(w,y){var z={},x=this.next_engine||q;r?(z[r]=y):(z=y);t(y,u.event_context.interpolate(v,z,x))})}else{return this.collect(s,function(w,y){var z={},x=this.next_engine||q;r?(z[r]=y):(z=y);return this.event_context.interpolate(v,z,x)},true)}})},interpolate:function(t,s,q){var r=this;return this.then(function(v,u){if(!t&&u){t=u}if(this.next_engine){s=this.next_engine;this.next_engine=false}var w=r.event_context.interpolate(v,t,s,this.partials);return q?u+w:w})},swap:function(){return this.then(function(q){this.event_context.swap(q)}).trigger("changed",{})},appendTo:function(q){return this.then(function(r){h(q).append(r)}).trigger("changed",{})},prependTo:function(q){return this.then(function(r){h(q).prepend(r)}).trigger("changed",{})},replace:function(q){return this.then(function(r){h(q).html(r)}).trigger("changed",{})},trigger:function(q,r){return this.then(function(s){if(typeof r=="undefined"){r={content:s}}this.event_context.trigger(q,r)})}});p.EventContext=function(u,t,r,s,q){this.app=u;this.verb=t;this.path=r;this.params=new p.Object(s);this.target=q};p.EventContext.prototype=h.extend({},p.Object.prototype,{$element:function(){return this.app.$element(c(arguments).shift())},engineFor:function(s){var r=this,q;if(d(s)){return s}s=(s||r.app.template_engine).toString();if((q=s.match(/\.([^\.\?\#]+)$/))){s=q[1]}if(s&&d(r[s])){return r[s]}if(r.app.template_engine){return this.engineFor(r.app.template_engine)}return function(t,u){return t}},interpolate:function(s,t,r,q){return this.engineFor(r).apply(this,[s,t,q])},render:function(q,s,t,r){return new p.RenderContext(this).render(q,s,t,r)},renderEach:function(q,r,s,t){return new p.RenderContext(this).renderEach(q,r,s,t)},load:function(q,r,s){return new p.RenderContext(this).load(q,r,s)},partial:function(q,r){return new p.RenderContext(this).partial(q,r)},send:function(){var q=new p.RenderContext(this);return q.send.apply(q,arguments)},redirect:function(){var y,w=c(arguments),v=this.app.getLocation(),r=w.length;if(r>1){var u=0,z=[],q=[],t={},x=false;for(;u<r;u++){if(typeof w[u]=="string"){z.push(w[u])}else{h.extend(t,w[u]);x=true}}y=z.join("/");if(x){for(var s in t){q.push(this.app._encodeFormPair(s,t[s]))}y+="?"+q.join("&")}}else{y=w[0]}this.trigger("redirect",{to:y});this.app.last_location=[this.verb,this.path];this.app.setLocation(y);if(new RegExp(y).test(v)){this.app.trigger("location-changed")}},trigger:function(q,r){if(typeof r=="undefined"){r={}}if(!r.context){r.context=this}return this.app.trigger(q,r)},eventNamespace:function(){return this.app.eventNamespace()},swap:function(q){return this.app.swap(q)},notFound:function(){return this.app.notFound(this.verb,this.path)},json:function(q){return h.parseJSON(q)},toString:function(){return"Sammy.EventContext: "+[this.verb,this.path,this.params].join(" ")}});h.sammy=j.Sammy=p})(jQuery,window);
(function() {

  Galleria.requires(1.25, "This version of Classic theme requires Galleria 1.2.5 or later");

  (function($) {
    return Galleria.addTheme({
      name: "sofia",
      author: "Halan Pinheiro",
      defaults: {
        transition: "slide",
        thumbCrop: "height",
        fullscreenCrop: false,
        thumbnails: true,
        carouselSpeed: 3000,
        _toggleInfo: false
      },
      init: function(options) {
        var click, info, main_button, social_buttons, super_overlay, toolbar, touch;
        this.exitFullscreen = function() {};
        this.enterFullscreen();
        social_buttons = $("<div class=\"button-set right\"><span class=\"twitter\"></span><span class=\"facebook\"></span></div>");
        $('.twitter', social_buttons).sharrre({
          share: {
            twitter: true
          },
          template: '<a class="button icon">t</a>',
          url: 'http://halan.github.com/sofia',
          enableHover: false,
          click: function(api, options) {
            api.simulateClick();
            return api.openPopup('twitter');
          }
        });
        $('.facebook', social_buttons).sharrre({
          share: {
            facebook: true
          },
          template: '<a class="button icon">f</a>',
          url: 'http://halan.github.com/sofia',
          enableHover: false,
          click: function(api, options) {
            api.simulateClick();
            return api.openPopup('facebook');
          }
        });
        '$(\'.googleplus\', social_buttons).sharrre\n  share:\n    googlePlus: true\n  template: \'<a class="button icon">g</a>\'\n  url: \'http://halan.github.com/sofia\'\n  urlCurl: ""\n  enableCounter: false\n  enableHover: false\n  click: (api, options)->\n    api.simulateClick()\n    api.openPopup \'googlePlus\'';
        this.addElement("toolbar");
        this.append({
          container: ["toolbar"]
        });
        toolbar = this.$("toolbar");
        toolbar.append("<a class=\"center button icon\">:</a>").append(social_buttons);
        this.$("image-nav-right").addClass("icon").text(">");
        this.$("image-nav-left").addClass("icon").text("<");
        this.$("thumb-nav-right").addClass("icon").text(">");
        this.$("thumb-nav-left").addClass("icon").text("<");
        super_overlay = $('#content-overlay');
        main_button = $(".center.button", toolbar).click(function() {
          var $albums;
          super_overlay.fadeToggle();
          $(this).toggleClass("pressed");
          $albums = $("#albums", super_overlay);
          return $albums.imagesLoaded(function() {
            return $albums.masonry({
              columnWidth: 106,
              isFitWidth: true
            });
          });
        });
        this.addElement("info-link", "info-close");
        this.append({
          info: ["info-link", "info-close"]
        });
        info = this.$("info-link,info-close,info-text");
        touch = Galleria.TOUCH;
        click = (touch ? "touchstart" : "click");
        this.$("loader,counter").show().css("opacity", 0.8);
        if (!touch) {
          this.addIdleState(this.get("image-nav-left"), {
            left: -50
          });
          this.addIdleState(this.get("image-nav-right"), {
            right: -50
          });
          this.addIdleState(this.get("counter"), {
            opacity: 0
          });
        }
        if (options._toggleInfo === true) {
          info.bind(click, function() {
            return info.toggle();
          });
        } else {
          info.show();
          this.$("info-link, info-close").hide();
        }
        this.attachKeyboard({
          escape: function() {
            return $(".center.button", toolbar).click();
          }
        });
        this.bind("thumbnail", function(e) {
          if (!touch) {
            $(e.thumbTarget).css("opacity", 0.3).parent().hover((function() {
              return $(this).not(".active").children().stop().fadeTo(100, 1);
            }), function() {
              return $(this).not(".active").children().stop().fadeTo(400, 0.3);
            });
            if (e.index === this.getIndex()) {
              return $(e.thumbTarget).css("opacity", 1);
            }
          } else {
            return $(e.thumbTarget).css("opacity", (this.getIndex() ? 1 : 0.3));
          }
        });
        this.bind("loadstart", function(e) {
          if (!e.cached) this.$("loader").show().fadeTo(200, 0.4);
          return $(e.thumbTarget).css("opacity", 1).parent().siblings().children().css("opacity", 0.3);
        });
        return this.bind("loadfinish", function(e) {
          var $galleria, photoset;
          $galleria = $('#galleria');
          photoset = $galleria.data('photoset');
          if (photoset && !$galleria.data('lock-history')) {
            $galleria.removeData('lock-history');
            window.location.hash = "#/set/" + photoset + "/" + e.index;
          }
          return this.$("loader").fadeOut(200);
        });
      }
    });
  })(jQuery);

}).call(this);
(function() {
  var app, flickr;

  flickr = new Galleria.Flickr();

  app = void 0;

  $(function() {
    var api_key, flickrURL, super_overlay, user_id;
    super_overlay = $('#content-overlay');
    super_overlay.append("<br clear=\"all\"/>");
    flickrURL = "http://api.flickr.com/services/rest/?method=";
    api_key = "2a2ce06c15780ebeb0b706650fc890b2";
    user_id = "75716207@N02";
    return $.getJSON(flickrURL + "flickr.photosets.getList&user_id=" + user_id + "&api_key=" + api_key + "&format=json&jsoncallback=?", function(data) {
      var last_photoset;
      $(data.photosets.photoset).each(function() {
        var album, img_src,
          _this = this;
        img_src = "http://farm" + this.farm + ".staticflickr.com/" + this.server + "/" + this.primary + "_" + this.secret + "_t.jpg";
        album = $("<div class='album'><h2>" + this.title._content + "</h2><img src=" + img_src + "></div>").appendTo("#albums");
        return album.click(function() {
          $('.galleria-toolbar .center.button').removeClass('pressed');
          return super_overlay.fadeToggle(function() {
            return $.sammy().setLocation("#/set/" + _this.id + "/0");
          });
        });
      });
      last_photoset = $(data.photosets.photoset).get(-1);
      app = $.sammy(function() {
        this.bind('load-galleria', function(e, data) {
          var galleria;
          galleria = $('#galleria').data('galleria');
          if ($('#galleria').data('photoset') !== data.id) {
            galleria = $("#galleria").galleria({
              show: data.pic,
              flickr: "set:" + data.id,
              flickrOptions: {
                description: true
              }
            });
          } else if (galleria.getIndex() !== parseInt(data.pic)) {
            $('#galleria').data('lock-history', true);
            galleria.show(data.pic);
          }
          return $('#galleria').data('photoset', data.id);
        });
        this.get('#/set/:id/:pic', function() {
          return this.trigger('load-galleria', {
            id: this.params['id'],
            pic: this.params['pic']
          });
        });
        return this.get(/.*/, function() {
          return this.trigger('load-galleria', {
            id: last_photoset.id,
            pic: 0
          });
        });
      });
      return app.run("#/set/" + last_photoset.id + "/0");
    });
  });

}).call(this);
