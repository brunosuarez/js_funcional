const letras = [
    ['o','l','a'],
    [' '],
    ['m','u','n','d','o'],
    ['!','!','!','!']
]
//com arrays
console.log(letras.flat())

//sem arrays
const resultado = letras
    .map(l => l.toUpperCase())
    .reduce((a,b) => a + b)

console.log(resultado)    