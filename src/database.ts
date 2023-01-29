import { Categories, TProduct, TPurchase, TUser } from "./types";

export const users: TUser[] = [
    {
    id: 'xablau',
    email: 'pedro@hotmail.com',
    password: '1234'
}, {
    id: 'berimbau',
    email: 'simoes@hotmail.com',
    password: '4321'
}
]

export const products: TProduct[] = [
    {
    id: "3332",
    name: "Melancia",
    price: 10,
    category: Categories.hortifruti
}, {
    id: "4556",
    name: "Ovo",
    price: 0.75,
    category: Categories.padaria
    }
]

export const purchases: TPurchase[] = [
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
]

export function createUser(id: string, email: string, password: string) {
    const newUser: TUser = {id, email, password}
    users.push(newUser)
    console.log("Cadastro realizado com sucesso!");
}

export function getAllUsers(allUsers:TUser[]) : TUser[] {
    return allUsers
}

export function createProduct(id: string, name:string, price: number, category: Categories){
    const newProduct : TProduct = {id, name, price, category}
    products.push(newProduct)
    console.log("Produto cadastrado com sucesso!");
}

export function getAllProducts(products: TProduct[]) : TProduct[] {
    return products
}

export function getProductById(idToSearch: string) : TProduct[] | undefined {
    return products.filter((
        product: TProduct) => {
      return product.id === idToSearch
    })
}

export function queryProductsByName (q: string) : TProduct[] {
    return products.filter((
        product: TProduct) => {
        return product.name.toLowerCase() === q.toLowerCase()
    })
}

export function createPurchase (userId: string, productId: string, quantity: number, totalPrice: number) {
    const newPurchase : TPurchase = {userId, productId, quantity, totalPrice}
    purchases.push(newPurchase)
    console.log("Compra realizada com sucesso");
}


export function getAllPurchasesFromUserId (userIdToSearch: string) : TPurchase[] | undefined {
    return purchases.filter((purchases) => {
        return purchases.userId === userIdToSearch
    })
}