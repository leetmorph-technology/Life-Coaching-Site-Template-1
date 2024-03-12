import { Box, Container, Typography } from "@mui/material";

export default function TitleForPage({ text }) {
    return (
        <Box sx={{
            padding: "25px 0",
            background: "url(/src/images/title-bg.jpg)",
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