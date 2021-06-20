// setTimeout(function(){
//     console.log('Executando Callback...')

//     setTimeout(function(){
//         console.log('Executando Callback')
//     },2000)
// }, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando Promise...')
            resolve('resolve')
        }, tempo)
    })
}

esperarPor(3000).then(texto => console.log(texto))