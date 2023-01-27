
import { Categories, TProduct, TPurchase, TUser } from "./types";

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

/* Continuação do exercício 1
    Refatorei as "category" de cada objeto feito e defini o enum utilizado 
        Exemplo: ...Categories.hortifruti */

export const product: TProduct[] = [
    {
    id: "3332",
    name: "Melancia",
    price: 10,
    category: Categories.hortifruti
}, {
    id: "4556",
    name: "Pão",
    price: 0.75,
    category: Categories.padaria
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
/* Exercício 2
    Desenvolva uma função para cada funcionalidade. Você pode colocá-las no arquivo database.ts.
    Chame cada uma no index.ts e verifique se estão funcionando dando console.log.
    Exemplo:
        createUser
        input: id, email, password
        output: imprimir "cadastro realizado com sucesso"
*/

/*  Função criada para adicionar um novo usuário (objeto) com os parâmetros(input) 
    id, email e password, na qual define um objeto e em seguida indica para o sistema 
    fazer um push dos dados inseridos no array(user). 
    Após, faz a impressão (output) no console dizendo que foi cadastrado.
*/

export function createUser(id: string, email: string, password: string) {
    const newUser: TUser = {id, email, password}
    user.push(newUser)
    console.log("Cadastro realizado com sucesso!");
}
  
/*  Função criada para imprimir o array (user) refatorado com o novo usuário.*/

export function getAllUsers(allUsers:TUser[]) : TUser[] {
    return allUsers
}


/*  Função criada para adicionar um novo produto (objeto) com os parâmetros(input) 
    id, name, price e category, na qual define um objeto e em seguida indica para o sistema 
    fazer um push dos dados inseridos no array(product). 
    Após, faz a impressão (output) no console dizendo que foi cadastrado.
*/

export function createProduct(id: string, name:string, price: number, category: Categories){
    const newProduct : TProduct = {id, name, price, category}
    product.push(newProduct)
    console.log("Produto cadastrado com sucesso!");
}

/*  Função criada para imprimir o array (product) refatorado com o novo usuário.*/

export function getAllProducts(products: TProduct[]) : TProduct[] {
    return products
}

/*  Função para procurar o id do produto e retornar o objeto caso haja. */

export function getProductById(idToSearch: string) : TProduct[] | undefined {
    return product.filter((
        product: TProduct) => {
      return product.id === idToSearch
    })
}

/*  Função para procurar o produto pelo nome */

export function queryProductsByName (q: string) : TProduct[] {
    return product.filter((
        product: TProduct) => {
        return product.name.toLowerCase() === q.toLowerCase()
    })
}


// Exercício 3


/*  Função para criar compra */

export function createPurchase (userId: string, productId: string, quantity: number, totalPrice: number) {
    const newPurchase : TPurchase = {userId, productId, quantity, totalPrice}
    purchase.push(newPurchase)
    console.log("Compra realizada com sucesso");
}

/*  Função para verificar todas as compras do user */

export function getAllPurchasesFromUserId (userIdToSearch: string) : TPurchase[] | undefined {
    return purchase.filter((purchase) => {
        return purchase.userId === userIdToSearch
    })
}