function principal(){
   let numeros = []
   let soma = []
   entrada(numeros)
   exc03(numeros, soma)
   saida(soma)
}

function entrada(numeros){
   for(let i = 0; i < 10; i++){
      numeros.push(Number(prompt(`Informe o ${i+1}º número`)))
   }
}

function exc03(numeros, soma){
   soma[0] = 0
   numeros.forEach(element => {
      soma[0] += element
   });
}

function saida(soma){
   alert(soma)
}

var btChamarFuncao = document.getElementById('btChamarFuncao')
btChamarFuncao.addEventListener('click', principal)