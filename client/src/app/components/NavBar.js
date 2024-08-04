"use client";

import {
	AppBar,
	Box,
	Button,
	Container,
	Toolbar,
	Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter, usePathname} from "next/navigation";

export default function NavBar() {
	const router = useRouter();
	const pathName = usePathname();
	console.log(pathName);

	const handleNavigation = () => {
		router.push("/notes/new"); // Navega a la página de nueva nota

	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent">
				<Container>
					<Toolbar>
						<Typography variant="h6" sx={{ flexGrow: 1 }}>
							<Link href="/" style={{textDecoration:"none", color:"#eee"}}>App Notes Dev</Link>
						</Typography>
						<Button
							variant="contained"
							color="primary"
							onClick={handleNavigation}
						>
							New Note
						</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
