const datos = require("./productos.json")
const fs = require("fs")

const getAllProduct = () => {
    return datos.productos
}

const getOneProduct = (nombreProducto) => {
    return datos.productos[nombreProducto]
}

const deleteOneProduct = (nombreProducto) => {
  delete datos.productos[nombreProducto]
  
  fs.writeFile(
    './src/database/products.json',
    JSON.stringify(datos, null, 2),
    'utf8',
    err => {
      throw new Error('No se ha podido reescribir el archivo')
    }
  )
  return `Elemento ${nombreProducto} borrado satisfactoriamente`

}

const updateOneProduct = (nombre,nuevoNombre,nuevoPrecio) => {
  const producto = datos.productos[nombre]
  producto.nombre = nuevoNombre
  producto.precio = nuevoPrecio
  datos.productos[nombre] = producto

  fs.writeFile(
    './src/database/productos.json',
    JSON.stringify(datos, null, 2),
    'utf8',
    err => {
      throw new Error('No se han podido sobreescribir los datos')
    }
  )
  return `El producto ${nombre} ha sido actualizado`


}



const insertOneProduct = (newProduct)=>{


  datos.productos[newProduct.nombreProducto] = newProduct;

  //Escribo el producto nuevo en el fichero JSON
  fs.writeFile(
    "./src/database/productos.json",
    JSON.stringify(datos, null, 2),
    "utf8",
    (err) => {
      throw new Error("ERROR AL ESCRIBIR");
    }
  );

  return newProduct;
}

module.exports = {
    getAllProduct,
    getOneProduct,
    insertOneProduct,
    deleteOneProduct,
    updateOneProduct
}