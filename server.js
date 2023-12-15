const express = require ('express')
const routerProductos = require('./router/productos')


const app = express()
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// ------------------ Rutas / endpoints API RESTful -------------------
app.use('/api/productos', routerProductos)

// ------------------- LISTEN DEL SERVIDOR ---------------------
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor apiRestful escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
