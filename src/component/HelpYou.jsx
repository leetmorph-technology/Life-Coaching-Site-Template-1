import { Box, Button, Container, Typography } from "@mui/material";
import iconForModel from "../images/icon-1.png"
export default function HelpYou() {
    const HelpingText = [
        [
            `Are you living your life or someone else's vision of how your life is supposed to be?`,
            '(where did the joy go)'
        ],
        [
            `Are you challenged in a relationship where you are not feeling heard or seen?`,
            '(where is your voice)'
        ],
        [
            `Is the uncertainty of the future scaring the daylights
            out of you?`,
            '(when did you stop believing in yourself)'
        ],
        [
            `Is there the feeling you have disappointed loved ones?`,
            '(why)'
        ],
    ]
    const textRule = {
        color: "#655b55",
        padding: "10px 20px",
        lineHeight: "1.5",
        fontSize: "1em"
    }
    const modelBoxRule = {
        width: { xs: "100%", sm: "22.7%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        zoom: "1",
        // verticalAlign: "top",
        px: { xs: "2rem", sm: "0rem" },
        py: { xs: "2rem", sm: "0rem" },
        // border: "2px solid red"
    }
    const headingRule = {
        fontSize: "2rem",
        fontWeight: "700",
        color: "#a1a8b2",
        textAlign: "center",
        padding: "10px 20px",
        // mt:{xs:"2rem",sm:"0"}
    }
    return (
        <Container maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: "1.5rem 0",
                marginBottom: "2.5rem"
            }}
        >
            <h1 style={headingRule}>
                Helping you create a life you love...
            </h1>
            <Box
                sx={{
                    display: { xs: "flex", sm: "flex" },
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { sm: "flex-start" },
                    justifyContent: { sm: "center" },
                    flexWrap: { sm: "wrap" },
                    padding: "0",
                    py: "2rem",
                    pb: { xs: "1rem", sm: "" },
                    gap: { xs: "1rem", sm: "0" },
                    borderBottom: { xs: "2px solid #CCCCCC", sm: "none" },
                }}
            >
                {HelpingText.map(([detail, question]) => (
                    <Box sx={
                        modelBoxRule
                    }>

                        <img src={iconForModel} style={{ height: "100px", width: "100px" }} />
                        <Typography sx={textRule}>
                            {detail}<br />
                            <i>{question}</i>
                        </Typography>
                    </Box>
                ))}
            </Box>

            <h2 style={{
                    fontSize: "1.6em",
                    fontWeight: "400",
                    color: "#345e65",
                    padding: "10px 20px",
                    fontWeight: "600",
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    marginTop: "1rem"
                }}>Are you ready to make a change?</h2>
                <Button sx={{
                    background:"#718096",
                    width: "max-content",
                    color: "#fff",
                    fontWeight: "500",
                    margin:" 0 auto",
                    transition:"300ms all ease-in-out",
                    px:"1rem",
                    '&:hover':{
                        background:"#718096dd",
                        color: "#fff"
                    }
                }}
                href="/contact"
                >Contact Leetmorph Today</Button>
        </Container>
    )
}