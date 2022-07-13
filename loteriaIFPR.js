const frm = document.querySelector("form");
let outNumero1 = document.getElementById("outNumero1");
let outNumero2 = document.getElementById("outNumero2");
let outNumero3 = document.getElementById("outNumero3");
let outNumero4 = document.getElementById("outNumero4");
let outNumero5 = document.getElementById("outNumero5");
let outNumero6 = document.getElementById("outNumero6");
let outSort = document.getElementById("outSort");
let outAlert = document.getElementById("outAlert")

lista = []

let num, i = 1;

frm.addEventListener("click", () => {
  
    if (i == 1){
      num = Math.floor(Math.random() * 60+1);
    console.log(num);
    lista.push(num);

    }
    if (i > 1){
    num = Math.floor(Math.random() * 60+1);
    console.log(num);

    if (lista.includes(num)){
      a = "Número ja sorteado, sortear novamente"
      outAlert.textContent = a
      i = i - 1
      console.log('rep '+ num);
    }else{
      a = ""
      outAlert.textContent = a
      lista.push(num)
    }
    }
    outNumero1.textContent = lista[0]
    outNumero2.textContent = lista[1]
    outNumero3.textContent = lista[2]
    outNumero4.textContent = lista[3]
    outNumero5.textContent = lista[4]
    outNumero6.textContent = lista[5]
    if (i == 6){
      outSort.textContent = "As seis dezenas foram sorteadas!"
    }
  i = i +1
});

frm.btNovo.addEventListener('click', () => {
  location.reload()
});