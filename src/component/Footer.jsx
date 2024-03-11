import { Box, Button, Link, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (

        <>
            <Box sx={{
                width: "100%",
                background: "#F5F1E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: "1rem"
            }}>
                <Link href="#">
                    <ArrowUpwardIcon sx={{
                        cursor: "pointer",
                        color: "#718096",
                        '&:hover': {
                            color: "#718096dd"
                        }
                    }} />
                </Link>
            </Box>
            <footer style={{
                background: "#424850 url(/src/images/footer-bg.jpg) top center no-repeat",
                color: "#A1A8A8",
                padding: "2rem 1rem",
                
            }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent:"space-around",
                        flexDirection: { xs: "column", sm: "row" },
                        gap:{xs:"3rem",sm:"0"}
                    }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "flex" },
                        gap:"1rem"
                    }}>
                        <h3>Keep in Touch</h3>
                        <Typography>
                            If you'd like to get my newsletters, class information and articles, subscribe below.
                        </Typography>
                        <Button sx={{
                            background: "#616c7a",
                            width: "max-content",
                            color: "#fff",
                            fontWeight: "500",
                            // margin: " 0 auto",
                            transition: "300ms all ease-in-out",
                            px: "1rem",
                            '&:hover': {
                                background: "#616c7aaa",
                                color: "#fff"
                            }
                        }}
                        href="/subscribe"
                        >subscribe</Button>
                    </Box>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:{xs:"center",sm:"flex-end"},
                        gap:"1rem"
                    }}>
                        <Typography>
                            © 2024 Leetmorph Technology Ontological Life Coach. All rights reserved.
                        </Typography>
                        <Box 
                        sx={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                            <Link sx={{color:"inherit", cursor:"pointer"}} href="/"><HomeIcon sx={{cursor:"pointer"}} /></Link>&nbsp;|&nbsp;
                            <Link sx={{color:"inherit", cursor:"pointer"}} href="/about">About</Link>&nbsp;|&nbsp;
                            <Link sx={{color:"inherit", cursor:"pointer"}} href="/process">Process</Link>&nbsp;|&nbsp;
                            <Link sx={{color:"inherit", cursor:"pointer"}} href="/testimonials">Testimonials</Link>&nbsp;|&nbsp;
                            <Link sx={{color:"inherit", cursor:"pointer"}} href="/faq">FAQs</Link>&nbsp;|&nbsp;
                            <Link sx={{color:"inherit", cursor:"pointer"}} href="/resources">Resources</Link>&nbsp;|&nbsp;
                            <Link sx={{color:"inherit", cursor:"pointer"}} href="/contact">Contact</Link>
                        </Box>
                        <Box 
                        sx={{
                            display:"flex",
                            gap:"1rem"
                        }}
                        >
                            Connect with Leetmorph
                            <FacebookIcon />
                            <LinkedInIcon />
                            <EmailIcon />
                        </Box>
                    </Box>
                </Box>
            </footer>
        </>
    )
}