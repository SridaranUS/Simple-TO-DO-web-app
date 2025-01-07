import React from "react";
import "./AboutContent.css";

/**
 * Renders a About page content
 *
 *
 *
 * @returns {JSX.Element} The JSX representation of the About Page Content
 */

const AboutContent = () => {
  return (
    <div className="content">
      <h1>WebSite is created by using React Framework</h1>
      <p className="tech">Technologies used in this website:</p>
      <ul className="about-tech">
        <li>HTML5: Structural markup.</li>
        <li>CSS3: Styling and responsive design.</li>
        <li>JavaScript (ES6+): Task management logic.</li>
        <li>Axios: TO fetch data from API</li>
        <li>React Router: For navigation between pages.</li>
      </ul>
    </div>
  );
};

export default AboutContent;
