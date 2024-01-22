
import crypto from 'crypto'
class ProductManager {
    constructor(){
        this.products = [];
        
    }

    addProduct(producto){
        // validar que todos los datos se hayan ingresado
         
         const existe = this.products.includes(prod => prod.code === producto.code)
         
         if (existe){
            return "El producto ya existe"
         } else {
            producto.id = crypto.randomBytes(10).toString('hex')
            this.products.push(producto)
         }
    }


}
