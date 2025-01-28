// Note.jsx
import React, { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    TextField,
    Button,
    Box,
    useMediaQuery,
    useTheme,
    Tooltip,
} from "@mui/material";
import {
    Delete as DeleteIcon,
    Edit as EditIcon,
    Save as SaveIcon,
    Cancel as CancelIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types";

const API_URL = process.env.REACT_APP_BACKEND_URL;

function Note({ note, deleteNote, updateNote }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedContent, setEditedContent] = useState(note.content);

    const handleSave = () => {
        if (!editedTitle.trim() || !editedContent.trim()) {
            return;
        }

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
            .then((response) => {
                if (!response.ok) throw new Error("Failed to update note");
                return response.json();
            })
            .then((updatedNote) => {
                updateNote(updatedNote);
                setIsEditing(false);
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <Card
            elevation={isEditing ? 8 : 2}
            style={{
                width: "100%",
                transition: "all 0.3s ease",
                transform: isEditing ? "scale(1.02)" : "scale(1)",
                borderRadius: "8px",
                position: "relative",
            }}
        >
            <CardContent>
                {isEditing ? (
                    <Box component="form" noValidate autoComplete="off">
                        <TextField
                            label="Title"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            autoFocus
                            required
                            size={isMobile ? "small" : "medium"}
                        />
                        <TextField
                            label="Content"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                            fullWidth
                            multiline
                            rows={isMobile ? 3 : 4}
                            margin="normal"
                            variant="outlined"
                            required
                        />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: 1,
                                mt: 2,
                            }}
                        >
                            <Tooltip title="Cancel">
                                <Button
                                    onClick={() => setIsEditing(false)}
                                    color="secondary"
                                    startIcon={<CancelIcon />}
                                    size={isMobile ? "small" : "medium"}
                                >
                                    Cancel
                                </Button>
                            </Tooltip>
                            <Tooltip title="Save changes">
                                <Button
                                    onClick={handleSave}
                                    color="primary"
                                    variant="contained"
                                    startIcon={<SaveIcon />}
                                    size={isMobile ? "small" : "medium"}
                                >
                                    Save
                                </Button>
                            </Tooltip>
                        </Box>
                    </Box>
                ) : (
                    <>
                        <Typography
                            variant={isMobile ? "h6" : "h5"}
                            component="h2"
                            gutterBottom
                            style={{
                                fontWeight: 500,
                                wordBreak: "break-word",
                            }}
                        >
                            {note.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            style={{
                                marginBottom: "1rem",
                                minHeight: "3rem",
                                wordBreak: "break-word",
                            }}
                        >
                            {note.content}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: 1,
                            }}
                        >
                            <Tooltip title="Edit note">
                                <IconButton
                                    onClick={() => setIsEditing(true)}
                                    size={isMobile ? "small" : "medium"}
                                    color="primary"
                                >
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete note">
                                <IconButton
                                    onClick={() => deleteNote(note.id)}
                                    size={isMobile ? "small" : "medium"}
                                    color="secondary"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </>
                )}
            </CardContent>
        </Card>
    );
}

Note.propTypes = {
    note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
    }).isRequired,
    deleteNote: PropTypes.func.isRequired,
    updateNote: PropTypes.func.isRequired,
    isSmallScreen: PropTypes.bool.isRequired
};

export default Note;
