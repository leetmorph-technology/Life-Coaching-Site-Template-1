import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecificPage from './page/SpecificPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SpecificPage pageName="home" />} /> 
        <Route path="/about" element={<SpecificPage pageName="about" />} />
        <Route path="/process" element={<SpecificPage pageName="process" />} /> 
        <Route path="/resources" element={<SpecificPage pageName="resources" />} />
        <Route path="/faq" element={<SpecificPage pageName="faq" />} />
        <Route path="/testimonials" element={<SpecificPage pageName="testimonials" />} />
        <Route path="/contact" element={<SpecificPage pageName="contact" />} />
        <Route path="/subscribe" element={<SpecificPage pageName="subscribe" />} />
        <Route path="/*" element={<SpecificPage pageName="error" />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App


{/*  */}