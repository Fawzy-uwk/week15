import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import About from "./Components/about";
import { Portfolio } from "./Components/portfolio";
import Contact from "./Components/Contact";
import Layout from "./Components/Layout";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>





  );
}

export default App;
