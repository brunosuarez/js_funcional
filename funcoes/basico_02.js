function bomDia(){
    console.log('Bom Dia')
}

const boaTarde = function(){
    console.log('Boa Tarde')
}

//passar uma função como parametro p outra função
function executarQualquerCoisa(fn){
    if(typeof fn === 'function'){
        fn()
    }
}

//executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//retornar uma função a partir de outra função
function potencia(base, exp){
    return Math.pow(base, exp)
}

const bits64 = potencia(2, 128)
console.log(bits64)

