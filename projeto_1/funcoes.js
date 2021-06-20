const fs = require('fs')
const { resolve } = require('path/posix')
const path = require('path/posix')

function lerDiretorio(caminho){
    return new Promise((resolve, reject) => {
        try{
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        }catch(e){
            reject(e)
        }
    })
}

function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        try{
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf8'})
            resolve(conteudo.toString)
        }catch(e){
            reject(e)
        }
    })
}

function lerArquivos(caminhos){
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(array, padrao){
    return array.filter(el => el.endsWith(padrao))
}

module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivo,
    lerArquivos
}