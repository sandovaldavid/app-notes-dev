// NewNotesForm.jsx
import React, { useState } from "react";
import {
    TextField,
    Button,
    Paper,
    Typography,
    Box,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";
import {
    NoteAdd,
    Title as TitleIcon,
    Description as DescriptionIcon,
    Clear as ClearIcon,
} from "@material-ui/icons";
import PropTypes from "prop-types";
import "./NewNotesForm.css";

const API_URL = process.env.REACT_APP_BACKEND_URL;

function NewNotesForm({ addNote }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API_URL}/notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((newNote) => {
                addNote(newNote); // Llamar a la función addNote
                setTitle(""); // Limpiar el formulario
                setContent("");
            })
            .catch((error) => {
                console.error("Error creating note:", error);
            });
    };

    const handleClear = () => {
        setTitle("");
        setContent("");
    };

    return (
        <Paper
            id="new-note-form"
            elevation={3}
            style={{
                padding: isMobile ? "1rem" : "2rem",
                marginBottom: "2rem",
                background: theme.palette.background.paper,
                borderRadius: "8px",
                transition: "all 0.3s ease",
            }}
        >
            <Typography
                variant={isMobile ? "h6" : "h5"}
                component="h2"
                gutterBottom
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                }}
            >
                <NoteAdd color="primary" />
                Create New Note
            </Typography>

            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                        required
                        variant="outlined"
                        InputProps={{
                            startAdornment: <TitleIcon color="action" />,
                        }}
                        placeholder="Enter note title"
                    />
                </Box>

                <Box mb={3}>
                    <TextField
                        label="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        fullWidth
                        required
                        multiline
                        rows={isMobile ? 3 : 4}
                        variant="outlined"
                        InputProps={{
                            startAdornment: <DescriptionIcon color="action" />,
                        }}
                        placeholder="Enter note content"
                    />
                </Box>

                <Box
                    display="flex"
                    gap={2}
                    justifyContent="flex-end"
                    flexDirection={isMobile ? "column" : "row"}
                >
                    <Button
                        onClick={handleClear}
                        variant="outlined"
                        startIcon={<ClearIcon />}
                        fullWidth={isMobile}
                    >
                        Clear
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        startIcon={<NoteAdd />}
                        fullWidth={isMobile}
                        style={{
                            transition: "transform 0.2s ease",
                            "&:hover": {
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        Add Note
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}

NewNotesForm.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default NewNotesForm;
