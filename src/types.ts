export enum Categories {
        hortifruti = "Hortifruti",
        padaria = "Padaria",
        limpeza = "Produtos de limpeza"
    }

export type TUser = {
    id: string
    email: string
    password: string
  }

export type TProduct = {
    id: string
    name: string
    price: number
    category: Categories
}

export type TPurchase = {
    userId: string
    productId: string
    quantity: number
    totalPrice: number
}