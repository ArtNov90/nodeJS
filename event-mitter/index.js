const EventEmitter = require("events")

const em = new EventEmitter()

em.on("my-event", () => {
  console.log("Event called !")
})


em.on("hello-name", (name) => {
  console.log("Hello " + name)
})


em.on("ping", () => {
  console.log("ping")
  em.emit("pong")
})


em.on("pong", () => {
  console.log("pong")
})


em.emit("ping")
em.emit("my-event")
em.emit("hello-name", "Lili")


class MaClass extends EventEmitter {
  constructor () {
    super();
    this.count = 0
  }

  increment() {
    this.count ++
    this.emit('increment', this.count)
  }

}

const monObject = new MaClass()

monObject.on('increment', (value) => {
  console.log("Current value :" + value)
})


monObject.increment()
monObject.increment()
monObject.increment()
monObject.increment()

class MyEmitter extends EventEmitter {
  triggerEvent(message, number) {
    this.emit("customEvent", message, number)
  }
}

const myEmitter = new MyEmitter()

// Écouteur pour customEvent avec des paramètres
myEmitter.on("customEvent", (message, number) => {
  console.log(`customEvent déclenché : ${message}, nombre : ${number}`)
})

// Déclenchement de customEvent avec des paramètres
myEmitter.triggerEvent("Ceci est un test", 42)
myEmitter.triggerEvent("Deuxième test", 100)