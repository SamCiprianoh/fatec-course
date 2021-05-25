function principal(){
   let numeros = []
   let pares = []
   entrada(numeros)
   exc02(numeros, pares)
   saida(pares)
}

function entrada(numeros){
   for(let i = 0; i < 10; i++){
      numeros.push(Number(prompt(`Informe o ${i+1}º número`)))
   }
}

function exc02(numeros, pares){
  numeros.forEach(elemento => {
   if(elemento % 2 === 0){
      pares.push(elemento)
   }
  });
}

function saida(vet){
   alert(`Números pares: ${vet.length}`)
}



var btChamarFuncao = document.getElementById('btChamarFuncao')
btChamarFuncao.addEventListener('click', principal)