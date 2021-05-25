function principal(){
   let a = []
   let b = []
   let interseccao = []
   entrada(a)
   entrada(b)
   exc06(a, b, interseccao)
   saida(a, b, interseccao)
}

function entrada(vet){
   while(vet.length < 10) {
      let random = Math.floor(Math.random() * (50 - 0 + 1)) + 0
      if(vet.indexOf(random) === -1){
         vet.push(random)
      }
   }
}

function exc06(a, b, interseccao){
   for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
         if(b[i] == a[j]){
            interseccao.push(b[i]) 
         }
      }
   }
}
   
function saida(a, b, interseccao){
   if(interseccao.length > 0){
      console.log(`Vetor A: ${a} \n\nVetor B: ${b} \n\nIntersecção de A e B: ${interseccao}`)
   } else{
      console.log(`Vetor A: ${a} \n\nVetor B: ${b} \n\nNão há intersecção entre A e B`)
   }
   
}
   
let btChamarFuncao = document.getElementById('btChamarFuncao')
btChamarFuncao.addEventListener('click', principal)

