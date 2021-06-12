function excec(fn, a, b){
    return fn(a, b)//aqui poderia não ter o retorno também
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

excec(somarNoTerminal, 56, 38)
excec(subtrairNoTerminal, 182,27)

const r = excec(subtrair, 50, 25)
console.log(r)

const fn = () => console.log('EXEC...')
setInterval(fn, 1000)

setInterval(() => console.log('Exec 2...'), 1000)