-- Active: 1676497437882@@127.0.0.1@3306

-- Criei o labecommerce.db e conectei ele no SQLite
-- Criei o arquivo labecommerce.sql e iniciei o projeto aqui

CREATE TABLE users (
    id INTEGER PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

-- Inserindo informações na tabela (populando)

INSERT INTO users (id, email, password)
VALUES 
    (1, "astrodev@email.com", "astrodev123"),
    (2, "devizinho@email.com", "devera123"),
    (3, "emailzinho@email.com", "cadeOEmail123");

-- Verifica estrutura da tabela

PRAGMA table_info('users');

-- Cria tabela chamada products

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

-- Popula tabela

INSERT INTO products (id, name, price, category)
    VALUES
    (1 ,"Melancia", 10, "hortifruti"),
    (2, "Mamão", 5, "hortifruti"),
    (3, "Uva", 4, "hortifruti"),
    (4, "Laranja", 6, "hortifruti"),
    (5, "Pêssego", 9, "hortifruti");


--  Exercício 1

-- Get all users - Verifica as info da tabela users

-- SELECT * FROM users;

-- Get all users - Verifica as info da tabela products

-- SELECT * FROM products;

-- Search Product by name - Procura produto pelo nome na tabela

SELECT * FROM products
WHERE name = "Uva";

-- Create User - Cria novo usuário

INSERT INTO users (id, email, password)
VALUES 
    (4, "xablau@email.com", "ualbax123");

-- Create Product -- Cria novo produto

INSERT INTO products (id, name, price, category)
VALUES
    (6, "Manga", 8, "hortifruti");

--  Exercício 2

-- Get Product by ID

SELECT * FROM products
WHERE id = 4;

-- Delete User by ID

DELETE FROM users
WHERE id = 1;

-- Delete Product by ID

DELETE FROM products
WHERE id = 2;

-- Edit user by ID

UPDATE users
SET email = "dev@devinho.com", password ="minion123"
WHERE id = 2;

-- Edit products by ID

UPDATE products
SET name = "Jaboticaba"
WHERE id = 5;

--  Exercício 3 - Refatore as queries abaixo:
--      SELECT * FROM users;
--      SELECT * FROM products;

-- Get all users

SELECT * FROM users
    ORDER BY email ASC;

-- Get all products versão 1

SELECT * FROM products
    ORDER BY price ASC
    LIMIT 20;

-- Get all products versão 2

SELECT * FROM products
WHERE price >= 1 AND price <= 8
ORDER BY price ASC;

-- Crie uma tabela nova com as definições solicitadas

CREATE TABLE purchases (
    id TEXT UNIQUE PRIMARY KEY NOT NULL,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL,
    delivered_at TEXT,
    buyer_id TEXT NOT NULL, 
    FOREIGN KEY (buyer_id) REFERENCES users(id) 
);

-- Crie dois pedidos para dois usuários cadastrados

INSERT INTO purchases(id, total_price, paid, buyer_id)
VALUES  (0001, 50, 0, 2),
        (0003, 20, 0, 2),
        (0002, 60, 0, 3),
        (0004, 800, 0, 3);

-- Edite status de entrega e pagamento de um pedido

UPDATE purchases
SET delivered_at = DATETIME('now'), 
    paid = 1
WHERE id = 0001;

-- Consulta com JOIN nas tabelas users e purchases

SELECT 
users.id AS userId,
purchases.id AS purchaseId, 
purchases.total_price AS totalPrice, 
purchases.paid, 
purchases.delivered_at AS deliveredAt
FROM purchases
JOIN users ON purchases.buyer_id = users.id 
WHERE users.id = 2;
