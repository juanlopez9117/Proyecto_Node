import Producto from "../models/productoModel.js"

const crearProducto = async(require, response) => {
    try {
        Producto.create(require.body)
        response.json({
            message: 'Usuario creado correctamente.'
        })
    } catch (error) {
        response.json({
            message: `No se pudo registrar ${error}`
        })
    }
}
const listarProductos = async() => {

}
const listarProducto = async() => {

}
const eliminarProducto = async() => {

}
const editarProducto = async() => {

}

export{
    crearProducto,
    listarProducto,
    listarProductos,
    editarProducto,
    eliminarProducto
}

