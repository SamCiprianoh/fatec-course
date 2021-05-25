function exc00(){

   let matriz = []
   let nome = []


   //Entrada de dados
   for(let i = 0; i < 4; i++){
      nome[i] = prompt(`Informe o nome do aluno:`)
      matriz[i] = []
      for(let j = 0; j < 2; j++){
         matriz[i][j] = Number(prompt(`Informe a ${j+1}ª nota do aluno ${nome[i]}:`))
      }
   }


   //Processamento
   var medias = []

   for(let i = 0; i < 4; i++){
      medias[i] = 0
      for(let j = 0; j < 2; j++){
         medias[i] = (medias[i] + matriz[i][j])
      }
      medias[i] = medias[i] / matriz[i].length
   }

   //Aprovados
   let mediaFinal = 0
   for(let i = 0; i < 4; i++){
      mediaFinal = mediaFinal + medias[i]
      if(medias[i] >= 6){
         alert(`O aluno ${nome[i]} foi aprovado com média nota ${medias[i]}`)
      }
   }
   alert(`Média final ${mediaFinal/4}`)

   console.log(nome)
   console.log(matriz)
   console.log(medias)
   
}

function exc05(){
   let vendasSemana = []
   let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

   for(let i = 0; i < 12; i++){
      vendasSemana[i] = []
      for(let j = 0; j < 4; j++){
         vendasSemana[i][j] = Number(prompt(`Informe o total vendido na ${j+1}ª semana do mês ${mes[i]}:`))
      }
   }

   let totalMes = []
   let totalAno = 0
   for(let i = 0; i < 12; i++){
      totalMes[i] = 0
      for(let j = 0; j < 4; j++){
         totalMes[i] = totalMes[i] + vendasSemana[i][j]
      }
      totalAno = totalAno + totalMes[i]
      console.log(`O total vendido em ${mes[i]} é de R$${totalMes[i]}\n`)
   }

   let totalSemanas = []

   for(let j = 0; j < 4; j++){
      totalSemanas[j] = 0  
      for(let i = 0; i < 12; i++){
         totalSemanas[j] = totalSemanas[j] + vendasSemana[i][j]
      }
      console.log(`Total vendido na ${j+1}ª semana do ano foi de ${totalSemanas[j]}`)
   }
   console.log(`Total vendido no ano inteiro foi de ${totalAno}`)


   


   console.log(vendasSemana)
   console.log(totalMes)
   console.log(totalSemanas)
   console.log(totalAno)
}

function exc22(){
   let num = []

   for(let i = 0; i < 2; i++){
      num[i] = []
      for(let j = 0; j < 3; j++){
         num[i][j] = Number(prompt(`Informe o ${j+1}º número do Array ${i+1}:`))
      }
   }

   let somaColuna = []
   for(let j = 0; j < 3; j++){
      for(let i = 0; i < 3; i++){
        
      }
   }

   console.log(num)
}

function exc23(){
   let num = []
   for(let i = 0; i < 2; i++){
      num[i] = []
      for(let j = 0; j < 3; j++){
         num[i][j] = Number(prompt(`Informe o ${j+1}º número do ${i+1}º Array:`))
      }
   }

   let pares = []
   let somaImpar = 0
   let somaElementos = 0
   let media = 0
   for(let i = 0; i < 2; i++){
      for(let j = 0; j < 3; j++){
        if(num[i][j] % 2 == 0){
         pares.push(num[i][j])
        }
        if(num[i][j] % 2 != 0){
           somaImpar += num[i][j]
        }
        somaElementos += num[i][j]
      }
      media = somaElementos / (num[i].length * num.length)
   }

   console.log(`Tem ${pares.length} elementos pares dentro da matriz`)
   console.log(`A soma de todos os elementos ímpares é de: ${somaImpar}`)
   console.log(`A média é de ${media.toFixed(2)}`)
   console.log(num)
   console.log(pares)
   console.log(somaImpar)
   console.log(somaElementos)
   console.log(media)
}

function exc24(){

   //Leitura de dados
   let num = []
   for(let i = 0; i < 2; i++){
      num[i] = []
      for(let j = 0; j < 3; j++){
         num[i][j] = Number(prompt(`Informe o ${j+1}º número do ${i+1}º Array:`))
      }
   }

   let somaColuna = []
      for(let j = 0; j < 3; j++){
         somaColuna[j] = 0
         for(let i = 0; i < 2; i++){
            somaColuna[j] += num[i][j]
         }
         if(somaColuna[j] > 10){
            console.log(`A soma da ${j+1}º coluna é de: ${somaColuna[j]}`)
         } else {
            console.log(`[Erro!] Elemento menor que [10]`)
         }
         
      }
   

   //Processamento e Saída
   console.log(num)
   console.log(somaColuna)
}

function exc25(){

   //Leitura de dados
   let vetProduto = []

   for(let i = 0; i < 2; i++){
      produto = new Object
      produto.nome = prompt(`Informe o nome do ${i+1}º produto:`)
      produto.preco = Number(prompt(`Informe o valor do(a) ${produto.nome}:`))
      vetProduto.push(produto)
   }

   let estoque = []
   for(let j = 0; j < 3; j++){
      estoque[j] = []
      for(let i = 0; i < 2; i++){
         estoque[j][i] = Number(prompt(`Qual quantidade de ${vetProduto[i].nome} no [ARMAZEM ${j+1}]:`))
      }
   }

   //Processamento e Saída
   let armazemEstoqueIndividual = []
   let armazemEstoqueTotal = 0
   for(let j = 0; j < estoque.length; j++){
      armazemEstoqueIndividual[j] = 0
      for(let i = 0; i < estoque[j].length; i++){
         armazemEstoqueIndividual[j] += estoque[j][i]
      }
      armazemEstoqueTotal += armazemEstoqueIndividual[j]
      console.log(`No ARMAZEM ${j+1} tem ${armazemEstoqueIndividual[j]} produtos estocados.`)
   }

   console.log(`Em todos ARMAZENS tem o total de ${armazemEstoqueTotal} produtos estocados.`)


   let maiorEstoque = estoque[0][0]
   let posMaior = 0
   let posArmazemMaior = 1

   let menorEstoque = estoque[0][0]
   let posMenor = 0
   let posArmazemMenor = 1
   for(let j = 0; j < estoque.length; j++){
      for(let i = 0; i < estoque[j].length; i++){
         if(estoque[j][i] > maiorEstoque){
            maiorEstoque = estoque[j][i]
            posMaior = i
            posArmazemMaior = j+1
         } 
         if(estoque[j][i] < menorEstoque){
            menorEstoque = estoque[j][i]
            posMenor = i
            posArmazemMenor = j+1
         }
      }
   }
   console.log(`O maior estoque está no ${posArmazemMaior}º ARMAZEM, com total de ${maiorEstoque} ${vetProduto[posMaior].nome} no valor de [R$ ${vetProduto[posMaior].preco}/Un.]`)
   console.log(`O menor estoque está no ${posArmazemMenor}º ARMAZEM, com total de ${menorEstoque} ${vetProduto[posMenor].nome} no valor de [R$ ${vetProduto[posMenor].preco}/Un.]`)

   let totalProdutoIndividual = []
   let custoArmazemIndividual = []
   let contador = 0
   for(let j = 0; j < 3; j++){
      for(let i = 0; i < 2; i++){
         totalProdutoIndividual.push(estoque[j][i] * vetProduto[i].preco)
      }
      custoArmazemIndividual.push(totalProdutoIndividual[contador] + totalProdutoIndividual[contador+1])
      contador += 2 
      console.log(`O custo total do ${j+1}º ARMAZEM é de R$ ${custoArmazemIndividual[j]}`)
   }

   console.log(vetProduto)
   console.log(estoque)
   console.log(armazemEstoqueIndividual)
}


