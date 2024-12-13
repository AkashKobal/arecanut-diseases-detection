import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HtmlRenderer from './HtmlRenderer'; // Import the HtmlRenderer component

const Papers = () => {
  // Example HTML content (can be dynamic)
  const htmlContent = `

  <h1> Your HTML content goes here </h1>

  `;

  return (
    <div>
      <Navbar />
      <div className="paper-content">
        <HtmlRenderer html={htmlContent} />
      </div>
      <Footer />
    </div>
  );
};

export default Papers;
