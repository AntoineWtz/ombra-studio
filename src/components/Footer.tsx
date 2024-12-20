import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-dark p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Ombra Studio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
