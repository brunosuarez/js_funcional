const { from, Observable } = require('rxjs')

function primeiro(){
    return function(param){
        console.log(param)
    }
}

from ([1, 2, 3, 4, 5])
    .pipe(primeiro())
    .subscribe(console.log)