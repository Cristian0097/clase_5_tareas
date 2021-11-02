const $botonSaludarUsuario = document.querySelector("#saludar-usuario")
let $h1 = document.querySelector("#h1")
let $textoResultado = document.querySelector("#texto-resultado")

$botonSaludarUsuario.onclick = function (){
    const $primerNombre = document.querySelector("#primer-nombre").value
    const $segundoNombre = document.querySelector("#segundo-nombre").value
    const $apellido = document.querySelector("#apellido").value
    const $edadUsuario = Number(document.querySelector("#edad-usuario").value)

    $h1.textContent = "Bienvenido, " + $primerNombre
    $textoResultado.textContent = ` ${$primerNombre}  ${$segundoNombre}  ${$apellido}  ${$edadUsuario}  Años`

    return false
}

