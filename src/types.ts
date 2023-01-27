/*Exercício 1
Utilize um enum para definir pelo menos 3 categorias
    - Criei um enum de categorias e em seguida fiz a exportação para que refletisse no database
    - Refatorei "category" de uma string para o enum feito*/

    
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