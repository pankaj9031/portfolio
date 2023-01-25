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

let screenSize = window.innerWidth;

navLinks.forEach((link)=>{
    if(screenSize<= 650){
        link.addEventListener('click',closeMenu);
    }
});


function closeMenu(){
    navbar.style.transform = "scale(0)";
    navOverlay.style.display = "none";
}

// for photo overlay 
window.addEventListener('load',()=>{
    let myphoto = document.querySelector(".my-photo");
    let photoWidth = myphoto.offsetWidth;
    let photoHeight = myphoto.offsetHeight;

    let photoOverlay = document.querySelector(".photoOverlay");

    photoOverlay.style.width = photoWidth + "px";
    photoOverlay.style.height = photoHeight + "px";
    
})



// intersection animation 



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('slide-right');            
        } else{
            entry.target.classList.remove('slide-right');
        }

    });
});

const leftAnimated = document.querySelectorAll(".hidden-left");

leftAnimated.forEach((item,index) => {

    observer.observe(item);
    
    for(let i = 0;i<10;i++){
        if(index == i)
            item.style.transitionDelay = i * 0.2 + "s";
    }
    
});

// Intersection animation for my photo 
const myImgObserver = new IntersectionObserver((rightEntries) => {
    rightEntries.forEach((rightEntry) => {
        if(rightEntry.isIntersecting){
            rightEntry.target.classList.add('slide-left');
        } else{
            rightEntry.target.classList.remove('slide-left');
        }
    });
});

const rightAnimated = document.querySelectorAll(".hidden-right");

rightAnimated.forEach((rightItem) => {

    myImgObserver.observe(rightItem);
    
});