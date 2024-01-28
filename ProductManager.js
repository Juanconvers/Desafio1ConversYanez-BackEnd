
import crypto from 'crypto'

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos deben ser llenados");
            return;
        } if (this.products.some(product => product.code === code)){
            this.console.error("Este producto ya existe");
            return;
        } 

        const NEWPRODUCT = {
            id: this.products.length + 1, // el Id es un valor autoincrementable.
            title,
            description,
            price,
            thumbnail,
            code: crypto.randomBytes(10).toString('hex'), // Hace el campo "code" un valor aleatorio, por lo tanto, único, que no se repite.
            stock
        };

        this.products.push(NEWPRODUCT);
        console.log("Producto ", NEWPRODUCT.title, " fue agregado exitosamente");
        }

    getProducts() {
        return this.products;
    }
    
    getProductById(id){
        const FINDPRODUCT = this.products.find(product => product.id === id);
        
        if (FINDPRODUCT){
            return FINDPRODUCT;
        }else{
            console.error("El producto no fue encontrado");
        }
    }
}

// Ejecución del programa:

const productManager = new ProductManager();

productManager.addProduct("Producto 1", "Caribe", 20.99, "imagen1.jpg", crypto.randomBytes(10).toString('hex'), 50);

productManager.addProduct("Producto 2", "Descripción 2", 30.99, "imagen2.jpg", crypto.randomBytes(10).toString('hex'), 30);

productManager.addProduct("Producto 2", "Descripción 2", 30.99, "imagen2.jpg", crypto.randomBytes(10).toString('hex'), 30);

console.log("Todos los productos:", productManager.getProducts());

let productIdToSearch = 2;
productIdToSearch = 4;
const FINDPRODUCT = productManager.getProductById(productIdToSearch);
console.log(`Producto con ID ${productIdToSearch}:`, FINDPRODUCT);

// node ProductManager.js