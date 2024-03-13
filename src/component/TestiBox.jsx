import { Box } from "@mui/material";
import Quotes from "../images/quotes.png"
import Paragraph from "./Paragraph";

export default function TestiBox({ name, address, message }) {
    return (
        <>
            <Box sx={{
                background: "#FAF8F3",
                display: "flex",
                gap: "1rem",
                margin: "1rem 0"
            }}>
                <Box sx={{
                    width: "45%"
                }}>
                    <img src={Quotes} style={{
                        width: "8rem",
                        height: "8rem",
                    }} />
                </Box>
                <Box sx={{
                }}>
                    <p style={{
                        fontSize:"1.7rem",
                        margin: "10px 20px 0 20px",

                    }}><b>{name} </b> , <span>{address}</span></p>
                    <Paragraph text="Molly is a caring, considerate, and intuitive coach. I met Molly three years ago when I was a new Coach. I wanted her to be my mentor coach. Molly not only mentored me but helped me with personal issues. I was going through a painful divorce with children involved and rejoining the work force at 50 years old, yikes! Molly helped me see how all aspects of my life interplayed. Under her love and coaching I achieved peace in my heart and the level of Associate Certified Coach with ICF. I continue to ask Molly for coaching as I need it. I completely recommend Molly and her big heart to anyone seeking a Life Coach." />
                </Box>
            </Box>
        </>
    )
}