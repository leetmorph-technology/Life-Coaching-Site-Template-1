import { Container } from "@mui/material"
import BulletedList from "./BulletedList"
import Paragraph from "./Paragraph"
import TitleForPage from "./TitleForPage"

export default function Resources() {
    const headingRule = {
        fontSize: "1.6em",
        fontWeight: "400",
        color: "#345e65",
        padding: "10px 20px"
    }
    return (
        <>
            <TitleForPage text="Resources" />
            <Container maxWidth="xl" sx={{minHeight:"50vh"}}>
                <h1 style={headingRule}>Recommended Reading</h1>
                <Paragraph text="Leetmorp's recommendations for clients: These are simply works of literature that sparks intrigue and helps develop a more open and observational awareness." />
                <BulletedList list="Co-Dependent No More" />
                <BulletedList list="Radical Forgiveness" />
                <BulletedList list="A Dog's Purpose" />
                <BulletedList list="God on a Harley" />
                <BulletedList list="The Seven Spritual Laws of Success" />
                <BulletedList list="The Four Agreements Companion Book : Using the Four Agreements to Master the Dream of Your Life" />
                <BulletedList list="You Can Heal Your Life" />
                <BulletedList list="Breaking the Habit of Yourself" />
            </Container>
        </>

    )
}