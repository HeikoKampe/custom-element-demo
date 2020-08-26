import PRODUCTS from '../data/products';

let productIndex = 0;

function getProducts (amount = 4) {
    productIndex += amount;
    return PRODUCTS.entries.slice(productIndex - amount, productIndex);
}

export {
    getProducts
}
