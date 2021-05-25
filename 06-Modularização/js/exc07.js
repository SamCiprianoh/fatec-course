/*==== MODAL ====*/
function iniciaModal(modalId){
   const modal = document.getElementById(modalId)
   modal.classList.add('mostrar')
   modal.addEventListener('click', (e) => {
      if(e.target.id == modalId || e.target.id == 'fechar' || e.target.id == 'btCadastrarPesquisa'){
         modal.classList.remove('mostrar')
      }
   })
}

function clicaBtn(idBtn, idModal){
   const btn = document.getElementById(idBtn)
   btn.addEventListener('click', () => iniciaModal(idModal), false)
   return
}

clicaBtn('btPesquisa', 'modal__salario')


/*==== EXERCÍCIO 07 ====*/

let entrevistados = []

function entrada(){
   let inSalario = document.getElementById('inSalario')
   let inNome = document.getElementById('inNome')
   let inFilhos = document.getElementById('inFilhos')

   let dados = {}
   dados.nome = inNome.value
   dados.salario = Number(inSalario.value) 
   dados.filhos = Number(inFilhos.value)
   entrevistados.push(dados)
   console.log(entrevistados)
   exc07(entrevistados)

   document.getElementById('forms').reset()
}

function exc07(entrevistados){
   let somaSalario = 0
   let mediaSalario = 0

   let somaFilhos = 0
   let mediaFilhos = 0

   let somaSalario350 = 0
   let mediaPercentual350 = 0

   for(let i = 0; i < entrevistados.length; i++){
      somaSalario += entrevistados[i].salario
      mediaSalario = somaSalario / entrevistados.length

      somaFilhos += entrevistados[i].filhos
      mediaFilhos = somaFilhos / entrevistados.length

      if(entrevistados[i].salario < 350){
         somaSalario350++
      }
   }

   mediaPercentual350 = mediaPercentual350 * (somaSalario350 * entrevistados.length / 100)
}

let btCadastrarPesquisa = document.getElementById('btCadastrarPesquisa')
btCadastrarPesquisa.addEventListener('click', entrada, false)
