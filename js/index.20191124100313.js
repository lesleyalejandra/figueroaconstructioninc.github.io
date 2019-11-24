(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="svezAgjhvfspbdpotusvdujpojod/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/pasted-image-314.png' : 'images/pasted-image-157.png');
var a='data-src'; if($('.js2 .slide0').hasAttr('src')) { a='src'; } $('.js2 .slide0').attr(a, 'images/logofigconst-959.png');
var a='data-src'; if($('.js2 .slide1').hasAttr('src')) { a='src'; } $('.js2 .slide1').attr(a, (dpi>1) ? 'images/pasted-image-1918.jpg' : 'images/pasted-image-959.jpg');
$('.js3').attr('src', (dpi>1) ? 'images/pasted-image-1916.jpg' : 'images/pasted-image-958.jpg');}else{$('.js').attr('src', (dpi>1) ? 'images/pasted-image-100.png' : 'images/pasted-image-50.png');
var a='data-src'; if($('.js2 .slide0').hasAttr('src')) { a='src'; } $('.js2 .slide0').attr(a, (dpi>1) ? 'images/logofigconst-640.png' : 'images/logofigconst-320.png');
var a='data-src'; if($('.js2 .slide1').hasAttr('src')) { a='src'; } $('.js2 .slide1').attr(a, (dpi>1) ? 'images/pasted-image-640.jpg' : 'images/pasted-image-320.jpg');
$('.js3').attr('src', (dpi>1) ? 'images/pasted-image-638.jpg' : 'images/pasted-image-319.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js7').attr('src', 'images/fb-30.png');

}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
$('.js2 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 3000});
});