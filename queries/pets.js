const db = require("../db/dbConfig");

// read all pets.
const getAllPets = async () => {
  try {
    const allPets = await db.any("SELECT * FROM pets");

    return allPets;
  } catch (error) {
    return error;
  }
};

// read a single pet.
const getPetById = async (id) => {
  try {
    const pet = await db.any(`SELECT * FROM pets WHERE id = $1`, id);

    return pet;
  } catch (error) {
    return error;
  }
};

// create new pets.
const addPet = async (data) => {
  try {
    const newPet = await db.one(
      "INSERT INTO pets (name, age, breed, gender ,location ,color ,size ,story , is_favorite, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        data.name,
        data.age,
        data.breed,
        data.gender,
        data.location,
        data.color,
        data.size,
        data.story,
        data.is_favorite,
        data.photo,
      ]
    );
    return newPet;
  } catch (error) {
    return error;
  }
};
// update a single pet.
const updatePet = async (id, pet) => {
  try {
    const updatedPet = await db.any(
      "UPDATE pets SET name = $1, age = $2, breed = $3, gender = $4 ,location = $5,color = $6,size = $7, story = $8, is_favorite = $9, photo = $10 WHERE id = $11 RETURNING *",
      [
        pet.name,
        pet.age,
        pet.breed,
        pet.gender,
        pet.location,
        pet.color,
        pet.size,
        pet.story,
        pet.is_favorite,
        pet.photo,
        id,
      ]
    );

    return updatedPet;
  } catch (error) {
    return error;
  }
};

// delete a single pet.
const deletePet = async (id) => {
  try {
    const deletedPet = await db.any(
      "DELETE FROM pets WHERE id = $1 RETURNING *",
      id
    );

    return deletedPet;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPets,
  getPetById,
  addPet,
  updatePet,
  deletePet,
};
