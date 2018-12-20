import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="footer__company">
      <div>Terms and Conditions</div>
      <div>Privacy Policy</div>
      <div>Contact Us</div>
    </div>
    <div className="footer__social">
      <div>Follow Us</div>
      <div>
        <img src={require('./../../assets/imgs/fb.png')} alt="facebook logo"/>        
      </div>
      <div>
        <img src={require('./../../assets/imgs/twt.png')} alt="twitter logo"/>        
      </div>
    </div>
  </div>
);

export default Footer;
