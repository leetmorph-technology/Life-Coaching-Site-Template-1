import Header from "../component/Header";
import MainContent from "../component/MainContent";
import Footer from "../component/Footer";

export default function SpecificPage({pageName}) {
    return(
        <>
        <Header />
        <MainContent page={pageName} />
        <Footer />
        </>
    )
}