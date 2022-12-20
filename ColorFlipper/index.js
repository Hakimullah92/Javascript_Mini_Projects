const body=document.querySelector("body");
const btn=document.getElementById("btn");

btn.addEventListener('click',function(){
let colors=['crimson','purple','orange','green','#000'];

let colorrandom=colors[Math.floor(Math.random()*colors.length)];
body.style.background=colorrandom;

});