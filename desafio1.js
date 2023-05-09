// 1 creo la clase de evento (tortas)
// 2 creo un constructor con array vacio (this.events = [] ) Aclaracion el "#" es para darle privacidad al codigo
// 3 creo un evento (getevents) y lhago recorrer todo el evento con this.events
// 4 creo los productos o eventos deseados (addevents) y dentro de esa funcion creo los productos deseados ( nombre, artistas, fecha, etc)
// 5 instancia el evento, lo hace correr, lo hace funcionar
// 6 creo la cantidad de productos deseados con toda la informacion
// 7 lleno el array vacio creado de (events) del punto 2, se hace con (this.#events.push) pusheo todo el evento y creo los objetos dentro de ese evento 
// 8 genero un id automatico

// 1 //
class Tortas {
    #events
    #error
    constructor() {
        // 2
        this.#events = []
        this.#error = undefined
    }
// 3 //
    getEvents = () => this.#events

    getEventById = (id) => {
        const event = this.#events.find(item => item.id === id)
        if (!event) return 'Not Found'
        return event
    }
// 8 //
    #generateId = () => {
        return (this.#events.length === 0) ? 1 : this.#events[this.#events.length - 1].id + 1 
    }

    #validateEvent = (name, relleno, saborDelBiscochuelo, price, code, kilogramos, img) => {
        if (!name || !relleno || !saborDelBiscochuelo || !price || !code || !kilogramos || !img) {
            this.#error = `[${name}]: campos incompletos`
        } else {
            const found = this.#events.find(item => item.code === code)
            if (found) this.#error = `[${name}]: el code ya existe`
            else this.#error = undefined
        }
    }
    // 4 //
    addEvent = (name, relleno, saborDelBiscochuelo, price, code, kilogramos, img) => {
        this.#validateEvent(name, relleno, saborDelBiscochuelo, price, code, kilogramos,img)
        if (this.#error === undefined)
            // 7 //
            this.#events.push({ id: this.#generateId(), name, relleno, saborDelBiscochuelo, price, code, kilogramos, img })
        else
            console.log(this.#error)
    }
}

// 5 //
const tortasConProductos = new Tortas()
// 6 //
tortasConProductos.addEvent('torta Minions', 'dulce de leche y oreo', 'vainilla', 5000,'101', 3, 'imagen1' )
tortasConProductos.addEvent('torta kakita', 'dulce de leche con fruta a eleccion', 'Chocolate', 2000, '102', 4, 'imagen2')
tortasConProductos.addEvent('torta carousel', 'mouse de chocolate', ' chocolate y vainilla', 4000, 3, '103', 'imagen3') 
tortasConProductos.addEvent('torta casamiento', 'dulce de leche y chocolate', 'sin sabor', 20000, 15, '104', 'imagen4')
