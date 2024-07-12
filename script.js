function calcular(operacao){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)

    let resultado

    switch (operacao) {
        case '+': 
            resultado = num1 + num2
            break
        case '-': 
            resultado = num1 - num2
            break
        case '*':
            resultado = num1 * num2
            break
        case '/':
            resultado = num1 / num2
            break
        default:
            alert('Operação inválida!')
            return
    }

    document.getElementById('resultado').value = resultado
}