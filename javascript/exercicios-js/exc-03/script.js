function calcula() {
   let n1, n2, menor

   n1 = Number(document.getElementById("n1").value)
   n2 = Number(document.getElementById("n2").value)

   if (n1 == n2) {
      document.getElementById("resultado").innerHTML = `Os números são iguais`
   } else if (n1 > n2){
      menor = n2
      document.getElementById("resultado").innerHTML = `O menor número é ${menor}`
   } else {
      menor = n1
      document.getElementById("resultado").innerHTML = `O menor número é ${menor}`
   }
}