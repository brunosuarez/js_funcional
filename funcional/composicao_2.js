function composicao(...fns){
    return function(valor){
        return fns.reduce(async(acc, fn) => {
            if(Promise.resolve(acc) === acc){
                return fn(await acc)
            }
        }, valor)
    }
}

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto}!!!`
}

function tornarLento(texto){
   return new Promise((resolve))
}

const resultado = composicao(
    gritar,
    enfatizar,
    tornarLento
)('para')

console.log(resultado)