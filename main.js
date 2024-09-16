function increseFont(){
   document.querySelector('.user-info').classList.add('fontincrease'); 
   document.querySelector('.user-info').classList.remove('fontdecrease'); 


}
function decreaseFont(){
    document.querySelector('.user-info').classList.add('fontdecrease'); 
    document.querySelector('.user-info').classList.remove('fontincrease'); 

 }


document.querySelector(".increaseBtn").onclick=increseFont;
document.querySelector(".decreaseBtn").onclick=decreaseFont;
