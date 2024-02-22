const container = document.getElementById("canva")


const limit = 101;

for(i = 1; i < limit; i++){
  if((!(i % 3) && (!(i % 5)))){
    console.log(i +" multiplo sia di 3 che di 5");
    container.innerHTML += `
    <div class="box multiple-3-5">${i}</div>
    `
  }else if(!(i % 5)){
    console.log(i + " multiplo di 5");
    container.innerHTML += `
    <div class="box multiple-5">${i}</div>
    `
  }else if  (!(i % 3)){
    console.log(i + " multiplo di 3");
    container.innerHTML += `
    <div class="box multiple-3">${i}</div>
    `
  }else{
    console.log(i);
    container.innerHTML += `
    <div class="box normal">${i}</div>
    `
  }
} 
  // console.log(i);
