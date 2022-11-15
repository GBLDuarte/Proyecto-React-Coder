import products from "../data/products"

function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export function getSingleProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[2]);
        }, 2000);
    });
}


export default getProducts;