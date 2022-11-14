import products from "../data/products"

function getProducts() {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2000);
    });
}

export default getProducts;