
import { createUser, getAllUsers, createPurchase, createProduct, getAllProducts, getProductById, queryProductsByName, products, getAllPurchasesFromUserId, users, purchases } from "./database";
import { Categories, TProduct, TPurchase, TUser } from "./types";

// Exercício 1 - Instalar tudo comentado aqui

//além de importar o express, também precisamos importar os objetos Request
//e Response, sempre entre chaves {} 
import  express, { Request, Response} from 'express'


import cors from 'cors';


const app = express();


app.use(express.json());

app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

//          -----   -----       "Início" do Projeto       -----   -----          //

createUser("Nicolau", "Nicolau@emailzinho.com", "Senha.10")

console.table(getAllUsers(users))

createProduct("666", "Candida", 9, Categories.limpeza)
console.table(getAllProducts(products))

console.table(getProductById("3332"))

console.table(queryProductsByName("pão"))

createPurchase("xablau", "3332", 1, 10)
console.table(getAllPurchasesFromUserId("xablau"))

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users)
})

app.get('/products', (req: Request, res: Response) => {
    res.status(200).send(products)
})

app.get('/products/search', (req: Request, res: Response) => {
    const q = req.query.q as string

    const productsFilter = products.filter(
        (products) => {
            return products.name.toLowerCase().includes(q.toLowerCase())
        }
    )
    
    res.status(200).send(productsFilter)
})




app.post('/users', (req: Request, res: Response)=>{
    const {id, email, password} = req.body as TUser

    const newUser = {
        id,
        email,
        password
    }

    users.push(newUser)

    res.status(201).send("Cadastro realizado com sucesso!")

})

app.post("/products", (req: Request, res: Response)=>{
    const {id, name, price, category} = req.body as TProduct

    const newProduct ={
        id,
        name,
        price,
        category
    }

    products.push(newProduct)
    
    res.status(201).send("Produto cadastrado com sucesso!")
})

app.post("/purchases",(req: Request, res: Response)=>{
    const {userId, productId, quantity, totalPrice} = req.body as TPurchase

    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }

    purchases.push(newPurchase)

    res.status(201).send("Compra realizada com sucesso")

})

// Exercício 1

app.get("/products/:id", (req: Request, res: Response) => {
    const id = req.params.id;
  
    const result = products.find((product) => product.id === id);
  
    res.status(200).send(result);
  })

app.get("/users/:id/purchases", (req: Request, res: Response) => {
    const id = req.params.id
  
    const result = purchases.find((user) => user.userId === id);
  
    res.status(200).send(result);
})

// Exercício 2

app.delete("/user/:id", (req: Request, res: Response) => {
    const id = req.params.id
  
    const indexToRemove = users.findIndex((user) => user.id === id)
    if (indexToRemove >= 0) {        
        users.splice(indexToRemove, 1)
    }
  
    res.status(200).send("Item deletado com sucesso")
  })

app.delete("/product/:id", (req: Request, res: Response) => {
    const id = req.params.id
  
    const indexToRemove = products.findIndex((product) => product.id === id)
  
    if (indexToRemove >= 0) {      
        products.splice(indexToRemove, 1)
    }
  
    res.status(200).send("Item deletado com sucesso")
  })

// Exercício 3

app.put("/user/:id", (req: Request, resp: Response) => {
    const id = req.params.id
  
    const newId = req.body.id as string | undefined
    const newEmail = req.body.email as string | undefined
    const newPassword = req.body.password as string| undefined
  
    const user = users.find((user) => user.id === id)
  
    if (user){
        user.id = newId || user.id
        user.email = newEmail || user.email
        user.password = newPassword || user.password        
    }
  
    resp.status(200).send("Atualização realizada com sucesso")
  })

  app.put("/product/:id", (req: Request, resp: Response) => {
    const id = req.params.id
  
    const newId = req.body.id as string | undefined
    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newCategory = req.body.category as Categories | undefined
  
    const product = products.find((product) => product.id === id)
  
    if (product){
        product.id = newId || product.id
        product.name = newName || product.name
        product.price = newPrice || product.price
        product.category = newCategory || product.category        
    }
  
    resp.status(200).send("Atualização realizada com sucesso")
  })