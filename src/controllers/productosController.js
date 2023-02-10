const productosServices = require("../services/productosServices");

//SE IMPLEMENTA LA LOGICA DE LA APLICACION
const getAllProduct = (req, res, next) => {
  const allProducts = productosServices.getAllProduct();
  if (!allProducts) {
    res.status(404).send("NO HAY PRODUCTOS");
    return;
  }
  res.send(allProducts);
};
const insertOneProduct = (req, res, next) => {

    console.log(req.body)

    const {nombre, precio} = req.body

    if(!nombre || !precio){
        res.status(400).send("FALTAN DATOS")
        return
    }

    const newProduct = productosServices.insertOneProduct(nombre, precio)
    if(!newProduct){
        res.status(400).send("ENTRADA DUPLICADA");
        return
    }

    res.send(newProduct)

};
const getOneProduct = (req, res, next) => {
  const { prod } = req.params;

  const oneProduct = productosServices.getOneProduct(prod);

  if (!oneProduct) {
    res.status(404).send("NO ENCONTRADO");
    return;
  }
  res.send(oneProduct);
};
const deleteOneProduct = (req, res, next) => {
  const { prod } = req.params;
  const oneProduct = productosServices.deleteOneProduct(prod);

  if (!oneProduct) {
    res.status(404).send("Producto no encontrado");
    return;
  }
  res.send(oneProduct);
};

const updateOneProduct = (req, res, next) => {
  const { prod } = req.params
  const {nombre,precio} = req.body
  if (!nombre || !precio) {
    res.status(400).send('El nombre o precio no es correcto')
    return
  }
  const oneProduct = productosServices.updateOneProduct(prod,nombre,precio);

  if (!oneProduct) {
    res.status(404).send("Producto no encontrado");
    return;
  }
  res.send(oneProduct);
};

module.exports = {
  getAllProduct,
  insertOneProduct,
  getOneProduct,
  deleteOneProduct,
  updateOneProduct,
};
