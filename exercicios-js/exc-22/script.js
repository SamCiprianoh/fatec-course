function calcula() {
    let idade, peso

    idade = Number(document.getElementById("idade").value)
    peso = Number(document.getElementById("peso").value)

    if (idade == 0 && peso == 0) {
       document.getElementById("resultado").innerHTML = `Dados inválidos`
    }
    else if (idade < 20 && peso < 60) {
       document.getElementById("resultado").innerHTML = `Grupo de risco: 9`
    } 
    else if (idade < 20 && peso >= 60 && peso <= 90) {
       document.getElementById("resultado").innerHTML = `Grupo de risco: 8`
    }
    else if (idade < 20 && peso > 90) {
       document.getElementById("resultado").innerHTML = `Grupo de risco: 7`
    }
    else if (idade >= 20 && idade <= 50 && peso < 60) {
       document.getElementById("resultado").innerHTML = `Grupo de risco: 6`
    }
    else if (idade >= 20 && idade <= 50 && peso >= 60 && peso <= 90) {
       document.getElementById("resultado").innerHTML = `Grupo de risco: 5`
    }
    else if (idade >= 20 && idade <= 50 && peso > 90) {
       document.getElementById("resultado").innerHTML = `Grupo de risco: 4`
    }
    else if (idade > 50 && peso < 60) {
       document.getElementById("resultado").innerHTML = `Grupo de risco: 3`
    }
    else if (idade > 50 && peso >= 60 && peso <= 90) {
       document.getElementById("resultado").innerHTML = `Grupo de risco: 2`
    }
    else if (idade > 50 && peso > 90) {
       document.getElementById("resultado").innerHTML = `Grupo de risco: 1`
    }

 }