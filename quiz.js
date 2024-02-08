const perguntas = [
    {
        pergunta: "Qual é o tipo de linguagem o JavaScript?",
        respostas: [
            "Linguagem de marcação",
            "Linguagem de programação",
            "Linguagem de consulta"
        ],
        correta: 1
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável mutável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 1
    },
    {
        pergunta: "Como se faz um comentário de uma linha em JavaScript?",
        respostas: [
            "// Comentário",
            "<!-- Comentário -->",
            "/* Comentário */"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '+' em JavaScript?",
        respostas: [
            "Concatenar strings",
            "Multiplicação",
            "Divisão"
        ],
        correta: 0
    },
    {
        pergunta: "Como você converte uma string para um número em JavaScript?",
        respostas: [
            "toInt()",
            "parseInt()",
            "convertToNumber()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre == e === em JavaScript?",
        respostas: [
            "== compara apenas valores, === compara valores e tipos",
            "== compara apenas tipos, === compara valores e tipos",
            "Não há diferença entre eles"
        ],
        correta: 0
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Um tipo de variável",
            "Uma estrutura de controle",
            "Uma coleção de elementos"
        ],
        correta: 2
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        respostas: [
            "function myFunction()",
            "def myFunction()",
            "var myFunction = function()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado de 3 + '3' em JavaScript?",
        respostas: [
            "6",
            "'33'",
            "33"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Document Object Model - uma representação estruturada do documento HTML",
            "Data Object Model - uma estrutura para gerenciar dados",
            "Dynamic Object Model - uma abordagem dinâmica para criar objetos"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')


// loop ou repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove()

    // Coloca as perguntas na tela
    quiz.appendChild(quizItem);
}