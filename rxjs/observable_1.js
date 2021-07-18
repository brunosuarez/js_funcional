const { Observable, Subscriber } = require('rxjs')

const promise = new Promise(resolve => {
    resolve('promisse é nem nice')
})

promise.then(console.log)

const obs = new Observable(subscriber => {
    subscriber.next('Observer é legal')
})

obs.subscribe(console.log)