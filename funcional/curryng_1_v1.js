// function soma(a){
//     return function(b){
//         return function(c){
//             return a + b + c
//         }
//     }
// }

// console.log(soma(1)(2),(3))

function textoComTamanhoEntre(min){
    return function(max){
        return function(erro){
            return function(texto) {
                //Lazy Evaluation
                const tamanho = (texto || '').trim().length

            if(tamanho < min || tamanho > max){
            throw erro
            }
            }
        }
    }
    
}

function aplicarValidacao(fn, valor){
    try{
        fn(valor)
    }catch(e){
        return { error: e}
    }

}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto inválido!')

const p1 = { nome: 'A', preco: 14.99, desc: 0.25}
textoComTamanhoEntre((4)(255)('Nome inválido!')(p1.nome))