//=../../../../node_modules/slick-carousel/slick/slick.js


//=../../../../node_modules/slick-carousel/slick/slick.js
var slider__inner = $('.slider__inner');
slider__inner.slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 15000,
    speed: 500

  });
 
//   $("#portfolio__arrow--prev").on("click", function(event) {
//           event.preventDefault();
//           slider__inner.slick('slickPrev');
//   });

//   $("#portfolio__arrow--next").on("click", function(event) {
//     event.preventDefault();
//     slider__inner.slick('slickNext');
// });
