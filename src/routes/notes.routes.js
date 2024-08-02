const { Router } = require("express");
const pool = require("../db");
const router = Router();

router.get("/notes", async (req, res) => {
	const result = await pool.query("SELECT NOW()");
	res.json(result.rows[0].now);
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
