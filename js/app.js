$(document).ready(function(){
    $('.slider-slick').slick({
        slidesToShow: 3,
        // slidesToScroll: 1,
        Infinity: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow:
            "<button type='button' class='slick-prev slick-arrow pull-left'><i class='bx bx-left-arrow-circle' ></i></button>",
        nextArrow:
            "<button type='button' class='slick-next slick-arrow pull-right'><i class='bx bx-right-arrow-circle'></i></button>",
        
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3
                },
              },
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 2
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    // arrows: false,
                    // Infinity: false,
                  },
                },
              ]
    });
  });