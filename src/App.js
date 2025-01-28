// App.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Snackbar } from '@material-ui/core';
import Note from './Componentes/Note';
import NewNotesForm from './Componentes/NewNotesForm';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [notes, setNotes] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    fetch(`${API_URL}/notes`)
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error('Error:', error));
  };

  const addNote = (note) => {
    if (!note.id) {
      console.error('Note missing ID:', note);
      return;
    }
    setNotes(prevNotes => [...prevNotes, note]);
    setSnackbarMessage('Note added successfully!');
    setSnackbarOpen(true);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
    setSnackbarMessage('Note updated successfully!');
    setSnackbarOpen(true);
  };

  const deleteNote = (id) => {
    fetch(`${API_URL}/notes/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setNotes(notes.filter(note => note.id !== id));
        setSnackbarMessage('Note deleted successfully!');
        setSnackbarOpen(true);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Notes
      </Typography>
      <NewNotesForm addNote={addNote} />
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} sm={6} md={4}>
            <Note note={note} deleteNote={deleteNote} updateNote={updateNote} />
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Container>
  );
}

export default App;
