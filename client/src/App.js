import "./App.css";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import NewNotesForm from "./Componentes/NewNotesForm";
import Note from "./Componentes/Note";
import useLocalStorage from "./hooks/useLocalStorage";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	const [notes, setNotes] = useLocalStorage("notes", []);
	console.log("swiii");
	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}
	return (
		<div className="App">
			<Header />
			<NewNotesForm onAdd={addNote} />
			<Box
				sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2, mb: 6 }}
			>
				{notes.map((note, index) => {
					return (
						<Note
							key={index}
							id={index}
							title={note.title}
							content={note.content}
						/>
					);
				})}
			</Box>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Note />} />
					<Route path="/notes/new" element={<NewNotesForm />} />
					{/** Edit Route **/}
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
