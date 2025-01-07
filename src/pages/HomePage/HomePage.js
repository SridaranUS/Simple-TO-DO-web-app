import React from "react";
import NavBar from "../../components/NavBar/NavBar.js";
import HomePageContent from "../../components/HomePageContent/HomePageContent.js";

/**
 * Renders a Home page content
 *
 *
 *
 * @returns {JSX.Element} The JSX representation of the Navbar and Home Page Content
 */
const HomePage = () => {
  return (
    <>
      <NavBar />
      <HomePageContent />
    </>
  );
};

export default HomePage;
