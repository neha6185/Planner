import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>Copyright ⓒ NehaAgrawal {year}</p>
      </footer>
  );
}

export default Footer;
