const readline = require('readline')

function obterResposta(pergunta){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

function namorada(){
    setTimeout(() =>{
        console.log('Apagar Luzes')
        console.log('Pedir Silêncio')
        console.log('Supresa!!!')
    }, 2000)
}

function sindico(){
    setTimeout(() =>{
        console.log('Monitorando o Barulho')
    }, 2000)
}

async function porteiro(interessados){
    while(true){
        const resp = await obterResposta('0 namorado chegou? (s/N/q) ')
        if(resp.toLoWerCase() === 's') {
            (interessados || []).forEach(obs => obs()) 
        }else if(resp.toLoWerCase() === 'q'){
            break 
        }
        
    }
}

porteiro([namorada, sindico])//registrou dois observadores(namorada e sindico) e um subject que é o porteiro 