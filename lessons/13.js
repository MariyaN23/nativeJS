//паттерн publisher/subscriber
promise.then(function subscriber() {}) //резолв промиса
store.subscribe(function subscriber() {}) //стейт измененился
button.addEventListener('click', function subscriber() {}) //произощел клик
setTimeout(function subscriber() {}, 1000) //прошла 1 с
useEffect(function subscriber() {}, []) //первый рендер

const button = {
    subscriber: {
        'click': [subscriber1, subscriber2, ...],
        'doubleClick': [],
        'mouseIn': [],
        'mouseOut': [],
    },
    addEventListener(eventName, subscriber) {
        this.subscriber[eventName].push(subscriber)
    },
    removeEventListener(eventName, subscriber) {
        this.subscriber[eventName] = this.subscriber[eventName].filter(sub => sub !== subscriber)
    },
    click() {
        this.subscriber['click'].forEach(subscriber => subscriber())
    },
    doubleClick() {
        this.subscriber['doubleClick'].forEach(subscriber => subscriber())
    },
    mouseIn() {
        this.subscriber['mouseIn'].forEach(subscriber => subscriber())
    },
    mouseOut() {
        this.subscriber['mouseOut'].forEach(subscriber => subscriber())
    },
}

