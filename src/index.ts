
import { 
    users,
    products,
    purchases,
    createUser,
    createProduct,
    createPurchase,
    queryProductsByName
 } from "./database"
import { Categories, TProduct, TPurchase, TUser } from "./types"
import  express, { Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

//          -----   -----       "Início" do Projeto       -----   -----          //

createUser("Nicolau", "Nicolau@emailzinho.com", "Senha.10")

createProduct("666", "Candida", 9, Categories.limpeza)

createPurchase("xablau", "3332", 1, 10)

// Relacionados a produtos 

                      // Mostra lista completa de usuários

app.get('/users', (req: Request, res: Response) => {
    try {

        res.status(200).send(users)

    } catch (error: any) {

        console.log(error)

        if (res.statusCode === 200) {

          res.status(500)
          
        }
        res.send(error.message)
    }
})      
         

                      // Mostra lista completa de produtos
                    
app.get("/products", (req: Request, res: Response) => {
    try {

        res.status(200).send(products)

      } catch (error: any) {

        console.log(error)

        if (res.statusCode === 200) {

          res.status(500)

        }
        res.send(error.message)
      }
})

                    // Pesquisa produto pelo nome do produto

app.get("/products/search", (req: Request, res: Response) => {
  try {
    const q = req.query.q as string
    const result = products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase())
    })

    if (q.length <= 1) {
      res.status(400) 
      throw new Error("query params deve possuir pelo menos um caractere")
    }

    res.status(200).send(result)
  } catch (error: any) {
    console.log(error)

    if (res.statusCode === 200) {
      res.status(500)
    }
    res.send(error.message)
  }
})


                        // Cadastra novo usuário

app.post('/users', (req: Request, res: Response)=>{

    try {
        const {id, email, password} = req.body as TUser
        const findId = users.find((user) => user.id === id)
        
        if (findId) {
            res.status(400)
            throw new Error("ID não disponível para cadastro.")
          }
        
        const findEmail = users.find((user) => user.email === email)

        if (findEmail) {
            res.status(400)
            throw new Error("Email não disponível para cadastro.")
        }
        
        createUser(id, email, password)

        res.status(201).send("Cadastro realizado com sucesso!")
    } catch (error: any) {
        console.log(error)
        
        if (res.statusCode === 200) {
            res.status(500)
        }

        res.send(error.message)
    }
})
         
                        // Cadastra produto

app.post("/products", (req: Request, res: Response) => {
  try {
    const { id, name, price, category } = req.body as TProduct

    const findId = products.find((product) => product.id === id)

    if (findId) {
      res.status(400)
      throw new Error(
        "Não é possível cadastrar mais de um produto com a mesma id."
      )
    }

    createProduct(id, name, price, category)

    res.status(201).send("Produto cadastrado com sucesso!")
  } catch (error: any) {
    console.log(error)
    if (res.statusCode === 200) {
      res.status(500)
    }
    res.send(error.message)
  }
})

                        // Cadastra nova compra

app.post("/purchases", (req: Request, res: Response) => {
  try {
    const { userId, productId, quantity, totalPrice } = req.body as TPurchase

    const findIdUser = users.find((user) => user.id === userId)

    if (!findIdUser) {
      res.status(400)
      throw new Error("ID do usuário não existe!")
    }

    const findIdProduct = products.find((product) => product.id === productId)

    if (!findIdProduct) {
      res.status(400)
      throw new Error("ID do produto não existe!")
    }

    createPurchase(userId, productId, quantity, totalPrice)

    res.status(201).send("Compra realizada com sucesso!")
  } catch (error: any) {
    console.log(error)
    if (res.statusCode === 200) {
      res.status(500)
    }
    res.send(error.message)
  }
})

                        //Pesquisa produto pelo ID do produto

app.get("/products/:id", (req: Request, res: Response) => {
    try {

        const id = req.params.id

        const result = products.find((product) => product.id === id) 

        if(!result){
            res.status(404)
            throw new Error("Produto não encontrado. Verifique a 'id'.")
        }

        res.status(200).send(result)

    } catch (error: any) {
        console.log(error)
        
        if(res.statusCode === 200){

            res.send(500)
        }   
        
        res.send(error.message)

    }
})

                        // Pesquisa compras do usuário pelo userId
                        
app.get("/users/:id/purchases", (req: Request, res: Response) => {
    try{
        const id = req.params.id
    
        const result = purchases.find((user) => user.userId === id)
    
        if(!result){
            res.status(404)
            throw new Error("Compras não encontradas. Verifique a 'id'.")
        }

        res.status(200).send(result)

    } catch (error: any){
        console.log(error)
        
        if(res.statusCode === 200){

            res.send(500)
        }   
        
        res.send(error.message)
    }
})

                      // Deleta user baseado na ID de usuário

app.delete("/users/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
    
        const findUser = users.find((user) => user.id === id)
        if (!findUser) {
          res.status(400)
          throw new Error("Usuario não encontrado")
        }
    
        const indexToRemove = users.findIndex((user) => user.id === id)
    
        if (indexToRemove >= 0) {
          users.splice(indexToRemove, 1)
        }
    
        res.status(200).send("User apagado com sucesso")
      } catch (error: any) {
        console.log(error)
    
        if (res.statusCode === 200) {
          res.status(500)
        }
    
        res.send(error.message)
      }
})

                    // Deleta produto baseado na ID do produto

app.delete("/products/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
    
        const findProduct = products.find((product) => product.id === id)
        if (!findProduct) {
          res.status(400)
          throw new Error("Produto não encontrado")
        }
    
        const indexToRemove = products.findIndex((product) => product.id === id)
    
        if (indexToRemove >= 0) {
          products.splice(indexToRemove, 1)
        }
    
        res.status(200).send("Produto apagado com sucesso")
      } catch (error: any) {
        console.log(error)
    
        if (res.statusCode === 200) {
          res.status(500)
        }
    
        res.send(error.message)
      }
    })

                      // Altera valores do usuário

  app.put("/users/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const findUser = users.find((user) => user.id === id)
    
        if (!findUser) {
          res.status(400)
          throw new Error("Usuário não encontrado!")
        }
    
        const newEmail = req.body.email as string | undefined
        const newPassword = req.body.password as string | undefined
    
        const findEmail = users.find((user) => user.email === newEmail)
        if (newEmail && findEmail) {
          res.status(400)
          throw new Error("Este email já existe. Tente novamente.")
        }
    
        if (newPassword && newPassword.length < 4) {
          res.status(400)
          throw new Error(
            "A senha deve possuir no mínimo 6 caracteres. Tente novamente."
          )
        }
    
        findUser.email = newEmail || findUser.email
        findUser.password = newPassword || findUser.password
    
        res.status(200).send("Atualização realizada com sucesso")
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
          res.status(500)
        }
        res.send(error.message)
    }
})

                      // Altera valores do produto

app.put("/products/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
    
        const findProduct = products.find((product) => product.id === id)
    
        if (!findProduct) {
          res.status(400)
          throw new Error("Produto não encontrado!")
        }
    
        const newName = req.body.name as string | undefined
        const newPrice = req.body.price as number | undefined
        const newCategory = req.body.category as Categories | undefined
    
        if (newName && newName.length < 2) {
          res.status(400)
          throw new Error("O nome deve possuir pelo menos 2 caracteres.")
        }
    
        if (typeof newPrice !== "number") {
          res.status(400)
          throw new Error("O preço deve ser um número. Tente novamente!")
        }
    
        findProduct.name = newName || findProduct.name
        findProduct.price = newPrice || findProduct.price
        findProduct.category = newCategory || findProduct.category
    
        res.status(200).send("Atualização realizada com sucesso")
    
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
          res.status(500)
        }
        res.send(error.message)
    }
})








