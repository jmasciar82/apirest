const express = require('express')
const controlador = require('C:\\Users\\juanp\\OneDrive\\Escritorio\\CursoAcademia4.0\\Trabajo en clase\\clase 50\\ApiRestFul-MVC\\router\\productos.js');


const router = express.Router()

router.get('/:id?', controlador.obtenerProductos)
router.post('/', controlador.guardarProducto)
router.put('/:id', controlador.actualizarProducto)
router.delete('/:id', controlador.borrarProducto)

module.exports = router