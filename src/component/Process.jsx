import { Box, Button, Container, Typography } from "@mui/material";
import TitleForPage from "./TitleForPage";
import Paragraph from "./Paragraph";
import CoachingModel from "../images/coaching-model.jpg"
import NewsLetterBox from "./NewsletterBox";

export default function Process() {
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
            <TitleForPage text="Ontological Life Coaching" />
            <Container maxWidth="xl" sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                gap: "2rem",
                flexDirection: { xs: "column", sm: "row" },
                marginBottom: {xs:"40px"}
            }}>
                <Box sx={{
                    width: {xs:"100%",sm:"65%",md:"75%"},
                }}>
                    <Paragraph text="Ontology is “the study of being”; how we observe through our body, emotion, and language. Albert Einstein famously wrote, “We see the world not as it is, but as we are”. Our feelings the moments when we react, the words of regret, anger and blame: NO MORE reacting to each situation. Ontology gives the tools to merely “respond” and feel powerful within our truths. Ontological coaching is NOT a quick fix to short-term goals, but instead it is creating lasting solutions for living a powerful, sustainable life." />
                    <Paragraph text="With our own unique approach, we provide intuitive guidance, wisdom, and keen insight to my clients. We offer lightness, compassion, and commitment to the wellness of being. Through thoughtful, confidential, and safe conversations, we will observe what’s working in your life, and what is not; this awareness, We promise, will allow unrealized freedom in both professional and personal relationships. Together, in a safe, trusting space between us, We will guide you towards the experience of perpetual joy." />
                    <Box
                        sx={{
                            borderLeft: "2px dotted #CCCCCC",
                            marginLeft: { xs: "3rem", sm: "35px", },
                            mt: { xs: "3rem", sm: "25px", },
                        }}>

                        <Typography sx={textRuleQuote}>
                            Live Extraordinary
                        </Typography>
                    </Box>

                    <h1 style={headingRule}>Ontological Life Coaching Chart by Leetmorph Technology</h1>

                    <table cellPadding="0" cellSpacing="0" border="1">
                        <thead>
                            <tr>
                                <th style={{
                                    color: "#fff",
                                    border: "1px solid #ccc",
                                    background: "#a8b1be",
                                    borderCcolor: "white",
                                }} ><span style={{ fontFamily: "'Quintessential', cursive", }}>IF</span></th>
                                <th style={{
                                    color: "#fff",
                                    border: "1px solid #ccc",
                                    background: "#a8b1be",
                                    borderCcolor: "white",
                                }} ><span style={{ fontFamily: "'Quintessential', cursive", }}>THEN</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Unconstructive moods and emotions control your life</td>
                                <td>Learn how to SHIFT those moods and emotions and manage how you respond to life</td>
                            </tr>
                            <tr>
                                <td>Resignation and hopelessness</td>
                                <td>Enjoy new possibilities for your life; get excited!</td>
                            </tr>
                            <tr>
                                <td>Dreading another day like this one</td>
                                <td>Wake up to your greatest potential</td>
                            </tr>
                            <tr>
                                <td>No sustainable, loving, collaborative relationship</td>
                                <td>Discover the true cause of why you don’t have the relationship you desire; meet your self-saboteur.</td>
                            </tr>
                            <tr>
                                <td>Fear (of abandonment, loss, job security, and even, success!)</td>
                                <td>Distinguish between fears that serve and fear that is a function of the stories we tell ourselves; the messaging we’ve accepted</td>
                            </tr>
                            <tr>
                                <td>Familial connections are a source of frustration and tumult</td>
                                <td>Create boundaries that protect you and allow connections</td>
                            </tr>
                            <tr>
                                <td>Ambivalent and overwhelmed</td>
                                <td>Gain confidence and perspective</td>
                            </tr>
                            <tr>
                                <td>Without a clue of what you need</td>
                                <td>Discover all you want</td>
                            </tr>
                            <tr>
                                <td>Not enough</td>
                                <td>Live as you deserve</td>
                            </tr>
                            <tr>
                                <td>Sad, tired, and disillusioned</td>
                                <td>Unearth happiness, energy, and clarity</td>
                            </tr>
                        </tbody>
                    </table>

                </Box >
                <NewsLetterBox />

            </Container >

            <TitleForPage text="Ontological Coaching Model" />
            <Container maxWidth="xl" sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                gap: "2rem",
                flexDirection: { xs: "column", sm: "row" },
            }}>
                <Box sx={{
                    width: "100%",
                    marginBottom:"40px",
                }}>
                    <Paragraph text="Our approach guides clients utilizing the ontological method of life coaching. The core of coaching is developing quality in the present and possibilities for future goals. Becoming a powerful observer in life creates outcomes for powerful and effective results." />
                    <Box sx={{
                        width:"100%",
                        display:"flex",
                        justifyContent:"center",
                    }}>
                        <img src={CoachingModel} alt="our coaching model" />
                    </Box>
                    
                    <Paragraph text="You can learn the differences between life coaches and those that implement the ontological method within their coaching models." />
                    <Paragraph text="A life coach recognizes that the client is the only expert on him or herself. People intuitively know who they are and what they need. A life coach then brings his or her own experience and expertise in a process that allows the client to discover and draw on their best self, which is the essential step to the coaching process." />

                    <h1 style={headingRule}>Life Coaching</h1>
                    <Paragraph text="A Life Coach is different from other types of consultants, mentors, counselors or therapists. Life coaching specifically deals with personal projects, business successes, relationships, transitions or major life changes by examining what is going on right now with you as a unique individual and discovering what your personal obstacles or challenges might be. This empowers you to take control and live the life that you want." />
                    <Paragraph text="A life coach recognizes that the client is the only expert on him or herself. Clients know intuitively who they are and what they need. A life coach brings her own experience and expertise in a process that allows the client to discover and draw on his or her very best self, which is the essential step for creating a sustainable and fulfilling life." />

                    <h1 style={headingRule}>Ontological Life Coaching</h1>
                    <Paragraph text="Ontological Life Coaches take the life coaching process one step further as experts in the ontological method, which is essentially the study of being – what it means to be human. As we understand that we live in a world of increasing complexity and change, we have to learn to cope effectively with the world around us." />
                    <Paragraph text="Ontological coaching allows for a deepening of how our body, emotions and language are creating the reality in which we observe. In other words, we are responsible for creating our own destiny; an ontological coach is skilled at helping you determine exactly how your actions, your demeanor, decisions and thought processes impact every part of the world." />
                </Box >

            </Container >
        </>
    )
}