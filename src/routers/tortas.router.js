import { Router } from 'express'

const router = Router()

//creo productos
let tortasProductosrouter = [
    { id: 1, name: 'torta Minions', relleno: 'dulce de leche y oreo' },
    { id: 2, name: 'torta kakita', relleno: 'dulce de leche con fruta a eleccion' },
]

//endpoint para leer todos los productos
router.get('/', (req, res) => {
    res.json({ tortasProductosrouter })
})

//get productos
//endpoint para leer un solo producto a partir de su ID
// post lee los post
router.get('/:id', (req, res) => {
    //creo un buscador de id
    const id = req.params.id
    const tortaId = tortasProductosrouter.find(item => item.id == id)
    if (!tortaId) return res.status(404).json({ message: 'This Product doesnot exists' })
    res.json({ tortaId})

})
//endpoint para crear a un nuevo producto
// put crea los productos
router.post('/', (req, res) => {
    const { id, name, relleno } = req.body
    //pushea nuevo productos con id name y relleno
    tortasProductosrouter.push({ id, name, relleno })
    res.json({ message: 'This user doesnot exists' })
})
//endpoint para actualizar los datos de un producto
router.put('/:id', (req, res) => {
    const id = req.params.id
    //data es lo que nosotros escribimos de body
    const data = req.body
    // actualizdo los datos escritos en body, lo que hace es remplazar mediante ...data, osea crea una nueva lista y lo pega en data
    const ProductoIndex = tortasProductosrouter.findIndex(item => item.id == id)
    tortasProductosrouter[ProductoIndex] = { ...tortasProductosrouter[ProductoIndex], ...data }
    res.json({ mesagge: "productos actualizado" })
})
//endpoint para eliminar un producto
router.delete('/:id', (req, res) => {
    res.json({ mesagge: "productos eliminado" })
})

export default router