function exc01(){
   let opcoes
   let vendedores
   let funcionarios = []

   while(opcoes != 7){
      vendedores = new Object()
      opcoes = Number(prompt(`1. Cadastrar vendedor \n2. Cadastrar venda \n3. Consultar as vendas mensal \n4. Consultar o total de vendas \n5. Vendendor do mês \n6. Mês com mais vendas \n7. Finalizar`))

      if(opcoes == 1){
         vendedores.codigo = Number(prompt(`Digite o código do vendedor:`))
         vendedores.nome = prompt(`Digite o nome do vendedor:`)
         funcionarios.push(vendedores)
      }

      
   }

   console.log(funcionarios)

}

function exc02(){
   let vetor = []

   for(let i = 0; i < 2; i++){
      let objeto = new Object()
      objeto.salario = Number(prompt(`Informe o salário:`))
      objeto.filhos = Number(prompt(`Informe o número de filhos:`))
      objeto.genero = prompt(`Informe o gênero: F para feminino e M para masculino`).toUpperCase()
      objeto.idade = Number(prompt(`Informe a idade:`))
      vetor.push(objeto)
   }

   let somaSalario = 0
   let somaFilhos = 0
   let maiorSalario = vetor[0].salario
   let qtdMulheres = 0
   for(let j = 0; j < vetor.length; j++){
      somaSalario = vetor[j].salario + somaSalario
      somaFilhos = vetor[j].filhos + somaFilhos

      if(vetor[j].salario > maiorSalario){
         maiorSalario = vetor[j].salario
      }
      if(vetor[j].genero == 'F'){
         qtdMulheres++
      }
   }
   alert(`A média do salário é ${somaSalario/vetor.length}.\nA média dos filhos é ${somaFilhos/vetor.length}.\nO maior salário é ${maiorSalario}.\nO percentual de mulheres com salário maior que 1000 é ${qtdMulheres/vetor.length*100}%`)
}

function exc06(){
   let Clientes = [], Contas = []
   let objeto = new Object()

   
   
  
}