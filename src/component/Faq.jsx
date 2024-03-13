import { Box, Button, Container, Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paragraph from "./Paragraph"
import TitleForPage from "./TitleForPage"
import NewsLetterBox from "./NewsletterBox";

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
        width: {xs:"100%",sm:"45%",md:"20%"},
        border: "1px solid #fff",
        display: "flex",
        flexDirection: {xs:"column"},
        justifyContent: "center",
        alignItems: "center",
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
                marginBottom: {xs:"40px"}
            }}>
                <Box sx={{
                    width: {xs:"100%",sm:"65%",md:"75%"},
                }}>
                    <Paragraph text="Below are questions and answers I discuss often. Do not hesitate to contact me with your questions." />

                     <div>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>How do I know if coaching can help me with the challenge I am facing?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                I request my clients fill out a focus sheet before our first session which gives me an idea if we are aligned. If I feel Im not compatible I will share my thoughts and recommend other options.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography>What are the main differences between 'coaching' and 'therapy'?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                ONTOLOGICAL COACHING focuses on self-exploration, self-knowledge and an understanding of how our moods affect our way of being. THERAPY seeks to heal emotional wounds.
                                </Typography>
                                <Typography>
                                ONTOLOGICAL COACHING helps to shift clients to their purest observation of self and thrive in uncertainty, stillness and wholeness. THERAPY seeks to bring patients from a dysfunctional place to a healthy functioning level.
                                </Typography>
                                <Typography>
                                ONTOLOGICAL COACHING rarely asks about your childhood or family life. THERAPY continuously explores early-childhood, family and relationship issues.
                                </Typography>
                                <Typography>
                                ONTOLOGICAL COACHING uses the terms shifting, valuing and accepting for deeper understanding of the present challenges. THERAPY uses the term "pathology" to describe the "patient's" issues.
                                </Typography>
                                <Typography>
                                ONTOLOGICAL COACHING focuses more on the present and future. THERAPY focuses more on the past.
                                </Typography>
                                <Typography>
                                ONTOLOGICAL COACHING is utilized by people who already have success and want guidance either to enrich their career path or discover new possibilities to prosper.  THERAPY is used by people whose lives are not working.
                                </Typography>
                                <Typography>
                                ONTOLOGICAL COACHING is the philosophical study of the nature of being, becoming and existing in relationships. THERAPY has its roots planted in the medical model.
                                </Typography>
                                <Typography>
                                ONTOLOGICAL COACHING works with the client's conscious mind. THERAPY focuses on bringing the patient's unconscious mind into awareness.
                                </Typography>
                                <Typography>
                                ONTOLOGICAL COACHING focuses on creating lightness for the present and pursue insight for the future. THERAPY seeks to heal the past.
                                </Typography>
                                <Typography>
                                ONTOLOGICAL COACHING has strategies and objectives for transformation. THERAPY has a treatment plan.
                                </Typography>
                                <Typography>
                                ONTOLOGICAL COACHING focuses on what is possible. THERAPY focuses on what is the problem.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>Are your clients local or are they from all over?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Our clients range from local Kathmandu folks to clients af far away as Tucson.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>What age range do you typically work with?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                We coache all ages. Our youngest client is 11 and our most senior client is 81.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>How many coaching sessions will I need for change to occur?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Depending on your circumstances the coaching could last a few months or longer. Clients feel a chift in awareness after our first session.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>How long are typical sessions ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Sessions are usually between 60-75 minutes.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>So you accept / is coaching covered by insurance?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Unfortunately insurance does not look at coaching as a viable source for mental and emotional well being. A few years ago insurance companies did not accept Chiropractic or Acupuncture as viable either and now they see that differently.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>Could I talk with you in person or on the phone before seeing you in person?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Yes of course, I offer a  30 minute complimentary session to assiss if my coaching style is aligned with your needs. Its imperative for us both to feel a connection.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div> 

                </Box >
                <NewsLetterBox />

            </Container >
        </>

    )
}