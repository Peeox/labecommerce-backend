"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchase = exports.product = exports.user = void 0;
const types_1 = require("./types");
exports.user = [
    {
        id: 'xablau',
        email: 'pedro@hotmail.com',
        password: '1234'
    }, {
        id: 'berimbau',
        email: 'simoes@hotmail.com',
        password: '4321'
    }
];
exports.product = [
    {
        id: "3332",
        name: "Melancia",
        price: 10,
        category: types_1.Categories.hortifruti
    }, {
        id: "4556",
        name: "Pão",
        price: 0.75,
        category: types_1.Categories.padaria
    }
];
exports.purchase = [
    {
        userId: "xablau",
        productId: "4556",
        quantity: 10,
        totalPrice: 7.5
    }, {
        userId: "berimbau",
        productId: "3332",
        quantity: 2,
        totalPrice: 20
    }
];
function createUser(id, email, password) {
    const newUser = { id, email, password };
    exports.user.push(newUser);
    console.log("Cadastro realizado com sucesso!");
}
exports.createUser = createUser;
function getAllUsers(allUsers) {
    return allUsers;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    const newProduct = { id, name, price, category };
    exports.product.push(newProduct);
    console.log("Produto cadastrado com sucesso!");
}
exports.createProduct = createProduct;
function getAllProducts(products) {
    return products;
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    return exports.product.filter((product) => {
        return product.id === idToSearch;
    });
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    return exports.product.filter((product) => {
        return product.name.toLowerCase() === q.toLowerCase();
    });
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    const newPurchase = { userId, productId, quantity, totalPrice };
    exports.purchase.push(newPurchase);
    console.log("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    return exports.purchase.filter((purchase) => {
        return purchase.userId === userIdToSearch;
    });
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map