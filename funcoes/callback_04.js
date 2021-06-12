const carrinho = [
    {nome:'caneta', qtde: 10, preco: 1.50},
    {nome:'impressora', qtde: 20, preco: 279.80},
    {nome:'caderno', qtde: 22, preco: 12.69},
    {nome:'lapis', qtde: 17, preco: 5.90},
    {nome:'tesoura', qtde: 90, preco: 8.20}
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0
const qtdemaiorIgualAZero = item => item.qtde >= 0
const qtdeMuitoGrande = item => item.qtde >= 1000

const nomeItensValido = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome)

//console.log(itensValido)
//console.log(nomeItensValido)

Array.prototype.meuFilter = function(fn){
    const novoArray = []
        
        for(let i = 0; i < this.length; i++){
            if(fn(this[i], i, this)){
                novoArray.push(this[i])
            }
        }
        
        return novoArray
}