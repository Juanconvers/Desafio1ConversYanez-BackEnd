
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
            id: this.products.length + 1, // crypto.randomBytes().toString('hex')
            title,
            description,
            price,
            thumbnail,
            code,
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
            console.error("EL producto no fue encontrado");
        }
    }
}

const productManager = new ProductManager();

productManager.addProduct("Producto 1", "Descripción 1", 20.99, "imagen1.jpg", "CODE1", 50);
productManager.addProduct("Producto 2", "Descripción 2", 30.99, "imagen2.jpg", "CODE2", 30);

console.log("Todos los productos:", productManager.getProducts());

const productIdToSearch = 2;
const foundProduct = productManager.getProductById(productIdToSearch);
console.log(`Producto con ID ${productIdToSearch}:`, foundProduct);

// node Desafio1ConversYanez.js