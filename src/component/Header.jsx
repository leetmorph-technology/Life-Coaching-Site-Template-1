import Navigation from "./Navigation";
import Box from '@mui/material/Box';
import logoOfPage from '../images/logo-1.PNG'
import { Container } from "@mui/material";


export default function Header() {
    return (
        <Box sx={{
            width:"100%", 
            background: {md:"#fff url(/src/images/header-bg2.jpg) top right no-repeat"}
        }} style={{}}>
            <Container maxWidth="xl">
                <Box sx={{
                    height: { sx: "8rem" },
                    width: { sx: "100%" },
                }}>
                    <img src={logoOfPage} alt="Logo of the Sample Page" sx={{ height: "auto", width: "100%" }} />
                </Box>
            </Container>
            <Navigation />
        </Box>

    )
}