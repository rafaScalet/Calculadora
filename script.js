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
            if (num2 === 0) {
                alert('Não é possível dividir por zero!')
                return
            }
            resultado = num1 / num2
            break
        default:
            alert('Operação inválida!')
            return
    }

    document.getElementById('resultado').value = resultado

    const novoHistorico = `<p>${num1} ${operacao} ${num2} = ${resultado}</p>`
    const historico = document.getElementById('historico')

    historico.innerHTML = novoHistorico + historico.innerHTML

    if (historico.children.length > 10) {
        historico.removeChild(historico.childNodes[10])
    }
}