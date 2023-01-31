"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get('/users', (req, res) => {
    res.status(200).send(database_1.users);
});
app.get('/products', (req, res) => {
    res.status(200).send(database_1.products);
});
app.get('/products/search', (req, res) => {
    const q = req.query.q;
    const productsFilter = database_1.products.filter((products) => {
        return products.name.toLowerCase().includes(q.toLowerCase());
    });
    res.status(200).send(productsFilter);
});
app.post('/users', (req, res) => {
    const { id, email, password } = req.body;
    const newUser = {
        id,
        email,
        password
    };
    database_1.users.push(newUser);
    res.status(201).send("Cadastro realizado com sucesso!");
});
app.post("/products", (req, res) => {
    const { id, name, price, category } = req.body;
    const newProduct = {
        id,
        name,
        price,
        category
    };
    database_1.products.push(newProduct);
    res.status(201).send("Produto cadastrado com sucesso!");
});
app.post("/purchases", (req, res) => {
    const { userId, productId, quantity, totalPrice } = req.body;
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    };
    database_1.purchases.push(newPurchase);
    res.status(201).send("Compra realizada com sucesso");
});
app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const result = database_1.products.find((products) => products.id === id);
    res.status(200).send(result);
});
app.get("/purchases/:id", (req, res) => {
    const userId = req.params.userId;
    const result = database_1.purchases.find((purchases) => purchases.userId === userId);
    res.status(200).send(result);
});
//# sourceMappingURL=index.js.map