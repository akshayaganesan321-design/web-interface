import React from 'react';

function Footer() {
  // Embedding JavaScript expression for current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p>&copy; {currentYear} College Student Dashboard System. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;