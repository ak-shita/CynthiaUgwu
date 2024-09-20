/*const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: false
});     SMOOTH SCROLLING*/


function circleMouseFollower () {
    window.addEventListener('mousemove', function (dets) {
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}

circleMouseFollower(); 

/*
function circleStretch() {
    //define default scale value
    var xscale = 1;
    var yscale = 1; 
    var xprev = 0;
    var yprev = 0;

    window.addEventListener('mousemove', function(dets){
        var xdiff = dets.clientX - xprev; //Difference in positions of mouse on movement 
        xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        xprev = dets.clientX;

        var ydiff = dets.clientY - yprev;
        yscale = gsap.utils.clamp(.8, 1.2, ydiff);
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        });
} 

circleStretch(); */

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from('#nav', {
        y: '10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    tl.to('.boundingelem', {
        y:0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })

    tl.from('#hero-footer', {
        opacity: 0,
        duration: .6,
        delay: 0,
        ease: Expo.easeInOut
    })
}

firstPageAnim();

/*
var element = document.querySelector(".element")
var elemImg = document.querySelector(".element img")

element.addEventListener("mousemove", function(){
    elemImg.style.left = dets.x+"px";
    elemImg.style.top = dets.x+"px";
})

element.addEventListener("mouseenter", function(){
    elemImg.style.opacity = 1;
})*/

document.querySelectorAll(".element").forEach(function (elem){
   var rotate = 0;
   var diffRot = 0;

   elem.addEventListener("mouseleave", function(dets){
    gsap.to(elem.querySelector("img"), {
     opacity: 0,
     ease: Power1, 
     duration: 0.5,
    });
 });

 elem.addEventListener("mouseenter", function(){
    gsap.to(elem.querySelector("img"),{
        opacity:1,
    })
 })

    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffRot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-10, 10, diffRot * 0.2),
        });
    });
});

/*
document.querySelectorAll(".element").forEach(function(elem) {
    
    elem.addEventListener("mouseleave", function(dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power1,
            duration: 0.4
        });
    });
});*/