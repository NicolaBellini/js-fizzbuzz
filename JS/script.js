const container = document.getElementById("canva")


const limit = 101;

for(i = 1; i < limit; i++){
  if((!(i % 3) && (!(i % 5)))){
    console.log(i +" multiplo sia di 3 che di 5");

  }else if(!(i % 5)){
    console.log(i + " multiplo di 5");

  }else if  (!(i % 3)){
    console.log(i + " multiplo di 3");

  }else{
    console.log(i);

  }
} 
  // console.log(i);
