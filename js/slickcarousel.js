AOS.init({
  duration:50,
});


$(document).ready(function(){
    $('.vips').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:700,
        arrows:true,
        prevArrow:"<img class = 'align-self-center mb-2 h-75 pr-5' src='img/left arrow.png' alt=''>",
        nextArrow:"<img class = 'align-self-center mb-2 h-75 pl-5'  src='img/right arrow.png' alt=''>",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    
  });

  
// end of carousel block



//google T
  
//end google Translate


//facebookshare


//end facebook share