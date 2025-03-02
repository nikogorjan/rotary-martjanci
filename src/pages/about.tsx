import React from 'react';

interface AboutProps {}

// A header component for the About page
const AboutHeader: React.FC = () => (
  <header>
    <h1>About Us</h1>
  </header>
);

// A content component for the About page
const AboutContent: React.FC = () => (
  <main>
    <p>
      This page gives you details about our project and our team. We are dedicated
      to providing high-quality solutions.
    </p>
  </main>
);

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <AboutHeader />
      <AboutContent />
    </div>
  );
};

export default About;