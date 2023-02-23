-- Active: 1676584533786@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT)
;

CREATE TABLE purchases (
    id TEXT UNIQUE PRIMARY KEY NOT NULL,
    buyer_id TEXT NOT NULL, 
    total_price REAL NOT NULL,
    created_at TEXT,
    paid INTEGER NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users(id))
;

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT)
;

SELECT * FROM products;

CREATE TABLE purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases(id),
    FOREIGN KEY (product_id) REFERENCES products(id))
;

INSERT INTO users (id, name, email, password, created_at)
VALUES 
    ("0001", "AstroDev", "astrodev@email.com", "astrodev123", datetime('now')),
    ("0002", "Devinho", "devizinho@email.com", "devera123", datetime('now')),
    ("0003", "Correios", "emailzinho@email.com", "cadeOEmail123", datetime('now'))
;

SELECT * FROM users;

INSERT INTO purchases(id, buyer_id, total_price, created_at, paid)
VALUES  (1, "0001", 50, datetime('now'), 0),
        (2, "0001", 30, datetime('now'), 0),
        (3, "0002", 60, datetime('now'), 0),
        (4, "0002", 80, datetime('now'), 0)
;

SELECT * FROM purchases;

INSERT INTO products (id, name, price, description)
    VALUES
    (1 ,"Melancia", 15, "fruta verde, de tamanho grande"),
    (2, "Mamão", 4, "fruta amarela, de tamanho médio"),
    (3, "Uva", 8, "fruta roxa ou verde pequena, em cachos"),
    (4, "Laranja", 6, "fruta laranja, de tamanho pequeno-médio"),
    (5, "Pêssego", 9, "fruta avermelhada, de tamanho pequeno-médio")
;

SELECT * FROM products;

INSERT INTO purchases_products(purchase_id, product_id, quantity)
VALUES (1, 3, 2),
       (2, 3, 3),
       (3, 3, 4)
;

SELECT * FROM purchases_products;

