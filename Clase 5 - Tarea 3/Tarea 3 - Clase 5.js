const $botonCalcular = document.querySelector("#calcular")

$botonCalcular.onclick = function(){
    let $horas = document.querySelectorAll("#horas")
    let $minutos = document.querySelectorAll("#minutos")
    let $segundos = document.querySelectorAll("#segundos")

    let sumaHoras = 0
    let sumaMinutos = 0
    let sumaSegundos = 0

    let $resultado = document.querySelector("#resultado")

    for (let i = 0; i < $horas.length; i++){
        sumaHoras += Number($horas[i].value)
    }

    for (let i = 0; i < $minutos.length; i++){
        sumaMinutos += Number($minutos[i].value)
    }

    for (let i = 0; i < $segundos.length; i++){
        sumaSegundos += Number($segundos[i].value)
    }

    const totalSumaDeSegundos = sumaHoras*3600 + sumaMinutos*60 + sumaSegundos
    const horasDeLosVideos = Math.floor(totalSumaDeSegundos / 3600)
    const minutosRestantes = Math.floor((totalSumaDeSegundos % 3600) / 60)
    const segundosRestantes = (totalSumaDeSegundos % 3600) % 60

    $resultado.textContent = `El tiempo total es de ${horasDeLosVideos} horas ${minutosRestantes} minutos y
    ${segundosRestantes} segundos`

return false
} 