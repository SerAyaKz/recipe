import React from "react";
import "./styles.css"; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Shelpek. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
