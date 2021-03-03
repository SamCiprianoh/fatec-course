function calcula(){
   let n1, n2, menor

   n1 = Number(document.getElementById('n1').value)
   n2 = Number(document.getElementById('n2').value)

   if(n1 < n2){
      menor = n1
   } else {
      menor = n2
   }
   
   document.getElementById('result').innerHTML = `O menor número é ${menor}`
}