import { Box, Button, Container, Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paragraph from "./Paragraph"
import TitleForPage from "./TitleForPage"

export default function Faq() {
    const headingRule = {
        fontSize: "1.6em",
        fontWeight: "400",
        color: "#345e65",
        padding: "10px 20px"
    }
    const headingRuleSBox = {
        width: "100%",
        border: "1px solid #fff",
        fontSize: "1.6em",
        fontWeight: "400",
        color: "#345e65",
        padding: "10px 20px"
    }
    const subscribeBox = {
        width: "20%",
        border: "1px solid #fff",
        color: "inherit",
        background: "#B6BDC7",
        padding: ".3rem",
        marginTop: ".8rem"
    }
    const textRuleQuote = {
        color: "#655b55",
        padding: "10px 20px",
        lineHeight: "1.5",
        fontSize: "1em",
        fontStyle: "Italic",
    }
    return (
        <>
            <TitleForPage text="Frequently Asked Questions" />
            <Container maxWidth="xl" sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                gap: "2rem",
                minHeight: "50vh",
                flexDirection: { xs: "column", sm: "row" },
            }}>
                <Box sx={{
                    width: "75%"
                }}>
                    <Paragraph text="Below are questions and answers I discuss often. Do not hesitate to contact me with your questions." />

                    {/* <div>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>Expanded by default</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography>Header</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div> */}

                </Box >
                <Box sx={subscribeBox}>
                    <h1 style={headingRuleSBox}>NEWSLETTER</h1>
                    <Box sx={{
                        border: "1px solid #fff",
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

            </Container >
        </>

    )
}