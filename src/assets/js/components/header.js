'use strict';

// Smooth scroll: https://github.com/cferdinandi/smooth-scroll
// var scroll = new SmoothScroll('a[href*="#"]');

let header = document.querySelector("#header");
let testBtn = document.querySelector(".button");
let navLink = document.querySelectorAll(".nav__link");
 

// 'window'--eto to na chto veshaem obrabotchik sobytija. tut konkretno na okno browsera
window.addEventListener('scroll', function() {/* OPredelyaem sobytie:scroll */
   let scrollPos = window.scrollY;/* HOtim opredelit poziciju skrolla: ispolzuem metod 'scrollY' */
   
   if(scrollPos > 0) {/*  esli pozicija scrollPos menshe 0, to vydaem ej etot klass */
      header.classList.add('header--dark');

   } else {
      header.classList.remove('header--dark');

   }
});

// testBtn.addEventListener('click', function() {
//    console.log('clicked');
// });

// for(let navItem of navLink) {
//    navItem.addEventListener("click", function() {
//        console.log(navItem.text);
//    });
// }



// navToggle (how to add/remove burger menu)
let navToggle = $('#navToggle');
let nav = $('.nav');

   navToggle.on('click', function(event) {
      event.preventDefault();

      $(this).toggleClass('active');/* Vydaet pri klike na burger(.toggleClass) */
      nav.toggleClass('show');

      $(window).on("resize", function() {/* Esli perevernem telefon pri otkrytoj navigacii,ona sxlopne */
         navToggle.removeClass('active');
         nav.removeClass('show');
      });
   });

 
   // Obrashaemsya k elementu po DATA atributu.Ih propisyvaem v ssylkah,
   // a im daem ID#
   $("[data-scroll").on("click", function(event) {
      event.preventDefault();
    
      let scrollEl = $(this).data("scroll");
      let scrollElPos = $(scrollEl).offset().top; /*  zdes poluchaem poziciju blokov ot verha ekrana. 
      Bez etogo ne budet rabotat */
    
// Eto nuzhno,chtoby pri klike na element menu ubrat ego
      navToggle.removeClass('active');
      nav.removeClass('show');
    
    
      $("html, body").animate({
        scrollTop: scrollElPos - 80 /* otmotaet k etoj pozicii i minus 10px */
      }, 400);
      /* Nuzhno podkliuchat polnuju versiju Jquery(not Slim) else {not gonna work} */
      });

// SCROLLSPY
let windowH = $(window).height();

$(window).on("scroll", function() { /* Pri scrolle stranicy(window) my budem chto-to delat */
/* pri scrolle nam nuzhno poluchit poziciju kazhdoj sekcii. Dlya etogo nam ponadobitsya vyborka
elementov po DATA atributu 'data-scrollspy' */
   let scrollTop = $(this).scrollTop(); /* Pri scrolle, my sohranyaem dannnye v etu peremennuju */
      $("[data-scrollspy]").each(function() { /* EACH: my prohodim po KAZHDOMU data-atributu */

            let $this = $(this);
            let sectionId = $(this).data('scrollspy');
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * .3); /* eto nuzhno.chtoby ottectrirovat SCROLL,
            kogda on skrolitsya k sekcii */


            if(scrollTop >= sectionOffset) {
               $('#nav [data-scroll]').removeClass('active');
               $('#nav [data-scroll="#'+ sectionId +'"]').addClass('active');
               if(scrollTop == 0) {
                  $('#nav [data-scroll]').removeClass('active');
                }
            }
      });

});

// MOdal
// znak $-obratitsya k elementu. Data atributy vsegda zapisyvaem v []. consultation-eto znachenie data-modal
$('[data-modal=consultation]').on('click', function() {/* po clicku */
      $('.overlay, #consultation').fadeIn('fast'); /* Obrashyaemsya k .overlay skomandoj fadeIn.
      Takzhe mozhem podstavit liuboj nuzhnyj nam #ID */
});
$('[data-modal=order]').on('click', function() {/* po clicku */
   $('.overlay, #order').fadeIn('fast'); /* Obrashyaemsya k .overlay skomandoj fadeIn.Takzhe mozhem podstavit
    liuboj nuzhnyj nam #ID */
});

      $('.modal__close').on('click', function() {/* Pri clike na .modal__close vypolnit .fadeOut(zakryt) */
         $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
});

 


 

