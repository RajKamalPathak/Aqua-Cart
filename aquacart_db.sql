CREATE DATABASE aquacart_db;
USE aquacart_db;

CREATE TABLE clients (
    client_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE fish_collection (
    fish_id INT AUTO_INCREMENT PRIMARY KEY,
    fish_name VARCHAR(150),
    category VARCHAR(50),
    price INT
);

CREATE TABLE wishlist (
    wishlist_id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    fish_id INT,
    FOREIGN KEY (client_id) REFERENCES clients(client_id),
    FOREIGN KEY (fish_id) REFERENCES fish_collection(fish_id)
);

INSERT INTO clients (name, city, email) VALUES
('Rohit', 'Bangalore', 'rohit@gmail.com'),
('Aarav', 'Mumbai', 'aarav@gmail.com');

INSERT INTO fish_collection (fish_name, category, price) VALUES
('Golden Highback Arowana', 'Arowana', 375000),
('Japanese Koi Set', 'Koi', 125000),
('Black Ranchu', 'Goldfish', 48000);

SELECT * FROM clients;
SELECT * FROM fish_collection;
