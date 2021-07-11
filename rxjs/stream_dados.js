function gerarNumeros(){
    let num = 0
    setInterval(() => {
        console.log(num++)
    }, 1000)
}

gerarNumeros(numero => {
    console.log(numero * 2)
})

gerarNumeros(a => {
    console.log(a + 100)
})