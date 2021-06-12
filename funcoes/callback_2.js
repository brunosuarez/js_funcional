const fs = require('fs')
const { readFile } = require('node:fs')
const path = require('path')

const caminho = path.join(__dirname)

function exibirConteudo(_, conteudo){
    console.log(conteudo.toString())
}

fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, (_,conteudo) => console.log(conteudo.toString()))

fs.readFileSync(caminho)//para ler em modo assincrono 