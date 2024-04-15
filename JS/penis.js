let btn = document.getElementById('btn')

let arrPessoas = []
function cadastrar() {

    let pessoa = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value, 
        equipe: document.getElementById('equipe').value,
        grupo: document.getElementById('grupo').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value, 
        idade: document.getElementById('idade').value, 
        numero: document.getElementById('numero').value,
        imc: calcularImc(peso, altura),
    }
    arrPessoas.push(pessoa)
    console.log(arrPessoas);


    div.innerHTML = `
                    NOME: ${pessoa.nome} ${pessoa.sobrenome} 
                    Categoria: ${pessoa.grupo} 
                    IMC:${calcularIMC(pessoa.peso, pessoa.altura).toFixed(2)} - 
                    CLASSIFICAÇÃO: ${calcularClassifi(calcularImc(pessoa.peso, pessoa.altura))}
    `
    console.log(nome, sobrenome, equipe, idade, numero,  grupo, peso, altura, imc);

    calcularClassifi(imc)

    imprimirdados()


}
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function calcularClassifi() {
    let imcClassifi = ''
    if (imc <= 18.5) {
        return "inválido para competir"
    }
    else if (imc <= 24.9) {
        return "Válido para competir"
    }
    else if (imc <= 29.9) {
        return "Válido para competir"
    }
    else if (imc <= 34.9) {
        return "Válido para competir"
    }
    else if (imc <= 39.9) {
        return "Válido para competir"
    }
    else {
        return "Válido para competir"
    }

    div.innerHTML = imcClassifi + "</p>"
}
function imprimirdados() {
    div.innerHTML = ''
    for (let i = 0; i < arrPessoas.length; i++) {
        div.innerHTML += `
        <tr> 
            <td>${arrPessoas[i].nome} ${arrPessoas[i].sobrenome}</td>
            <td>${arrPessoas[i].grupo}</td>
            <td>${calcularIMC(arrPessoas[i].peso, arrPessoas[i].altura).toFixed(2)} -  ${calcularClassifi(calcularImc(arrPessoas[i].peso, arrPessoas[i].altura))}</td>
        </tr>
        `
    }

}

btn.addEventListener('click', cadastrar)
