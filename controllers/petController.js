const express = require("express");
const router = express.Router();

const {
  getAllPets,
  getPetById,
  addPet,
  updatePet,
  deletePet,
} = require("../queries/pets");

const {
  checkName,
  checkBoolean,
  validateURL,
} = require("../validations/checkPets");

router.get("/", async (req, res) => {
  const allPets = await getAllPets();

  if (Array.isArray(allPets)) {
    res.json(allPets);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const pet = await getPetById(id);

  if (pet.length === 0) {
    res.status(404).json({ error: "not found" });
  } else {
    res.json(pet[0]);
  }
});

router.post("/", checkName, checkBoolean, validateURL, async (req, res) => {
  const newPet = await addPet(req.body);
  console.log(newPet);
  res.json(newPet);
});

router.delete("/:id", async (req, res) => {
  const deletedPet = await deletePet(req.params.id);

  if (deletedPet.length === 0) {
    return res.status(404).json({ message: "No data found!", error: true });
  } else {
    return res.json(deletedPet[0]);
  }
});

router.put("/:id", checkName, checkBoolean, validateURL, async (req, res) => {
  const updatedPet = await updatePet(req.params.id, req.body);
  console.log(updatedPet);
  if (updatedPet.length === 0) {
    res.status(404).json({ message: "not found!", error: true });
  } else {
    res.json(updatedPet[0]);
  }
});

module.exports = router;
