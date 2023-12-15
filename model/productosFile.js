const fs = require('fs')

const nombreArchivo = 'productos.json'

const leerArchivo = nombre => {
    let pruductos = []
    try{
    pruductos = fs.readFileSync(nombre, 'utf-8')    
    }catch{
    }
    return productos
}

const obtenerProductos = () => {

    const productos = leerArchivo(nombreArchivo)
    return productos
}



const obtenerProducto = id => productos.find(p => p.id == id) || {}

const guardarProducto = producto => {
    producto.id = String(parseInt(productos[productos.length-1]?.id || 0) + 1)
    if(producto.precio) producto.precio = Number(producto.precio)
    if(producto.stock) producto.stock = parseInt(producto.stock)
    productos.push(producto)
    return producto
}

const actualizarProducto = (id, producto) => {
    producto.id = id

    const index = productos.findIndex(p => p.id == id)

    if(index != -1) {
        const productoAnt = productos[index]
        
        const productoNuevo = { ...productoAnt, ...producto }
        productos.splice(index, 1, productoNuevo)
        return productoNuevo
    }
    else {
        return {}
    }    
}

const borrarProducto = id => {
    let producto = {}

    const index = productos.findIndex(p => p.id == id)
    if(index != -1) {
        producto = productos.splice(index, 1)[0]
    }
    return producto    
}

module.exports = {
    obtenerProductos,
    obtenerProducto,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}
