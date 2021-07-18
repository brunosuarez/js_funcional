//operador de criação
const { of } = require('rxjs')

//operador encadeavel
const { last, first, map } = require('rxjs/operators')

of(1, 2, 'ana', false, 'ultimo')
    .pipe(last())
    .pipe(map(v => v[0]))
    .subscribe(function(valor){
        console.log(`o valor gerado foi: ${valor}`)
    })