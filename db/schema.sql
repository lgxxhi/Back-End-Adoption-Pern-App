DROP DATABASE IF EXISTS pets;

CREATE DATABASE pets;

\c pets;

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT DEFAULT 0,
    breed TEXT DEFAULT 'Mixed Breed',
    color TEXT,
    weight DECIMAL(5, 2),
    is_adopted BOOLEAN DEFAULT FALSE
);