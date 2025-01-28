// App.js
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Snackbar,
  useTheme,
  useMediaQuery,
  IconButton,
  Fab
} from '@material-ui/core';
import { Alert } from '@mui/material';
import {
  NoteAdd,
  Notes as NotesIcon,
  Close as CloseIcon
} from '@material-ui/icons';
import Note from './Componentes/Note';
import NewNotesForm from './Componentes/NewNotesForm';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [notes, setNotes] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    fetch(`${API_URL}/notes`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setNotes(data))
      .catch(error => {
        console.error('Error:', error);
        setSnackbarMessage('Error fetching notes');
        setSnackbarOpen(true);
      });
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
    <Container maxWidth="lg">
      <div style={{
        paddingTop: matches ? '1rem' : '2rem',
        paddingBottom: '2rem',
        minHeight: '100vh',
        position: 'relative'
      }}>
        <Typography
          variant={matches ? 'h4' : 'h3'}
          component="h1"
          gutterBottom
          style={{
            fontWeight: 700,
            color: '#2c3e50',
            marginBottom: '1.5rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
        >
          <NotesIcon fontSize="large" />
          My Notes
        </Typography>

        <NewNotesForm addNote={addNote} />

        <Grid
          container
          spacing={matches ? 2 : 3}
          style={{
            marginTop: '2rem',
            minHeight: '60vh',
            padding: matches ? '0.5rem' : '1rem'
          }}
        >
          {notes.length === 0 ? (
            <Grid item xs={12}>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <NotesIcon style={{ fontSize: 48, opacity: 0.5 }} />
                No notes yet. Create your first note!
              </Typography>
            </Grid>
          ) : (
            notes.map(note => (
              <Grid
                item
                key={note.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                style={{
                  display: 'flex',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <Note
                  note={note}
                  deleteNote={deleteNote}
                  updateNote={updateNote}
                  isSmallScreen={matches}
                />
              </Grid>
            ))
          )}
        </Grid>

        <Fab
          color="primary"
          aria-label="add note"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            display: matches ? 'flex' : 'none'
          }}
          onClick={() => {
            // Scroll to NewNotesForm
            document.querySelector('#new-note-form').scrollIntoView({
              behavior: 'smooth'
            });
          }}
        >
          <NoteAdd />
        </Fab>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
        >
          <Alert
            elevation={6}
            variant="filled"
            severity="success"
            action={
              <IconButton
                size="small"
                color="inherit"
                onClick={() => setSnackbarOpen(false)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </Container>
  );
}

export default App;
