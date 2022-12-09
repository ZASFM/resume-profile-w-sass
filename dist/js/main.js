const menuBtn=document.querySelector('.menu-btn');
const hamburger=document.querySelector('.menu-btn__burger');
//console.log(menuBtn,hamburger);
let showMenu=false;

menuBtn.addEventListener('click',()=>{
   if(!showMenu){
      hamburger.classList.add('open');
      showMenu=true;
   }else{
      hamburger.classList.remove('open');
      showMenu=false;
   }
})