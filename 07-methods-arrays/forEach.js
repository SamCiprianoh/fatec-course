let mostraPares = elemento => {
   if(elemento % 2 === 0){
      console.log(elemento)
   }
}

let vetor1 = [11, 23, 30, 45, 48]

vetor1.forEach(mostraPares)

/*============================*/

let vetor2 = [11, 23, 30, 45, 48]

vetor2.forEach(elemento => {
   if(elemento % 2 === 0){
      console.log(elemento)
   }
})


