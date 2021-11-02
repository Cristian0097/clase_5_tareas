const $botonCalcular = document.querySelector("#calcular-salario")

$botonCalcular.onclick = function(){
    const diasHabilesEnUnAnio = 261
    const mesesEnUnAnio = 12
    const salarioAnual = Number(document.querySelector("#salario-usuario").value)
    const salarioMensual = salarioAnual / mesesEnUnAnio
    const salarioDiario = salarioAnual / diasHabilesEnUnAnio
    
    document.querySelector("#salario-mensual").value = salarioMensual
    document.querySelector("#salario-diario").value = salarioDiario 
    return false
} 
