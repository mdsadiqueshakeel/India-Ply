import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-4 mt-5">
      <p>&copy; {new Date().getFullYear()} India Ply. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
