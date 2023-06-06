// 13 llamo a express asi funciona la libreria
// 14 levanto servar en el puesto 8080
// 15 rutas endponint
// 16 creo tortas routers
// 17 importo ese router
// borre codigos desafio anteriores, guardado en la carpeta desafio12



import Express from 'express'
//17
import tortasRouter from './routers/tortas.router.js'


//13
const app = Express()
//14
app.listen(8080, () => console.log('Server Up'))
//18
app.use('/Productostorta', tortasRouter)
//15
app.get('/', (req, res) => res.send('Ok'))
app.get('/health', (req, res) => res.json({ message: 'The server is running on port 8080' }))


