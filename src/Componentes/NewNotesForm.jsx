// NewNotesForm.jsx
import React, { useState } from "react";
import { TextField, Button, Paper } from "@material-ui/core";

const API_URL = process.env.REACT_APP_BACKEND_URL;

function NewNotesForm({ addNote }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate input
        if (!title.trim() || !content.trim()) {
            console.error("Title and content are required");
            return;
        }

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
                addNote(newNote);
                setTitle("");
                setContent("");
            })
            .catch((error) => {
                console.error("Error creating note:", error);
            });
    };

    return (
        <Paper
            id="new-note-form"
            style={{ padding: "16px", marginBottom: "16px" }}
        >
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Note
                </Button>
            </form>
        </Paper>
    );
}

export default NewNotesForm;
