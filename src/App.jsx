import AppLayout from "./Pages/AppLayout";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Certificates from "./Pages/Certificates";
import About_me from "./Pages/About_me";
import Contact from "./Pages/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="about_me" element={<About_me />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
  );
}

export default App;
