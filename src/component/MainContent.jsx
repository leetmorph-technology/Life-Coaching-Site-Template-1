import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import HelpYou from "./HelpYou";
import Process from "./Process";
import Resources from "./Resources";
import Slider from "./Slider";
import Testimonials from "./Testimonial";
import WhyUs from "./WhyUs";

export default function MainContent({page}) {
  
  return (
    <>
      {page == "home" && <Slider />}
      {page == "home" && <WhyUs />}
      {page == "home" && <HelpYou />}
      {page == "about" && <About />}
      {page == "process" && <Process />}
      {page == "resources" && <Resources />}
      {page == "faq" && <Faq />}
      {page == "testimonials" && <Testimonials />}
      {page == "contact" && <Contact />}
      {(!["home","about","process","resources","faq","testimonials","contact"].includes(page)) && ` ${page} page is not yet created `}
    </>
  )
}

// if (!["home","about","process","resources"].includes(page)) {
//   console.log(`${page} page is not yet created`);
// }
