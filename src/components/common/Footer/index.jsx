import React from "react";
import "./styles.css"; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdOh2K5r_v7Xa_OxxmEKb1rBO8dNj-jO6Zp1Xy5sWi2xmKqtQ/viewform?embedded=true" width="640" height="2127" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3642212396752437"
     crossorigin="anonymous"></script>
      <p>&copy; {new Date().getFullYear()} Shelpek. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
