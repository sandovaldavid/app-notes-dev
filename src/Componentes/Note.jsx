// Note.jsx
import React, { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    TextField,
    Button,
} from "@material-ui/core";
import { Delete, Edit, Save } from "@material-ui/icons";

const API_URL = process.env.REACT_APP_BACKEND_URL;

function Note({ note, deleteNote, updateNote }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedContent, setEditedContent] = useState(note.content);

    const handleSave = () => {
        fetch(`${API_URL}/notes/${note.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: editedTitle,
                content: editedContent,
            }),
        })
            .then((response) => response.json())
            .then((updatedNote) => {
                updateNote(updatedNote);
                setIsEditing(false);
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <Card>
            <CardContent>
                {isEditing ? (
                    <>
                        <TextField
                            label="Title"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Content"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                        />
                        <Button
                            onClick={handleSave}
                            color="primary"
                            startIcon={<Save />}
                        >
                            Save
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography variant="h5" component="h2">
                            {note.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {note.content}
                        </Typography>
                        <IconButton onClick={() => setIsEditing(true)}>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={() => deleteNote(note.id)}>
                            <Delete />
                        </IconButton>
                    </>
                )}
            </CardContent>
        </Card>
    );
}

export default Note;
