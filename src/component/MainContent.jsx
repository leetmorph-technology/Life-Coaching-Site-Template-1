import HelpYou from "./HelpYou";
import Slider from "./Slider";
import WhyUs from "./WhyUs";

export default function MainContent({page}) {
  
  return (
    <>
      {page == "home" && <Slider />}
      {page == "home" && <WhyUs />}
      {page == "home" && <HelpYou />}
      {page != "home" && ` ${page} page is not yet created `}
    </>
  )
}
