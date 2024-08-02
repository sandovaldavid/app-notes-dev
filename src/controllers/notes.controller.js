const getAllNotes = async (req, res) => {
	res.send("Retrieving all notes");
};

const getNote = async (req, res) => {
	res.send("Retrieving a single note");
};

const createNote = async (req, res) => {
	res.send("creating a new note");
};

const deleteNote = async (req, res) => {
	res.send("deleting a note");
};
const updateNote = async (req, res) => {
	res.send("updating a note");
};

module.exports = {
	getAllNotes,
	getNote,
	createNote,
	deleteNote,
	updateNote,
};
