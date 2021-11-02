const listado = document.querySelectorAll('li')

let array = []

for (let i = 0; i < listado.length; i++){
    array.push(Number(listado[i].textContent))
}


function calcularPromedio (){
    let sumatoria = 0

    for (let i = 0; i < array.length; i++){
        sumatoria += array[i]
    }
    let promedio = sumatoria / array.length
    return document.querySelector(".promedio").textContent = 'El promedio de estos numeros es ' + Math.floor(promedio)
}

calcularPromedio ()

function encontrarNumeroMenor (){
    let numeroMasChico = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] < numeroMasChico){
            numeroMasChico = array[i]
        }
    }
    return document.querySelector(".numero-mas-pequeño").textContent = 'El numero más chico es ' + numeroMasChico
}

encontrarNumeroMenor ()

function encontrarNumeroMayor (){
    let numeroMasGrande = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] > numeroMasGrande){
            numeroMasGrande = array[i]
        }
    }
    return document.querySelector(".numero-mas-grande").textContent = 'El numero más grande es ' + numeroMasGrande
}

encontrarNumeroMayor ()

function encontrarNumeroMasFrecuente (){
    let numeroMasFrecuente = 0
    for (let i = 0; i < array.length; i++){
        let contador = 0

        for ( let j = 0; j < array.length; j++){
            if (array[i] === array[j]){
                contador++
            }
        }

        if (contador > numeroMasFrecuente){
            numeroMasFrecuente = array[i]
        }
    }
    return document.querySelector(".numero-mas-frecuente").textContent = 'El numero mas frecuente es ' + numeroMasFrecuente
}

encontrarNumeroMasFrecuente ()
