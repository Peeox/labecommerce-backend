/* Exercício 3
    - Criado arquivo "database.ts" dentro da pasta "src"
    - Importei os tipos do arquivo "types.ts"
    - Fiz 2 users diferentes para cada dado e referenciei as tipagens feitas no exercício 2
    - Fiz a exportação para utilizar os dados em outro arquivo (index.ts)*/

import { TProduct, TPurchase, TUser } from "./types";

export const user: TUser[] = [
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

export const product: TProduct[] = [
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
]

export const purchase: TPurchase[] = [
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