
import { createUser, getAllUsers, createPurchase, createProduct, getAllProducts, getProductById, queryProductsByName, products, getAllPurchasesFromUserId, users, purchases } from "./database";
import { Categories, TProduct, TPurchase, TUser } from "./types";

// Exercício 1 - Instalar tudo comentado aqui

//além de importar o express, também precisamos importar os objetos Request
//e Response, sempre entre chaves {} 
import  express, { Request, Response} from 'express'

//import do CORS 
import cors from 'cors';

//criação do servidor express 
const app = express();

//configuração do middleware que garante que nossas respostas estejam sempre
//no formato json 
app.use(express.json());

//configuração do middleware que habilita o CORS 
app.use(cors());

//colocando nosso servidor para escutar a porta 3003 da nossa máquina (primeiro 
//parâmetro da função listen)
//a função de callback (segundo parâmetro da função listen) serve para sabermos 
//que o servidor está de pé, através do console.log que imprimirá a mensagem no 
//terminal 👇🏽
 
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

/*  Endpoint de teste básico

    app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
  });

*/

//          -----   -----       "Início" do Projeto       -----   -----          //

createUser("Nicolau", "Nicolau@emailzinho.com", "Senha.10")

console.table(getAllUsers(users))

createProduct("666", "Candida", 9, Categories.limpeza)
console.table(getAllProducts(products))

console.table(getProductById("3332"))

console.table(queryProductsByName("pão"))

createPurchase("xablau", "3332", 1, 10)
console.table(getAllPurchasesFromUserId("xablau"))

// Exercício 2 

// Fazer os 3 endpoints abaixo, conforme desenvolvido em aula


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


// Exercício 3

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