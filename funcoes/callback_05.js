const carrinho = [
    {nome:'caneta', qtde: 10, preco: 1.50},
    {nome:'impressora', qtde: 20, preco: 279.80},
    {nome:'caderno', qtde: 22, preco: 12.69},
    {nome:'lapis', qtde: 17, preco: 5.90},
    {nome:'tesoura', qtde: 90, preco: 8.20}
]

const totais = item => item.qtde * item.preco
const somar = (acc, el) => acc + el

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)

console.log(totalGeral)    
