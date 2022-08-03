function generatePin(){
    const pinNumber=Math.random()*10000;
    const pin=Math.round(pinNumber);
    const pinString=pin.toString();
    if(pinString.length==4)
    {
        document.getElementById("displayPin").value=pin;
    }
        
   

   }
   function displayDigit(){
    const digit=event.target.innerText;
   
    
 const typedInput=document.getElementById("display");
 if(isNaN(digit))
 {
    if(digit=='C')
{
    typedInput.value="";
}
else if(digit=="B")
{
    typedInput.value=typedInput.value.toString().slice(0,-1);
}
    
 }
 else{
    typedInput.value=typedInput.value+digit;

 }
  

   }
    function handleSubmit(){
        const pin= document.getElementById("displayPin").value;
       const typedInput=document.getElementById("display").value;
       const match= document.getElementById("match");
       const notMatch= document.getElementById("notMatch");
      if(pin==typedInput)
      {
      
       match.style.display="block";
       notMatch.style.display="none"

      }
      else{
       notMatch.style.display="block";
       match.style.display="none";
      
      }
       

    }
       