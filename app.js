// navbar for small screen size devices 
let navbar = document.getElementById("navLinks");
let openNav = document.getElementById("openMenu");
let closeNav = document.getElementById("closeMenu");
let navOverlay = document.getElementById("nav-overlay");
let navLinks = document.querySelectorAll("#navLinks>a")

openNav.addEventListener('click',()=>{
    navbar.style.transform = "scale(1)";
    navOverlay.style.display = "block";
});

closeNav.addEventListener('click',closeMenu);

navOverlay.addEventListener('click',closeMenu);

navLinks.forEach((link)=>{
    link.addEventListener('click',closeMenu);
});

function closeMenu(){
    navbar.style.transform = "scale(0)";
    navOverlay.style.display = "none";
}

// for photo overlay 
let myphoto = document.querySelector(".my-photo");
let photoWidth = myphoto.offsetWidth;
let photoHeight = myphoto.offsetHeight;

let photoOverlay = document.querySelector(".photoOverlay");

photoOverlay.style.width = photoWidth + "px";
photoOverlay.style.height = photoHeight + "px";
