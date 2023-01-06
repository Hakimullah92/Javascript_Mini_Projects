let btn=document.querySelectorAll(".left-container .btn");
let formcontainer=document.querySelectorAll('.right-container .form-container');
console.log(formcontainer);
btn.forEach((item)=>{
  item.addEventListener('click',()=>{
   btn.forEach((shift)=>{
     shift.classList.remove('active');
   });
   item.classList.add('active');
   formcontainer.forEach((show)=>{
   show.style.display="none";
   let select=item.textContent;
   if(show.getAttribute('data-item')===select){
    show.style.display="block";
   }
   });
  });
});