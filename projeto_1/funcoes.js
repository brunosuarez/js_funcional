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

function elementosTerminadosCom(padraoTextual){
    return function(array){
        return array.filter(el => el.endsWith(padraoTextual))
    }
}

function removerElementosSeVazio(array){
    return array.filter(el => el.trim())
}

function removerElementosSeIncluir(padraoTextual){
    return function(array){
        return array.filter(el => el.includes(padraoTextual))
    }
}

function removerElementosSeApenasNumero(array){
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos){
    return function(array){
        return array.map(el => {
            let textSemSimbolos = el
            simbolos.forEach(simbolo => {
                textSemSimbolos = textSemSimbolos.split(simbolo).join('')
            })
            return textSemSimbolos
        })
    }
}

function mesclarElemenentos(array){
    return array.join('')
}

function separarTextoPor(simbolo) {
    return function(texto){}
}

function agruparElementos(palavras){
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1
        acc[el] = { elemento: el, qtde }
        return acc
    }, {}))
}
    

function ordenarPorAtributoNumerico(attr){
    return function(array){
        const asc = (o1, o2) => o2[attr] - o1[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordem === 'asc' ? asc : desc)
    }
}


module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerminadosCom,
    removerElementosSeVazio,
    removerElementosSeIncluir,
    removerElementosSeApenasNumero,
    removerSimbolos,
    mesclarElemenentos,
    separarTextoPor, 
    agruparElementos,
    ordenarPorAtributoNumerico
}