const burgerLines= document.getElementById('burger-lines');
const x= document.getElementById('x');
const myMenu=document.getElementById('menu');
const menuAbout= document.getElementById('menu-about');
const menuServices= document.getElementById('menu-services');
const menuProjects= document.getElementById('menu-projects');
const menuContact= document.getElementById('menu-contact');
const menuLinks= document.querySelectorAll('.menu-link')

//when the burger is cllicked, it is replaced by an x sign, and
// the hidden menue is shifted to the center of the screen
burgerLines.addEventListener('click',function(){
   burgerLines.style.display="none";
   x.style.display="block";
   myMenu.style.transform='translateX(5%)';
});


//when the x is cllicked, it is replaced by the burger menu, and
// the menue is shifted out of the screen
x.addEventListener('click', function(){
   x.style.display="none";
   burgerLines.style.display="block";
   myMenu.style.transform="translateX(120%)";
});


// There is no need for the following event listener (because it can't
//happen in real life) but I did it anyway
// because it existed in the design.


//an event listener to change the style of nave items when clicked (in
// small devices)
menuLinks.forEach(menuLink =>{
   menuLink.addEventListener('click',function changeBackground(){
      // menuLink.style= 'background:hsl(51, 100%, 49%); color:black';
      console.log('helloooo');
      menuLink.classList.toggle('menu-link-clicked');
   });
});