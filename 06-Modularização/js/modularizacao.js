function principal(){
   let idade = 10
   passagemValor(idade)
   alert(idade)

   let idades = []
   idades[0] = 20
   idades[1] = 21
   idades[2] = 21
   passagemReferencia(idades)
   alert(idades)
}

function passagemValor(){
  idade = 20
}

function passagemReferencia(idades){
   idades[0] = 0
   idades[1] = 0
   idades[2] = 0
}





var btChamarFuncao = document.getElementById('btChamarFuncao')
btChamarFuncao.addEventListener('click', principal)