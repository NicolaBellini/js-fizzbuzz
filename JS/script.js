 
document.addEventListener("DOMContentLoaded", function(){
 const container = document.getElementById("canva")
 
  let btn = document.getElementById("btn")


  // const limit = 100;
  btn.addEventListener("click", create)

    function create(){
      let inputNum = document.getElementById("num").value
      let limit = inputNum;
      console.log(inputNum, limit);
    
      
      container.innerHTML = ""
      if(!(isNaN(inputNum))){
        for(i = 1; i <= limit; i++){
          if((!(i % 3) && (!(i % 5)))){
            console.log(i +" multiplo sia di 3 che di 5");
            container.innerHTML += `
            <div class="box multiple-3-5">fizzbuzz</div>
            `
          }else if(!(i % 5)){
            console.log(i + " multiplo di 5");
            container.innerHTML += `
            <div class="box multiple-5">buzz</div>
            `
          }else if  (!(i % 3)){
            console.log(i + " multiplo di 3");
            container.innerHTML += `
            <div class="box multiple-3">fizz</div>
            `
          }else{
            console.log(i);
            container.innerHTML += `
            <div class="box normal">${i}</div>
            `
          }
        } 
      }else{
        alert(" BRUHH! Inserisci un numero e vedi che funziona.")
      }
    } 


  });

