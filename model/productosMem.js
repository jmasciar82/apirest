const productos = [
    { id: '1', nombre: 'TV', precio: 1234, stock: 55 },
    { id: '2', nombre: 'Mesa', precio: 234, stock: 33 },
    { id: '3', nombre: 'Mouse', precio: 123, stock: 101 },
]

const obtenerProductos = () => productos

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
