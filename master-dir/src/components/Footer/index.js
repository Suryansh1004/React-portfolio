import React from 'react';
import Anchor from 'components/Anchor';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© 2020 -`}
    </span> 
    <Anchor className="footer__link" secondary href="###">
      Suryansh Tripathi
    </Anchor>
  </footer>
);

export default Footer;
