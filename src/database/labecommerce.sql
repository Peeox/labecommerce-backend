-- Active: 1676471908506@@127.0.0.1@3306

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

-- Verifica as informações da tabela

SELECT * FROM users;

-- Verifica estrutura da tabela

PRAGMA table_info('users');

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO products (id, name, price, category)
    VALUES
    (1 ,"Melancia", 10, "hortifruti"),
    (2, "Mamão", 5, "hortifruti"),
    (3, "Uva", 4, "hortifruti"),
    (4, "Laranja", 6, "hortifruti"),
    (5, "Pêssego", 9, "hortifruti");

SELECT * FROM products;