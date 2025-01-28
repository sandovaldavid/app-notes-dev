import React from "react";
import { Typography, Container, Box, IconButton } from "@material-ui/core";
import {
    Code as CodeIcon,
    GitHub as GitHubIcon,
} from "@material-ui/icons";
import "./Footer.css";

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: "auto",
                backgroundColor: (theme) => theme.palette.grey[200],
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                    }}
                >
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <CodeIcon fontSize="small" />
                        App Note - 
                        Copyright © {year} Tecnología WEB
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant="body2" color="textSecondary">
                            Made by
                        </Typography>
                        <IconButton
                            href="https://github.com/sandovaldavid"
                            target="_blank"
                            rel="noopener"
                            color="inherit"
                            size="small"
                        >
                            <GitHubIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
