

/*
    Class to get one product by it's id.
    Uses dependencies such as a product storage and a product factory
*/
class GetProductById {
    constructor({ productStorage, productFactory }) {
        this.storage = productStorage;
        this.factory = productFactory;
    }

    async get(id) {
        const response = await this.storage.get(id);
        const product = this.factory.createProduct(response);
        return product;
    }
}
module.exports = GetProductById;