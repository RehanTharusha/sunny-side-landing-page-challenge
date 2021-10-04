var nav = document.getElementById('hamburger');
var navList = document.getElementById('mobile-nav');

nav.addEventListener('click', mobileNav);

function mobileNav(){

    if (navList.style.display === "block") {
        navList.style.display = "none";
      } else {
        navList.style.display = "block";
      }
}


