function questao1(){
   let opt = 0; let metragem = 0; let quantidade = 0; let valor = 0; let andar = 0; let posicaoSol = ''; let valorFinal = 0;

   while (opt != 4) {
       opt = Number(prompt('Menu de opções: \n1- Valor total: \n2- Acréscimo em função do andar: \n3- Acréscimo em função da posição do sol: \n4- Sair:'))

       if (opt == 1) {
         metragem = Number(prompt('Digite a metragem do apartamento em m²: '))
         quantidade = Number(prompt('Digite a quantidade de garagem do apartamento: '))
  
         if (metragem <= 80) {
             if (quantidade == 1) {
                 valor = 300000
             } else if (quantidade == 2) {
                 valor = 320000
             } else if (quantidade == 3) {
                 valor = 340000
             }
         } else if (metragem > 80 && metragem < 120) {
             if (quantidade == 1) {
                 valor = 400000
             } else if (quantidade == 2) {
                 valor = 420000
             } else if (quantidade == 3) {
                 valor = 440000
             }
         } else if (metragem > 120) {
             if (quantidade == 1) {
                 valor = 500000
             } else if (quantidade == 2) {
                 valor = 520000
             } else if (quantidade == 3) {
                 valor = 540000
             }
         }
       } else if (opt == 2) {
         andar = Number(prompt('Digite o andar do apartamento que comprará:'))

         if (andar == 1) {
             valor = valor + 10000
         } else if (andar == 2) {
             valor = valor + 20000
         } else if (andar == 3) {
             valor =  valor + 30000
         }
       } else if (opt == 3) {
         posicaoSol = prompt('Digite a posição do sol que mais encomoda (M - Manhã ou T - Tarde!)').toUpperCase()

         if (posicaoSol == 'M') {
             valorFinal = valor + (valor * 0.05)
         } else if (posicaoSol == 'T') {
             valorFinal = valor + (valor * 0.08)
         }
       } else if (opt == 4) {
           console.log('Obrigado!')
       } else {
           console.log('Opção Inválida! Tente novamente.')
       }
   }

   if (valorFinal > 0) {
      console.log(`O valor final do apartamento é de R$ ${valorFinal.toFixed(2)}`)
   } else {
      console.log(`O valor final do apartamento é de R$ ${valor.toFixed(2)}`)
   }
}

function questao2(){
   let maquinas
   let vetMaquinas = []
   let superior3Anos = 0
   let idadeMaquinas = 0
   let mediaIdade = 0
   let contador = 0
   let funcaoCorte = 0
   let porcentagemCorte = 0
   let maquinasAcabamento = 0

   for(let i = 0; i < 2; i++){
      maquinas = new Object()
      maquinas.idade = Number(prompt(`Digite a idade da ${i+1}ª máquina`))
      maquinas.peso = Number(prompt(`Digite o peso da ${i+1}ª máquina`))
      maquinas.altura = Number(prompt(`Digite a altura da ${i+1}ª máquina`))
      
      maquinas.funcao = prompt(`Função da ${i+1}ª máquina: \nC - Corte \nA - Aparar\nX - Chanfrar`).toUpperCase()
      maquinas.departamento = prompt(`Departamento da ${i+1}ª máquina: \nA - Acabamento \nC - Criação \nP - Produção`).toUpperCase()

      vetMaquinas.push(maquinas)

      if(vetMaquinas[i].idade > 3 && vetMaquinas[i].peso < 10.5){
         superior3Anos++
      }
      if(vetMaquinas[i].altura < 8.5){
         contador++
         idadeMaquinas = idadeMaquinas + vetMaquinas[i].idade 
         mediaIdade = idadeMaquinas / contador
      }
      if(vetMaquinas[i].funcao === 'C'){
         funcaoCorte++
      }
      if(vetMaquinas[i].funcao != 'X' && vetMaquinas[i].departamento === 'A' ){
         maquinasAcabamento++
      }
      
   }
   porcentagemCorte = funcaoCorte * 100 / vetMaquinas.length
   //console.log(`Máquinas com idade superior a 3 anos e peso inferior a 10.5kg é de: ${superior3Anos}`)
   //console.log(`A média de idade das máquinas com altura inferior a 8.5 é de: ${mediaIdade}`)
   //console.log(`A porcentagem de máquinas com função de corte é de: ${porcentagemCorte}`)
   //console.log(`A quantidade de máquina de acabamento não usadas para chanfração é de: ${maquinasAcabamento}`)
   console.log(vetMaquinas) 
}

function questao3(){
    let vetPessoas = []
    let vetImoveis = []
    let pessoas, imoveis
    let opcoes 

    while (opcoes != 4) {
        opcoes = Number(prompt(`Escolha uma opção abaixo\n 1. Cadastrar proprietário\n 2. Cadastrar imóvel\n 3. Mostrar Valor total dos imóveis:\n 4. Sair`))

        if(opcoes == 1){
            pessoas = new Object 

            pessoas.nome = prompt(`Informe o nome:`) 
            pessoas.cpf = Number(prompt(`Informe o CPF do(a) ${pessoas.nome}:`)) 
            pessoas.rg  = Number(prompt(`Informe o RG do(a) ${pessoas.nome}:`))
            vetPessoas.push(pessoas)
        } else if(opcoes == 2){
            imoveis = new Object
            imoveis.endereco = new Object

            
            imoveis.rg = Number(prompt(`Informe o RG do(a) proprietário(a):`))
            
            let cadastrado
            for(let i = 0; i < vetPessoas.length; i++){
            
                if(imoveis.rg == vetPessoas[i].rg){
                    imoveis.endereco.rua = prompt(`Informe a endereço do imóvel:`)
                    imoveis.endereco.numero = Number(prompt(`Informe o número do imóvel:`))
                    imoveis.tamanho = Number(prompt(`Informe o tamanho do imóvel:`))
                    imoveis.valor = Number(prompt(`Informe o valor R$: do imóvel:`)) 
                    cadastrado = 1
                }  

            }    
                
            if(!cadastrado){
                alert(`Proprietário não cadastrado.`)
            } 

            if(cadastrado){
                vetImoveis.push(imoveis)
            }    
    
        } else if(opcoes == 3){
            let rg = Number(prompt(`Informe o RG do(a) proprietário(a):`))

            let achou = 0
            let valorTotal = 0
            for(let i = 0; i < vetImoveis.length; i++){
                if(rg == vetImoveis[i].rg){
                    valorTotal += vetImoveis[i].valor
                    achou = 1
                } 
            }

            let nome
            for(let i = 0; i < vetPessoas.length; i++){
                if(rg == vetPessoas[i].rg){
                    nome = vetPessoas[i].nome
                }
            }

            if(achou == 1) {
                alert(`O valor total dos imóveis do(a) ${nome} é de R$${valorTotal}`)
            } else if(achou == 0){
                alert(`Proprietário não tem imóveis ou cadastrado.`)
            } 

        } else if(opcoes == 4){
            
            alert(`Obrigado!`)
        } else {
            alert('Opção inválida! Tente novamente')
        }
    }
    
    console.log(vetPessoas)
    console.log(vetImoveis)
}

