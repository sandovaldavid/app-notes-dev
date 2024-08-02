const { Router } = require("express");
const pool = require("../db");
const router = Router();
const {
	getAllNotes,
	getNote,
	createNote,
	deleteNote,
	updateNote,
} = require("../controllers/notes.controller");

router.get("/notes", getAllNotes);

router.get("/notes/10", getNote);

router.post("/notes", createNote);

router.delete("/notes", deleteNote);

router.put("/notes", updateNote);

module.exports = router;
