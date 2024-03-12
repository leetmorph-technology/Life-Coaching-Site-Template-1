import { Box, Container, Typography } from "@mui/material";
import TitleForPage from "./TitleForPage";
import aboutPhoto from "../images/about-1.jpg"
import Paragraph from "./Paragraph";
import BulletedList from "./BulletedList";

export default function About() {
    const headingRule = {
        fontSize: "1.6em",
        fontWeight: "400",
        color: "#345e65",
        padding: "10px 20px"
    }
    const textRuleQuote = {
        color: "#655b55",
        padding: "10px 20px",
        lineHeight: "1.5",
        fontSize: "1em",
        fontStyle: "Italic",
    }
    const aboutText = {
        color: "#655b55",
        padding: "10px 20px",
        lineHeight: "1.5",
        fontSize: "1em",
    }
    return (
        <>
            <TitleForPage text="About Leetmorph Technology" />
            <Container maxWidth="xl" sx={{
                display:"flex",
                gap:"2rem",
                flexDirection:{xs:"column",sm:"row"}
            }}>
                <Box sx={{
                    width:"60%"
                }}>
                    <img src={aboutPhoto} alt="About Us" style={{
                        display: "block",
                        margin: "10px auto",
                        width: "80%",
                        height: "auto",
                        padding: "5px",
                        border: "1px solid #ccc",
                    }} />
                    <Box>
                        <Paragraph text="We share about me only to encourage life about you." />
                        <Paragraph text="We are the sons, brothers, friends, and the professional." />
                        <Paragraph text="We are in the trenches of this thing called life and we absolutely love, love, love living it! It challenges us, and saddens and elates. We have suffered disappointments and enjoyed glorious success." />
                        <Paragraph text="We love nature, our family, and friends but, more than anyone or anything, We love ourself. (And that takes guts!)" />
                        <Paragraph text="Our life's purpose is to perpetuate wellness, joy, life sustaining changes and abundant possibilities for the body, mind, heart, and soul." />
                        <hr />
                    </Box>
                </Box>
                <Box>
                    <h1 style={headingRule}>Qualifications</h1>
                    <BulletedList list="NCC, PCC Certified Ontological Life Coach" />
                    <BulletedList list="Newfield Network, Boulder, CO." />
                    <BulletedList list="Member of International Coach Federation" />
                    <BulletedList list="Member of Tucson Coaches Alliance" />
                    <BulletedList list="Extraordinary Coaching Award in 2012" />
                    <ul style={{
                        margin: "5px 5px 5px 40px",
                        padding: "0px",
                    }}>
                    </ul>
                    <Box
                        sx={{
                            borderLeft: "2px dotted #CCCCCC",
                            marginLeft: { xs: "3rem", sm: "35px", },
                            mt: { xs: "3rem", sm: "25px", },
                        }}>
                        <Typography sx={textRuleQuote}>
                            "I believe in everything you are!"
                        </Typography>
                        <Typography sx={textRuleQuote}>
                            - Anonymous
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}