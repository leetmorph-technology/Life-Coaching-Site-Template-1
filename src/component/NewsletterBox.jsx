import { Box, Button } from "@mui/material"
import Paragraph from "./Paragraph"

export default function NewsLetterBox() {
    const subscribeBox = {
        width: { xs: "100%", sm: "45%", md: "20%" },
        // border: "1px solid #fff",
        display: "flex",
        flexDirection: { xs: "column" },
        justifyContent: "center",
        alignItems: "center",
        color: "inherit",
        background: "#B6BDC7",
        padding: ".3rem",
        marginTop: ".8rem"
    }
    const headingRuleSBox = {
        width: "100%",
        border: "1px solid #fff",
        fontSize: "1.6em",
        fontWeight: "400",
        color: "#345e65",
        padding: "10px 20px"
    }

    return (
        <Box sx={subscribeBox}>
            <h1 style={headingRuleSBox}>NEWSLETTER</h1>
            <Box sx={{
                border: "1px solid #fff",
                width: "100%",
                borderTop: "none",
            }}>
                <Paragraph text="Get my email updates and when I'm adding new content!" />
                <Button sx={{
                    background: "#616c7a",
                    width: "max-content",
                    color: "#fff",
                    fontWeight: "500",
                    margin: " 20px",
                    transition: "300ms all ease-in-out",
                    px: "20px",
                    '&:hover': {
                        background: "#616c7aaa",
                        color: "#fff"
                    }
                }}
                    href="/subscribe"
                >Click Here To Subscribe !</Button>

            </Box>
        </Box>
    )
}