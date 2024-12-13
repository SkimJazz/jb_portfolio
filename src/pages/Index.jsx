import React from 'react';
import { Header } from "../components";
import Intro from "./Intro.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import ToolBox from "./ToolBox.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";



const Landing = () => {

    
    return (
      <div>
        <Header />
        {/* <h1>Landing Component Test</h1>; */}
        <div className="bg-primary px-40 sm:px-5">
                <Intro />
                <About />
                <Projects />
                <ToolBox />
                <Resume />
                <Contact />
                <Footer />
            </div>
      </div>
    );
};

export default Landing;