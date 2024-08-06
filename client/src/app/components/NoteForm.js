"use client";
import {
	Button,
	Card,
	CardContent,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { use } from "next/navigation";

export default function NoteForm() {
	const [note, setNote] = useState({
		title: "",
		description: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(note);
	};

	const handleChange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};
	return (
		<Grid
			container
			direction="columnn"
			alignItems="center"
			justifyContent="center"
		>
			<Grid item xs={5}>
				<Card
					sx={{ mt: 10 }}
					style={{
						backgroundColor: "#1e272e",
						padding: "1rem",
					}}
				>
					<Typography variant="5" textAlign="center" color="white">
						Create Note
					</Typography>
					<CardContent>
						<form onSubmit={handleSubmit}>
							<TextField
								fullWidth={true}
								variant="filled"
								label="Write your tile"
								sx={{ display: "block", margin: ".5rem 0" }}
								onChange={handleChange}
								name="title"
								inputProps={{ style: { color: "white" } }}
								InputLabelProps={{ style: { color: "white" } }}
							/>
							<TextField
								fullWidth={true}
								variant="filled"
								label="Write your description"
								multiline
								rows={5}
								sx={{ display: "block", margin: ".5rem 0" }}
								name="description"
								onChange={handleChange}
								inputProps={{ style: { color: "white" } }}
								InputLabelProps={{ style: { color: "white" } }}
							/>
							<Button
								variant="contained"
								color="primary"
								type="submit"
							>
								Save
							</Button>
						</form>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
