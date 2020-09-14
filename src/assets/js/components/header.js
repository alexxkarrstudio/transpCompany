// Add/Remove class
// $(window).scroll(function(){
//     if ($(this).scrollTop() > 50) {
//        $('#header').addClass('header--dark');
//     } else {
//        $('#header').removeClass('header--dark');
//     }
// });


// Smooth scroll: https://github.com/cferdinandi/smooth-scroll
var scroll = new SmoothScroll('a[href*="#"]');

let header = document.querySelector("#header");
var testBtn = document.querySelector(".button");
var navLink = document.querySelectorAll(".nav__link");

// 'window'--eto to na chto veshaem obrabotchik sobytija. tut konkretno na okno browsera
window.addEventListener('scroll', function() {/* OPredelyaem sobytie:scroll */
   var scrollPos = window.scrollY;/* HOtim opredelit poziciju skrolla: ispolzuem metod 'scrollY' */
   
   if(scrollPos > 0) {/*  esli pozicija scrollPos menshe 0, to vydaem ej etot klass */
      header.classList.add('header--dark');

   } else {
      header.classList.remove('header--dark');

   }
});

testBtn.addEventListener('click', function() {
   console.log('clicked');
});

 
for(let navItem of navLink) {
   navItem.addEventListener("click", function() {
       console.log(navItem.text);
   });
}

const age = 37;

console.log(age);