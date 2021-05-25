function principal(){
   let x = []
   let a = []
   let b = []
   entrada(x)
   exc01(x, a, b)
   saida(a)
   saida(b)
}

function entrada(x){
   for(let i = 0; i < 10; i++){
      x.push(Number(prompt(`Informe o ${i+1}º número`)))
   }
}

function exc01(x, a, b){
   for(let i = 0; i < 10; i++){
      if(x[i] % 2 === 0){
         a.push(x[i])
      }
      if(x[i] % 2 > 0){
         b.push(x[i])
      }
   }
}

function saida(vet){
   alert(vet)
}



var btChamarFuncao = document.getElementById('btChamarFuncao')
btChamarFuncao.addEventListener('click', principal)