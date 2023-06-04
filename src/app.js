import express from 'express'
import fs from 'fs'
import productsRouter from './routers/products.Router.js'

const app = express();
app.use(express.json());

const PORT = 8080;

 
//---------------------------------------------------------------------------------------------------

// console.log("----------------------------- Arranca el programa ------------------------------------")

// const cantidadDeProductosQueQuieroTener = 5 // cantidad de productos que quiero que se agreguen al archivo productos.json

// elimina el archivo productos.json si es que ya existe
// await fs.promises.unlink('./src/productos.json')

// crea y agrega la cantidad de productos deseada al archivo productos.json
// for (let i = 1; i <= cantidadDeProductosQueQuieroTener; i++) {
//     await productManager.addProduct(`Producto ${i}`, `Este es el producto ${i}`, 200, 'Sin imagen', `abc${i}`, 25) // agrega un producto
// }

// console.log(await productManager.getProducts()) // muestra el array con los productos agregados

// -----------------------------------------------------------------------------------------------------
app.use('/api/products', productsRouter)


app.listen(PORT, () => console.log('server up'))
