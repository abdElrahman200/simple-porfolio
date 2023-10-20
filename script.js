let sub =document.querySelector('.sub');
let na =document.querySelector('.na');
let em =document.querySelector('.em');
let massge =document.querySelector('.massge');


sub.addEventListener('click',()=>{
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var val = em.value
    var isValidEmail = emailRegex.test( em.value);  
    if(na.value !==''&& massge.value !== '' && isValidEmail){
        alert(`thanks ${na.value} Your message has been sent`)

    }else{
        na.value = '';
        l='';
        alert('please check your message or your name or Email')
    }
})
   

 
  
  
 