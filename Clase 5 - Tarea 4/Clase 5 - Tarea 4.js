const listado = document.querySelectorAll('li')

let array = []

for (let i = 0; i < listado.length; i++){
    array.push(Number(listado[i].textContent))
}

// calcular promedio

function calcularPromedio (){
    let sumatoria = 0

    for (let i = 0; i < array.length; i++){
        sumatoria += array[i]
    }
    let promedio = sumatoria / array.length
    return Math.floor(promedio)
}
document.querySelector(".promedio").textContent = 'El promedio de estos numeros es ' + calcularPromedio(array)

// numero mas pequeño

function econtrarNumeroMenor (){
    let numeroMasChico = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] < numeroMasChico){
            numeroMasChico = array[i]
        }
    }
    return numeroMasChico
}
document.querySelector(".numero-mas-pequeño").textContent = 'El numero más chico es ' + econtrarNumeroMenor(array)

// numero mas grande

function encontrarNumeroMayor (){
    let numeroMasGrande = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] > numeroMasGrande){
            numeroMasGrande = array[i]
        }
    }
    return numeroMasGrande
}
document.querySelector(".numero-mas-grande").textContent = 'El numero más grande es ' + encontrarNumeroMayor(array)

// numero mas frecuente

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
    return numeroMasFrecuente
}
document.querySelector(".numero-mas-frecuente").textContent = 'El numero mas frecuente es ' + encontrarNumeroMasFrecuente(array)