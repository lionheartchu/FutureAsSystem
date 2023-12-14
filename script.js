// function showSection(sectionId) {
//     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
// }

// window.onscroll = function() {
//     stickyNav();
// };

// // Get the navbar
// var navbar = document.getElementById("stickyNav");

// // Get the offset position of the intro section
// var introOffset = document.querySelector(".intro").offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyNav() {
//     if (window.pageYOffset >= introOffset) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var distanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (distanceFromTop > 300) {
      navbar.style.opacity = 0.6
    } else {
      navbar.style.opacity = 0
    }
  });

const word2=document.querySelector(".word2")
const exp2=document.querySelector(".exp2")
word2.addEventListener("click",()=>{
    exp2.style.display='block'
})


//workflow1
const img1=document.querySelector('.img1')
const img2=document.querySelector('.img2')
const img3=document.querySelector('.img3')
const img4=document.querySelector('.img4')
const img5=document.querySelector('.img5')
const img6=document.querySelector('.img6')
const text1=document.querySelector('.text1')
const foods=document.querySelectorAll('.foodimg')
const arrow1=document.querySelector('.arrow-right')
const step2=document.getElementById('step2')
const step3=document.getElementById('step3')
foods.forEach(food => {
    food.addEventListener("click", () => {
        img1.style.width = '0.75%';
        img2.style.width = '1.5%';
        img3.style.width = '0.75%';
        img1.style.opacity='0%'
        img2.style.opacity='0%'
        img3.style.opacity='0%'
        img5.style.opacity='1'
        img5.style.marginLeft='9.3%'
        img5.style.marginTop='-13%'
        img5.style.width='1%'
        img6.style.opacity='1'
        text1.style.opacity='1'
        arrow1.style.opacity='1'
        step2.style.opacity='1'
        step3.style.opacity='1'
    });
});