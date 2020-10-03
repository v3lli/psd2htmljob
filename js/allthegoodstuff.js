

// backtotop button
btn2thetop = document.getElementById("uptop");
window.onscroll = function(){scrollcheck()};
function scrollcheck(){
    if(document.documentElement.scrollTop >1000 || document.body.scrollTop>1000){
        btn2thetop.style.display = "block";
    }else{
        btn2thetop.style.display = "none";
    }
}
function b2top(){
    document.documentElement.scrollTop =0
    document.body.scrollTop =0
}






//facebook share
const fbbtn = document.querySelector("#fb-btn");

function init(){
  let shareUrl = encodeURI(document.location.href)
    fbbtn.setAttribute(
      "href",
      `https://www.facebook.com/sharer.php?u=${shareUrl}`
      );
  
}
init();

// DROPDOWN HANDLER
$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});

// make it as accordion for smaller screens
if ($(window).width() < 992) {
  $('.dropdown-menu a').click(function(e){
    e.preventDefault();
      if($(this).next('.submenu').length){
        $(this).next('.submenu').toggle();
      }
      $('.dropdown').on('hide.bs.dropdown', function () {
     $(this).find('.submenu').hide();
  })
  });
}

// google translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

//mapplic
$(document).ready(function() {
  $('#mapplic').mapplic({
      source: 'APEX/apex.json',
      height: 475,
      mapfill: false,
      markers: false,
      sidebar: false,
      search: false,
      minimap: false,
      fullscreen: false,
      maxscale: 2,
      hovertip: false,
      fillcolor: ('#afbd22'),
      zoom: false,
      mousewheel: false
  });
});

/* Landing page scripts */
$(document).ready(function() {
	$('.usage').click(function(e) {
		e.preventDefault();
		$('.editor-window').slideToggle(200);
	});

	$(document).on('mousemove', '.mapplic-layer', function(e) {
		var map = $('.mapplic-map'),
			x = (e.pageX - map.offset().left) / map.width(),
			y = (e.pageY - map.offset().top) / map.height();
		$('.mapplic-coordinates-x').text(parseFloat(x).toFixed(4));
		$('.mapplic-coordinates-y').text(parseFloat(y).toFixed(4));
	});

	$('.editor-window .window-mockup').click(function() {
		$('.editor-window').slideUp(200);
	});
});
