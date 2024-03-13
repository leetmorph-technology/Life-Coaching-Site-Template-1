import * as React from 'react';
import { Box, Container, FormControl, InputLabel, MenuItem, Select, Typography, FormControlLabel } from "@mui/material";
import TitleForPage from "./TitleForPage";
import Paragraph from "./Paragraph";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Contact() {

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [message, setMessage] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <>
            <TitleForPage text="Contact" />
            <Container maxWidth="xl" sx={{
                display: "flex",
                flexDirection:{xs:"column",sm:"row"},
                justifyContent: "space-between",
                gap: ".5rem"
            }}>
                <Box sx={{
                    width: { xs: "100%", sm: "45%" }
                }}>
                    <Paragraph text="By Phone:" />
                    <Typography sx={{
                        fontSize: "2rem",
                        fontWeight: "500",
                        marginLeft: "20px"
                    }}>
                        +977 980 606 0663
                    </Typography>
                    <Paragraph text="You can also email Molly Eglin using the form below. We don’t share contact information with anyone so rest assured your information is safe." />

                </Box>
                <Box sx={{
                    width: { xs: "100%", sm: "32%" }
                }}>
                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="fname"
                            label="First Name"
                            name="fname"
                            autoComplete="First Name"
                            autoFocus
                            sx={{
                                display: "inline-block",
                                marginRight: { xs: "0", sm: "15px" },
                                width: { xs: "100%", sm: "calc(50% - 15px)" },
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lname"
                            label="Last Name"
                            name="lname"
                            autoComplete="Last Name"
                            autoFocus
                            sx={{
                                display: "inline-block",
                                marginLeft: { xs: "0", sm: "15px" },
                                width: { xs: "100%", sm: "calc(50% - 15px)" }
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="phone"
                            label="Phone"
                            type="tel"
                            id="phone"
                            autoComplete="phone"
                        />

                        <FormControl fullWidth margin="normal">
                            <InputLabel id="reason">Reason for Contact</InputLabel>
                            <Select
                                labelId="reason"
                                id="reason"
                                onChange={handleChange}
                            >
                                <MenuItem value="Life Coaching Session">Life Coaching Session</MenuItem>
                                <MenuItem value="Major Life Changes">Major Life Changes</MenuItem>
                                <MenuItem value="Workshop">Workshop</MenuItem>
                                <MenuItem value="Weekly Session">Weekly Session</MenuItem>
                                <MenuItem value="More Information">More Information</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            label="Comments or Question"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            margin="normal"
                            required
                            multiline
                            rows={4}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}