DROP DATABASE IF EXISTS pets;

CREATE DATABASE pets;

\c pets;

DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT DEFAULT 0,
    species TEXT NOT NULL,
    breed TEXT DEFAULT 'Mixed Breed',
    gender TEXT,
    location VARCHAR(100),
    color TEXT,
    size TEXT,
    story TEXT,
    is_favorite BOOLEAN DEFAULT FALSE,
    photo TEXT
);