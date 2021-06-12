const nums = [1,2,3,4,5]
const dobro = (n, i, a) => n * 2 + i + a.length //pega o valor, o index e o array
console.log(nums.map(dobro))

const nomes = ['ana', 'bia', 'gui', 'lia', 'rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
    {nome:'caneta', qtde: 10, preco: 1.50},
    {nome:'impressora', qtde: 20, preco: 279.80},
    {nome:'caderno', qtde: 22, preco: 12.69},
    {nome:'lapis', qtde: 17, preco: 5.90},
    {nome:'tesoura', qtde: 90, preco: 8.20}
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

Array.prototype.meuMap = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i ++){
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
        
    }
    return novoArray
}


