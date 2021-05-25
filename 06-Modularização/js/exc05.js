function principal(){
   let numerosPrimos = []
   exc05(150, numerosPrimos)
   saida(numerosPrimos)
}

function exc05(limite, numerosPrimos){
   for(let numero = 100; numero <= limite; numero++){
      let primo = true
      for(let divisor = 2; divisor < numero; divisor++){
         if(numero % divisor === 0){
            primo = false
            break
         }
      }
      if(primo){
         numerosPrimos.push(numero)
      }
   }
}

function saida(num){
   alert(`Os 10 primeiros números primos acima de 100 são: \n\n${num}`)
}

let btChamarFuncao = document.getElementById('btChamarFuncao')
btChamarFuncao.addEventListener('click', principal)