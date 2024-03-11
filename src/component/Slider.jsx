import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views-react-18";
import { autoPlay } from "react-swipeable-views-utils";
import SliderImg1 from "../images/slider-img/slider-1.jpg";
import SliderImg2 from "../images/slider-img/slider-2.jpg";
import SliderImg3 from "../images/slider-img/slider-3.jpg";
import { Typography } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews, { interval: 5000 });

const images = [
    {
        label: "Live Extraordinary",
        imgPath: SliderImg1,
    },
    {
        label: "Forge a New Path",
        imgPath: SliderImg2,
    },
    {
        label: "Be Present",
        imgPath: SliderImg3,
    },
];

function Slider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const StyledContainer = {
        padding: "5rem 1.5rem",
        "@media (min-width:600px)": {
            textAlign: "center",
        },
    };

    return (
        <Grid
            container
            sx={{
                minWidth: { xs: "100%" },
                maxHeight: { md: "90vh" },
                margin: { xs: "0", md: "2rem 0" },
                px: { xs: "0" },
                py: { xs: "0" }
            }}
            overflow="hidden"
        >
            <Grid item xs={12} md={12} sx={{

            }}>
                <div>
                    <Box
                        sx={{
                            position: "relative",
                        }}
                        id="ms"
                    >

                        <AutoPlaySwipeableViews
                            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {images.map((step, index) => (
                                <div
                                    key={step.label}
                                    style={{
                                        overflow: "hidden",
                                        position: "relative",
                                        minHeight: "15rem"
                                    }}
                                >
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: "100%",
                                                width: "100%",
                                                display: "block",
                                                overflow: "hidden",
                                                margin: "auto",
                                                objectFit: "fill",
                                                objectPosition: "center",
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ) : null}
                                    <Typography sx={{
                                        position: "absolute",
                                        bottom: "0",
                                        color: "#fff",
                                        fontSize: "2.4rem",
                                        padding: "0px 10px",
                                        background: "rgba(0, 0, 0, 0.6)",
                                        width: "100%"

                                    }}>{step.label}</Typography>
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}

export default Slider;