import * as React from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, Link, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: "smooth" });
            window.scrollTo({
                top: targetScroll,
                behavior: "smooth",
            });
            setOpen(false);
        }
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                boxShadow: 0,
                bgcolor: "transparent",
                backgroundImage: "none",
                minWidth: "100%",
                padding:"0",
            }}
        >
                <Toolbar
                    variant="regular"
                    sx={(theme) => ({
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        bgcolor:
                            theme.palette.mode === "light"
                                ? "rgba(255, 255, 255, 0.4)"
                                : "rgba(0, 0, 0, 0.4)",
                        backdropFilter: "blur(24px)",
                        maxHeight: 40,
                        border: "1px solid ",
                        boxShadow:
                            theme.palette.mode === "light"
                                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
                    })}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            gap: "2rem"
                        }}
                        // border="2px solid red"
                    >
                        <Box
                            sx={{ display: { xs: "none", md: "flex",alignItems: "center",
                            justifyContent: "space-evenly", } }}
                        >
                            <NavLink
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                style={{
                                    textDecoration:"none"
                                }}
                                sx={{
                                    py: "6px",
                                    px: "12px",
                                    border: "3px solid transparent",
                                    "&:hover": {
                                        borderBottomColor: "#226a49",
                                    },
                                }}
                                to="/"
                            >
                                <MenuItem
                                    style={{
                                        color: "#123648",
                                        fontWeight: "600",
                                        fontSize: "clamp(.8rem, 1vw, 1rem)",
                                    }}
                                    activeClass="active"
                                >
                                    Home
                                </MenuItem>
                            </NavLink>

                            <NavLink
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                style={{
                                    textDecoration:"none"
                                }}
                                sx={{
                                    py: "6px",
                                    px: "12px",
                                    border: "3px solid transparent",
                                    "&:hover": {
                                        borderBottomColor: "#226a49",
                                    },
                                }}
                                to="/about"
                            >
                                <MenuItem
                                    style={{
                                        color: "#123648",
                                        fontWeight: "600",
                                        fontSize: "clamp(.8rem, 1vw, 1rem)",
                                    }}
                                    activeClass="active"
                                >
                                    About Leetmorph
                                </MenuItem>
                            </NavLink>

                            <NavLink
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                style={{
                                    textDecoration:"none"
                                }}
                                sx={{
                                    py: "6px",
                                    px: "12px",
                                    border: "3px solid transparent",
                                    "&:hover": {
                                        borderBottomColor: "#226a49",
                                    },
                                }}
                                to="/process"
                            >
                                <MenuItem
                                    style={{
                                        color: "#123648",
                                        fontWeight: "600",
                                        fontSize: "clamp(.8rem, 1vw, 1rem)",
                                    }}
                                    activeClass="active"
                                >
                                    Process
                                </MenuItem>
                            </NavLink>

                            <NavLink
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                style={{
                                    textDecoration:"none"
                                }}
                                sx={{
                                    py: "6px",
                                    px: "12px",
                                    border: "3px solid transparent",
                                    "&:hover": {
                                        borderBottomColor: "#226a49",
                                    },
                                }}
                                to="/resources"
                            >
                                <MenuItem
                                    style={{
                                        color: "#123648",
                                        fontWeight: "600",
                                        fontSize: "clamp(.8rem, 1vw, 1rem)",
                                    }}
                                    activeClass="active"
                                >
                                    Resources
                                </MenuItem>
                            </NavLink>

                            <NavLink
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                style={{
                                    textDecoration:"none"
                                }}
                                sx={{
                                    py: "6px",
                                    px: "12px",
                                    border: "3px solid transparent",
                                    "&:hover": {
                                        borderBottomColor: "#226a49",
                                    },
                                }}
                                to="/faq"
                            >
                                <MenuItem
                                    style={{
                                        color: "#123648",
                                        fontWeight: "600",
                                        fontSize: "clamp(.8rem, 1vw, 1rem)",
                                    }}
                                    activeClass="active"
                                >
                                    FAQs
                                </MenuItem>
                            </NavLink>

                            <NavLink
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                style={{
                                    textDecoration:"none"
                                }}
                                sx={{
                                    py: "6px",
                                    px: "12px",
                                    border: "3px solid transparent",
                                    "&:hover": {
                                        borderBottomColor: "#226a49",
                                    },
                                }}
                                to="/testimonials"
                            >
                                <MenuItem
                                    style={{
                                        color: "#123648",
                                        fontWeight: "600",
                                        fontSize: "clamp(.8rem, 1vw, 1rem)",
                                    }}
                                    activeClass="active"
                                >
                                    Testimonials
                                </MenuItem>
                            </NavLink>

                            <NavLink
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                style={{
                                    textDecoration:"none"
                                }}
                                sx={{
                                    py: "6px",
                                    px: "12px",
                                    border: "3px solid transparent",
                                    "&:hover": {
                                        borderBottomColor: "#226a49",
                                    },
                                }}
                                to="/contact"
                            >
                                <MenuItem
                                    style={{
                                        color: "#123648",
                                        fontWeight: "600",
                                        fontSize: "clamp(.8rem, 1vw, 1rem)",
                                    }}
                                    activeClass="active"
                                >
                                    Contact
                                </MenuItem>
                            </NavLink>

                        </Box>
                    </Box>


                    <Box sx={{ display: { sm: "", md: "none" } }}>
                        <Button
                            variant="text"
                            color="primary"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ minWidth: "30px", p: "4px" }}
                        >
                            <MenuIcon />
                        </Button>
                        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                            <Box
                                sx={{
                                    minWidth: "60dvw",
                                    p: 3,
                                    backgroundColor: "background.paper",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "3vw",
                                    alignItems: "end",
                                    flexGrow: 1,
                                    fontSize: "clamp(1rem, 3vw, 3rem)"
                                }}
                            >
                                <NavLink
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    activeClass="active"
                                    p="1rem"
                                    style={{
                                        textDecoration:"none",
                                        color:"inherit",
                                    }}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    activeClass="active"
                                    p="1rem"
                                    style={{
                                        textDecoration:"none",
                                        color:"inherit",
                                    }}
                                    to="/about"
                                >
                                    About Leetmorph
                                </NavLink>
                                <NavLink
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    activeClass="active"
                                    p="1rem"
                                    style={{
                                        textDecoration:"none",
                                        color:"inherit",
                                    }}
                                    to="/process"
                                >
                                    Process
                                </NavLink>
                                <NavLink
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    activeClass="active"
                                    p="1rem"
                                    style={{
                                        textDecoration:"none",
                                        color:"inherit",
                                    }}
                                    to="/resources"
                                >
                                    Resources
                                </NavLink>
                                <NavLink
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    activeClass="active"
                                    p="1rem"
                                    style={{
                                        textDecoration:"none",
                                        color:"inherit",
                                    }}
                                    to="/faq"
                                >
                                    FAQs
                                </NavLink>
                                <NavLink
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    activeClass="active"
                                    p="1rem"
                                    style={{
                                        textDecoration:"none",
                                        color:"inherit",
                                    }}
                                    to="/testimonials"
                                >
                                    Testimonials
                                </NavLink>
                                <NavLink
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    activeClass="active"
                                    p="1rem"
                                    style={{
                                        textDecoration:"none",
                                        color:"inherit",
                                    }}
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </Box>
                            <Divider />
                        </Drawer>
                    </Box>
                </Toolbar>
        </AppBar>
    );
}
