function calcula(){
   let n1, n2, opt, media, diferenca, produto, divisao

   n1 = Number(document.getElementById('n1').value)
   n2 = Number(document.getElementById('n2').value)
   opt = Number(document.querySelector('input[name="opt"]:checked').value)

   if(opt == 1){
      media = (n1 + n2) / 2
      document.getElementById('result').innerHTML = `A média é ${media}`
   }
   else if(opt == 2){
      if(n1 < n2){
         diferenca = n2 - n1
      }else {
         diferenca = n1 - n2
      }
      document.getElementById('result').innerHTML = `A diferença é ${diferenca}`
   }
   else if(opt == 3){
      produto = n1 * n2
      document.getElementById('result').innerHTML = `O produto é ${produto}`
   }
   else if(opt == 4){
      divisao = n1 / n2
      document.getElementById('result').innerHTML = `A divisão é ${divisao.toFixed(2)}`
   }
}