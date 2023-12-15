//const model = require('../model/productosMem')
const model = require('../model/productosFile.js')

const obtenerProductos = id => {
    if(id) {
        const producto = model.obtenerProducto(id)
        return producto
    }
    else {
        const productos = model.obtenerProductos()
        return productos
    }
}

const guardarProducto = producto => {
    const productoGuardado = model.guardarProducto(producto)
    return productoGuardado
}

const actualizarProducto = (id,producto) => {
    const productoActualizado = model.actualizarProducto(id,producto)
    return productoActualizado
}

const borrarProducto = id => {
    const productoEliminado = model.borrarProducto(id)
    return productoEliminado
}


module.exports = {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}

