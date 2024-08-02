const { Router } = require("express");
const pool = require("../db");
const router = Router();

router.get("/notes", async (req, res) => {
	res.send("Retrieving all notes");
});

router.get("/notes/10", (req, res) => {
	res.send("Retrieving a single note");
});

router.post("/notes", (req, res) => {
	res.send("creating a new note");
});

router.delete("/notes", (req, res) => {
	res.send("deleting a note");
});

router.put("/notes", (req, res) => {
	res.send("updating a note");
});

module.exports = router;
