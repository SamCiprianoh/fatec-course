function vetor1(){
   
}




function vetor3(){
   let vet = []
   for(let i = 0; i < 3; i++){
      let objeto = new Object()

      objeto.codigo = prompt(`Informe o código do produto ${i+1}`)
      objeto.qtde = Number(prompt(`Informe a quantidade do produto ${i+1}`))

      vet.push(objeto)
      console.log(`Produto inserido com sucesso`)
   }

   let cliente = prompt(`Informe o código do cliente`)

   do {
      let produto = prompt(`Informe o código do produto para compra`)
      let achou = 0


      for(let i = 0; i < 3; i++){
         if(produto == vet[i].codigo){
            achou = 1
            let qtdeCompra = Number(prompt(`Vai comprar quanto?`))
            if(qtdeCompra <= vet[i].qtde){
               vet[i].qtde = vet[i].qtde - qtdeCompra}
               console.log(`Venda realizada com sucesso - ${vet[i].qtde}`)
         } else {
            console.log(`Estoque insuficiente`)
         }
      }
      if(achou == 0){
         console.log(`Produto não existe`)
      }
      cliente = prompt(`Informe código do novo cliente. Digite 0 para encerrar`)


      }
      while(cliente != 0)
}


function vetor6(){
   let vet = []
   for(let i = 0; i < 3; i++){
      let objeto = new Object()

      objeto.nomes = prompt(`Informe o nome do(a) ${i+1}º vendedor(a):`)
      objeto.vendas = Number(prompt(`Informe o total de vendas do(a) ${objeto.nomes}:`))
      objeto.percentual = Number(prompt(`Informe o percentual de comissão do(a) ${objeto.nomes}:`))

      objeto.comissao = objeto.vendas * objeto.percentual / 100

      vet.push(objeto)

      console.log(`Relatório \nVendedor: ${vet[i].nomes} \nComissão a receber: ${vet[i].comissao}`)
   }

   



   let totalVendas = 0
   for(i = 0; i < 3; i++){
      totalVendas = vet[i].vendas + totalVendas
   }

   console.log(`Total de vendas é ${totalVendas}`)


}






