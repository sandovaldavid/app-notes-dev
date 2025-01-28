import React from "react";
import {
    Typography,
    Container,
    Box,
    IconButton,
    Tooltip,
} from "@material-ui/core";
import {
    Code as CodeIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    Favorite as HeartIcon,
} from "@material-ui/icons";
import "./Footer.css";

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <Box
            component="footer"
            style={{
                padding: "1.5rem 0",
                backgroundColor: "#f5f5f5",
                borderTop: "1px solid #e0e0e0",
                marginTop: "auto",
            }}
        >
            <Container maxWidth="lg">
                <Box
                    style={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                    }}
                >
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                        }}
                    >
                        <CodeIcon fontSize="small" className="icon-spin" />
                        App Note {year} - Built with{" "}
                        <HeartIcon
                            className="heart-beat"
                            style={{ color: "#ff4081" }}
                        />
                    </Typography>

                    <Box
                        style={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            className="footer-text"
                        >
                            Connect with me
                        </Typography>
                        <Tooltip title="GitHub Profile" arrow>
                            <IconButton
                                href="https://github.com/sandovaldavid"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                                size="small"
                                className="social-icon"
                            >
                                <GitHubIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="LinkedIn Profile" arrow>
                            <IconButton
                                href="https://linkedin.com/in/jdavidsandovals"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                                size="small"
                                className="social-icon"
                            >
                                <LinkedInIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
