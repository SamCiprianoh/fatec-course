   let estoque = []
   for(let i = 0; i < 2; i++){
      estoque[i] = []
      for(let j = 0; j < 3; j++){
         estoque[i][j] = Number(prompt(`Qual quantidade de ${vetProduto[i].nome} no [ARMAZEM ${j+1}]:`))
      }
   }

   //Processamento
   let armazemIndividual = []
   let armazemTotal = 0
   for(let j = 0; j < 3; j++){
      armazemIndividual[j] = 0
      for(let i = 0; i < 2; i++){
         armazemIndividual[j] = armazemIndividual[j] + estoque[i][j]
      }
      armazemTotal += armazemIndividual[j]
      console.log(`No ARMAZEM ${j+1} tem ${armazemIndividual[j]} produtos estocados.`)
   }

   console.log(`Em todos ARMAZENS tem o total de ${armazemTotal} produtos estocados.`)


   let maiorEstoque = estoque[0][0]
   let menorEstoque = estoque[0][0]
   let posMaior = 0
   let posMenor = 0
   for(let i = 0; i < 2; i++){
      for(let j = 0; j < 3; j++){
         if(estoque[i][j] > maiorEstoque){
            maiorEstoque = estoque[i][j]
            posMaior = i
         } 
         if(estoque[i][j] < menorEstoque){
            menorEstoque = estoque[i][j]
            posMenor = i
         }
      }
   }
   console.log(`O maior estoque com total de ${maiorEstoque} ${vetProduto[posMaior].nome} no valor de [R$${vetProduto[posMaior].preco}/Un.]`)
   console.log(`O menor estoque com total de ${menorEstoque} ${vetProduto[posMenor].nome} no valor de [R$${vetProduto[posMenor].preco}/Un.]`)

  
   console.log(vetProduto)
   console.log(estoque)
   console.log(armazemIndividual)
   console.log(maiorEstoque)
   console.log(menorEstoque)  