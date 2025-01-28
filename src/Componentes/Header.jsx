import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {
    StickyNote2,
    LightMode,
    DarkMode,
    Menu as MenuIcon,
} from "@mui/icons-material";
import "./Header.css";

export default function Header({ toggleTheme, isDarkMode }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <AppBar
            position="fixed"
            elevation={3}
            sx={{
                background: theme.palette.primary.main,
                transition: "all 0.3s ease-in-out",
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    minHeight: { xs: "56px", sm: "64px" },
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    {isMobile && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    <StickyNote2
                        sx={{
                            fontSize: { xs: "1.5rem", sm: "2rem" },
                            marginRight: 1,
                        }}
                    />

                    <Typography
                        variant={isMobile ? "h6" : "h5"}
                        component="h1"
                        sx={{
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            letterSpacing: "0.5px",
                        }}
                    >
                        Notes App
                    </Typography>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <IconButton
                        color="inherit"
                        onClick={toggleTheme}
                        aria-label={
                            isDarkMode
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                    >
                        {isDarkMode ? <LightMode /> : <DarkMode />}
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}
