import { Box, Container } from "@mui/material";
import TestiBox from "./TestiBox";
import TitleForPage from "./TitleForPage";
import Paragraph from "./Paragraph";
import NewsLetterBox from "./NewsletterBox";

export default function Testimonials() {
    return (
        <>
            <TitleForPage text="Testimonials" />
            <Container maxWidth="xl" sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                gap: "2rem",
                minHeight: "50vh",
                flexDirection: { xs: "column", sm: "row" },
                marginBottom: { xs: "40px" }
            }}>
                <Box sx={{
                    width: { xs: "100%", sm: "65%", md: "75%" },
                }}>
                    <Paragraph text="Below are questions and answers I discuss often. Do not hesitate to contact me with your questions." />
                    <TestiBox name="Nancy Cohen" address="ACC, RN" message="Molly is a caring, considerate, and intuitive coach. I met Molly three years ago when I was a new Coach. I wanted her to be my mentor coach. Molly not only mentored me but helped me with personal issues. I was going through a painful divorce with children involved and rejoining the work force at 50 years old, yikes! Molly helped me see how all aspects of my life interplayed. Under her love and coaching I achieved peace in my heart and the level of Associate Certified Coach with ICF. I continue to ask Molly for coaching as I need it. I completely recommend Molly and her big heart to anyone seeking a Life Coach." />

                    <TestiBox name="Nancy Cohen" address="ACC, RN" message="Molly is a caring, considerate, and intuitive coach. I met Molly three years ago when I was a new Coach. I wanted her to be my mentor coach. Molly not only mentored me but helped me with personal issues. I was going through a painful divorce with children involved and rejoining the work force at 50 years old, yikes! Molly helped me see how all aspects of my life interplayed. Under her love and coaching I achieved peace in my heart and the level of Associate Certified Coach with ICF. I continue to ask Molly for coaching as I need it. I completely recommend Molly and her big heart to anyone seeking a Life Coach." />

                    <TestiBox name="Nancy Cohen" address="ACC, RN" message="Molly is a caring, considerate, and intuitive coach. I met Molly three years ago when I was a new Coach. I wanted her to be my mentor coach. Molly not only mentored me but helped me with personal issues. I was going through a painful divorce with children involved and rejoining the work force at 50 years old, yikes! Molly helped me see how all aspects of my life interplayed. Under her love and coaching I achieved peace in my heart and the level of Associate Certified Coach with ICF. I continue to ask Molly for coaching as I need it. I completely recommend Molly and her big heart to anyone seeking a Life Coach." />

                    <TestiBox name="Nancy Cohen" address="ACC, RN" message="Molly is a caring, considerate, and intuitive coach. I met Molly three years ago when I was a new Coach. I wanted her to be my mentor coach. Molly not only mentored me but helped me with personal issues. I was going through a painful divorce with children involved and rejoining the work force at 50 years old, yikes! Molly helped me see how all aspects of my life interplayed. Under her love and coaching I achieved peace in my heart and the level of Associate Certified Coach with ICF. I continue to ask Molly for coaching as I need it. I completely recommend Molly and her big heart to anyone seeking a Life Coach." />


                </Box >
                <NewsLetterBox />

            </Container >
        </>
    )
}