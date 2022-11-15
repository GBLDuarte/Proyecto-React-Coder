import products from "../data/products"

function getProducts(idCategory) {
    return new Promise((resolve) => {
        if (idCategory === undefined) {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        }
        else {
            let productsRequested = products.filter((product) => product.category === idCategory)
            setTimeout(() => {
                resolve(productsRequested);
            }, 2000);
        }
    });
}

export function getSingleProduct(idParam) {
    return new Promise((resolve) => {
        let productRequested = products.find((product) => product.id === parseInt(idParam))
        setTimeout(() => {
            resolve(productRequested);
        }, 2000);
    });
}


export default getProducts;