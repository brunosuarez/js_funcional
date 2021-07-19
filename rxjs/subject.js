const { Observable, Subject } = require('rxjs')

function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            subscriber.next(Math.random())
        }, 1000)
    })
}

const obs = getObeservable()
    obs.subscribe(console.log)
    obs.subscribe(console.log)


function getSubject() {
    const sub = new Subject()
    setTimeout(() => {
        subscriber.next(Math.random())
        subscriber.complete()
    }, 1000)
    return sub 
}

    
const sub = getSubject()
    sub.subscribe(console.log)
    sub.subscribe(console.log)    