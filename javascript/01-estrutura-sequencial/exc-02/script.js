function calcula(){
   let n1, n2, result

   n1 = Number(document.getElementById('n1').value)
   n2 = Number(document.getElementById('n2').value)
   n3 = Number(document.getElementById('n3').value)

   result = n1 * n2 * n3
   
   document.getElementById('result').innerHTML = `${n1} * ${n2} * ${n3} = ${result}`
}