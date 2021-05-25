function principal(){
   let numeros = []
   let positivos = []
   entrada(numeros)
   exc04(numeros, positivos)
   saida(positivos)
}

function entrada(numeros){
   for(let i = 0; i < 10; i++){
   numeros.push(Number(prompt(`Informe o ${i+1}º número:`)))
   }
}

function exc04(numeros, positivos){
   numeros.forEach(element => {
      if(element >= 0){
         positivos.push(element)
      }
      if(element < 0){
         positivos.push(0)
      }
   });
}

function saida(positivos){
   alert(positivos)
}

var btChamarFuncao = document.getElementById('btChamarFuncao')
btChamarFuncao.addEventListener('click', principal)