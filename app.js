let on = document.querySelector("button.on");
let light =document.querySelector(".light");
let off = document.querySelector("button.off");

on.addEventListener("click", function(){
    light.src= "https://www.w3schools.com/js/pic_bulbon.gif"; 
});
 off.addEventListener('click',function(){
    light.src= "https://www.w3schools.com/js/pic_bulboff.gif"
})