//geração de número aleatório
function gerarNumeroEntre(min, max){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min)) + min
        resolve(aleatorio)
    })
}

gerarNumeroEntre(10, 30).then(console.log)