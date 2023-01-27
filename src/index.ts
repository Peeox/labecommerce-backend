
import { createUser, getAllUsers, createPurchase, createProduct, getAllProducts, getProductById, queryProductsByName, product, getAllPurchasesFromUserId, user } from "./database";
import { Categories } from "./types";

createUser("Menino", "email@emailzinho.com", "Senha.10")

console.table(getAllUsers(user))

createProduct("666", "Cândida", 9, Categories.limpeza)
console.table(getAllProducts(product))

console.table(getProductById("3332"))

console.table(queryProductsByName("pão"))

createPurchase("xablau", "3332", 1, 10)
console.table(getAllPurchasesFromUserId("xablau"))
