import React, {useEffect} from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import Certificates from "./Components/Certificates";
import Projects from "./Components/Projects";

const App= () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
