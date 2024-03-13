import { Box, Container, Typography } from "@mui/material";
import TitleBackground from "../images/title-bg.jpg"

export default function TitleForPage({ text }) {
    return (
        <Box sx={{
            padding: "25px 0",
            background: `url(${TitleBackground})`,
        }}>
            <Container maxWidth="xl">
            <Typography
            sx={{
                color: "#fff",
                fontSize: "2.2em",
                // padding: "0px 35px",
                textShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)",
                fontWeight: "400",
            }}
        > { text }</Typography >
        </Container>
        </Box>
    )
}