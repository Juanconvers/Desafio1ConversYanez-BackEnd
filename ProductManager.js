
import crypto from 'crypto'

class ProductManager {
    constructor(){
        this.products = [];
  
    }

    addProduct(producto){
        // validar que todos los datos se hayan ingresado
         
        function producto (title,description,price,thumbnail,code,stock) {
            this.title = title;
            this.description = description;
            this.price = price;
            this.thumbnail = thumbnail;
            this.code = code;
            this.stock = stock;
            this.id = id;
        }

            const existe = this.products.includes(prod => prod.code === producto.code)
         
         if (existe){
            return "El producto ya existe"
         } else {
            const producto1 = new producto({
                title: "producto prueba", 
                description: "Este es un producto prueba", 
                price: 200, 
                Thumbnail: "Sin imagen", 
                code: "abc123", 
                stock: 25,
                id: crypto.randomBytes(10).toString('hex')
            })
            console.log("Producto creado exitosamente")
            
            this.products.push(producto)
            console.log("Producto agregado exitosamente")
         }
    }

    

}
console.log(ProductManager.products)