const { of, Observable, Subscriber } = require('rxjs')

function terminadoCom(parteFinal){
    return function(fonte){
        return Observable.create(subscriber => {
            fonte.subscribe({
                next(texto){
                    if(texto.endWith(parteFinal)){
                        subscriber.next(valor)
                    }
                }
            })
        })
    }
}

of('Ana Silva', 'Maria Silva', 'Pedro Rocha')
    .pipe(terminadoCom('silva'))
    .subscribe(console.log)