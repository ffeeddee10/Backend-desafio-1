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
    res.json({ mesagge: "productos" })
})
//endpoint para crear a un nuevo producto
// put crea los productos
router.post('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: 'This user doesnot exists' })
})
//endpoint para actualizar los datos de un producto
router.put('/id', (req, res) => {
    res.json({ mesagge: "productos agregado" })
})
//endpoint para eliminar un producto
router.delete('/id', (req, res) => {
    res.json({ mesagge: "productos eliminado" })
})

export default router