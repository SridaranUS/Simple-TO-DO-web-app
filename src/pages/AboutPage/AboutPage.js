import React from "react";
import NavBar from "../../components/NavBar/NavBar.js";
import AboutContent from "../../components/AboutContent/AboutContent.js";

/**
 * Renders a About page content
 *
 *
 *
 * @returns {JSX.Element} The JSX representation of the Navbar and About Page Content
 */
const AboutPage = () => {
  return (
    <>
      <NavBar />
      <AboutContent />
    </>
  );
};

export default AboutPage;
