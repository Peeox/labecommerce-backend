"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const types_1 = require("./types");
(0, database_1.createUser)("Menino", "email@emailzinho.com", "Senha.10");
console.table((0, database_1.getAllUsers)(database_1.user));
(0, database_1.createProduct)("666", "Cândida", 9, types_1.Categories.limpeza);
console.table((0, database_1.getAllProducts)(database_1.product));
console.table((0, database_1.getProductById)("3332"));
console.table((0, database_1.queryProductsByName)("pão"));
(0, database_1.createPurchase)("xablau", "3332", 1, 10);
console.table((0, database_1.getAllPurchasesFromUserId)("xablau"));
//# sourceMappingURL=index.js.map