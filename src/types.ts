/* Exercício 2
    - Criei as tipagens de cada entidade (user, product e purchase)
    - Defini cada tipo de dado
    - Em seguida coloquei o "export" para exportar as informações para outros arquivos */

export type TUser = {
    id: string
    email: string
    password: string
  }

export type TProduct = {
    id: string
    name: string
    price: number
    category: string
}

export type TPurchase = {
    userId: string
    productId: string
    quantity: number
    totalPrice: number
}