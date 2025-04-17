// Capturando os elementos do input
const qtdSorteio = document.getElementById("qtd-sorteios")
const start = document.getElementById("start")
const end = document.getElementById("end")
const button = document.getElementById("button")
const toggle = document.getElementById("btn-tg")

// Capturando aside
const aside1 = document.querySelector(".aside-1")
const aside2 = document.querySelector(".aside-2")

// Capturando botão do reset
const buttonReset = document.getElementById("button-reset")

// Capturando elemento do resultado
const divResultado = document.querySelector(".result-number")


button.addEventListener("click", function(event){
    event.preventDefault()
    const result = sortear(Number(qtdSorteio.value), Number(start.value), Number(end.value))
    exibeResultado(result)   
    
})

buttonReset.addEventListener("click", function(event){
    aside2.classList.add("hidden")
    aside1.classList.remove("hidden")
})

// Função para sortear
/**
 * 
 * @param {Number} qtdSorteio 
 * @param {Number} start 
 * @param {Number} end 
 * @returns array<Number>
 */
function sortear(qtdSorteio = 1, start = 1, end = 100) {
    const resultados = []
    const totalDisponiveis = end - start + 1
    const numerosDisponiveis = []

    // Preencher a lista de números disponiveis
    for (let i = start; i <= end; i++) {
        numerosDisponiveis.push(i)                
    }

    // Sortear
    for (let i = 0; i < qtdSorteio; i++) {
        const index = Math.floor(Math.random() * numerosDisponiveis.length)
        const numero = toggle.checked ? numerosDisponiveis.splice(index,1)[0] : numerosDisponiveis[index]
        resultados.push(numero)        
    }

    return resultados;
}

// Exibe resultado do sorteio
function exibeResultado(result = 0) {
    aside1.classList.add("hidden")
    aside2.classList.remove("hidden")
    divResultado.textContent = ""

    // Criando o elemento p para receber o resultado
    for (let index = 0; index < result.length; index++) {
        const pResultado = document.createElement("p")
        pResultado.textContent = result[index]

        // Adicionado o p na div
        divResultado.append(pResultado)
    }
    
}