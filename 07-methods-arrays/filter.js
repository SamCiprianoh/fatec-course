let numbers = [7, 3, 9, 16, 25]

let primos = numbers.filter(value => {
   let temDivisor = 0
   for(let i = 1; i <= value; i++){
      if(value % i == 0){
         temDivisor++
      }
   }

   if(temDivisor == 2){
      console.log(`${value} é primo`)
   } else{
      console.log(`${value} não é primo`)   
   }

})
console.log(primos)


