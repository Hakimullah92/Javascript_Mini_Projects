let number=document.getElementById('number'),
    plus=document.getElementById('plus'),
    minus=document.getElementById('minus'),
    reset=document.getElementById('reset');

    plus.addEventListener('click',function(){
      number.textContent++;
    });
    
    minus.addEventListener('click',function(){
      if(number.textContent>0){
        number.textContent--;
      }
    });

    reset.addEventListener('click',function(){
      number.textContent=0;
    });