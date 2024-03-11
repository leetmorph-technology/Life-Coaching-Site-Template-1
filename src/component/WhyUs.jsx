import { Box, Container, Typography } from "@mui/material";

export default function WhyUs() {
    const textRule = {
        color: "#655b55",
        padding: "10px 20px",
        lineHeight: "1.5",
        fontSize: "1em"
    }
    const textRuleQuote = {
        color: "#655b55",
        padding: "10px 20px",
        lineHeight: "1.5",
        fontSize: "1em",
        fontStyle: "Italic"
    }
    const headingRule = {
        fontSize: "1.6em",
        fontWeight: "400",
        color: "#345e65",
        padding: "10px 20px"
    }
    return (
        <Container maxWidth="xl" sx={{
            display: { xs: "block", sm: "flex" },
            padding: "0",
            py:"2rem",
            pb:{xs:"1rem",sm:""},
            gap: { sm: "2rem" },
            borderBottom:{xs:"2px solid #CCCCCC",sm:"none"},
        }}>
            <Box>
                <h1 style={headingRule}>Why choose Leetmorph as your coach?</h1>
                <Typography sx={textRule}>
                    Leetmorph is a certified life coach who specializes in the holistic approach of Ontology (our nature of being). She is dedicated to helping improve the life of her clients with heart, honesty, authenticity and humor. Working with Leetmorph you will learn the tools to create new possibilities in your career, friendships, family dynamics, peer pressure, and love relationships. She will guide you in moving through challenges that possibly triggered beliefs you are not good enough. Leetmorph will help you live your best life from wisdom, strength, vulnerability and love.
                </Typography>
                <Typography sx={textRule}>
                    Ontology is based on the understanding of our emotional way of being, our moods and the conversations we have with others and ourselves.
                </Typography>
                <Typography sx={textRule}>
                    Our familiar, historic life is dominated from what we know TODAY…
                </Typography>
                <Typography sx={textRule}>
                    Through our sessions together, life will become manageable with emphasis on new results that allow your greatest “wants” to become your new reality.
                </Typography>
            </Box>
            <Box
                sx={{
                    borderLeft: "2px dotted #CCCCCC",
                    marginLeft:{xs:"3rem",sm:"0",},
                    mt:{xs:"3rem",sm:"0",}
                }}>
                <Typography sx={textRuleQuote}>
                    "Joy is a state of being that enters your heart when you are open to learning and taking loving care of yourself. Joy is the feeling of exuberance and oneness that envelopes you once you have opened to feeling your pain, learning from it, and moving through it."
                </Typography>
                <Typography sx={textRuleQuote}>
                    - Anonymous
                </Typography>
            </Box>
        </Container>
    )
}