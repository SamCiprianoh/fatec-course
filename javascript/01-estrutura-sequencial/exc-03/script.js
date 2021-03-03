function calcula(){
   let n1, n2, result

   n1 = Number(document.getElementById('n1').value)
   n2 = Number(document.getElementById('n2').value)

   result = n1 / n2
   
   document.getElementById('result').innerHTML = `${n1} / ${n2} = ${result}`
}