function calcula(){
   let saldo = Number(document.getElementById("saldo").value)
   let credito = 0

   if (saldo > 400){
       credito = (saldo * 30) / 100
   }
   else if ((saldo <= 400) && (saldo > 300)){
       credito = (saldo * 25) / 100
   }
   else if ((saldo <= 300) && (saldo > 200)){
       credito = (saldo * 20) / 100
   }
   else if ((saldo <= 200) && (saldo > 0)){
       credito = (saldo * 10) / 100
   }
   else {
       credito = 0
   }
   document.getElementById("resultado").innerHTML = `O crédito concedido é R$ ${credito}`
}