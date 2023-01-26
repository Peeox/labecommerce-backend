"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.product = exports.user = void 0;
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
        name: "Ovo",
        price: 10,
        category: "Feira"
    }, {
        id: "4556",
        name: "Pão",
        price: 0.75,
        category: "Padaria"
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
//# sourceMappingURL=database.js.map