const frm = document.querySelector("form");
let outNumero1 = document.getElementById("outNumero1");
let outNumero2 = document.getElementById("outNumero2");
let outNumero3 = document.getElementById("outNumero3");
let outNumero4 = document.getElementById("outNumero4");
let outNumero5 = document.getElementById("outNumero5");
let outNumero6 = document.getElementById("outNumero6");

lista = []

let i = 1;
let num1, num2, num3, num4, num5, num6;

frm.addEventListener("click", () => {
  
  if (i == 1){
    num1 = Math.floor(Math.random() * 60);
    console.log(num1);
    outNumero1.innerText = num1
  }
  if (i == 2){
    num2 = Math.floor(Math.random() * 60);
    console.log(num2);
    if (num1 != num2){
      outNumero2.innerText = num2
    }
    
  }
  if (i == 3){
    num3 = Math.floor(Math.random() * 60);
    console.log(num3);
    if (num1 != num2 != num3){
      outNumero3.innerText = num3
    }
  }
  if (i == 4){
    num4 = Math.floor(Math.random() * 60);
    console.log(num4);
    if (num1 != num2 != num3 != num4){
      outNumero4.innerText = num4
    }
  }
  if (i == 5){
    num5 = Math.floor(Math.random() * 60);
    console.log(num5);
    if (num1 != num2 != num3 != num4 != num5){
      outNumero5.innerText = num5
    }
  }
  if (i == 6){
    num6 = Math.floor(Math.random() * 60);
    console.log(num6);
    if (num1 != num2 != num3 != num4 != num5 != num6){
      outNumero6.innerText = num6
    }
  }

  i = i+1
  
});

frm.btNovo.addEventListener('click', () => {
  location.reload()
});