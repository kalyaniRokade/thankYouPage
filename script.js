var selected;
function active_fun(num){  
  selected=num;
  let anc=document.getElementsByClassName("number");  
  anc[num].style.backgroundColor="hsl(217, 12%, 63%)";
  anc[num].style.color="white";

}  

document.querySelector('.submit_btn').addEventListener("click",function(){  

  let first_page=document.querySelector('.main');
     let  ele=document.createElement('div'); 
    ele.classList.add("thank_you");  
    
     let content=`<div class="thank_youimg"> 
        <img src="illustration-thank-you.svg">
   </div> 

   <div class="choice_made">  
    <p class="choices"> 
      You selected <span class="choice">${selected+1} </span> out of 5
    </p>
     
   </div> 

   <div class="content"> 
         <p class="thk">Thank you!</p> 
         <p class="para"> 
          We appreciate you taking the time to give a rating.<br>If you ever need more support, 
          don’t hesitate to get in touch!
         </p>
   </div>` 

   ele.innerHTML=content;  
  let parent_div=document.querySelector('.front_page'); 
   parent_div.replaceChild(ele,first_page);

})