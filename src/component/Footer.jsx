import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const bloggerName = "Viswajitharidas"; 

  return (
    <footer className="mt-auto py-3 bg-dark margin-top">
      <Container>
        <Row>
          <Col>
            <p className="text-p">
              &copy; {new Date().getFullYear()} {bloggerName}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className=" text-p">
              Built with React and Bootstrap
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-p">
              Follow us on   
              <a href="https://www.instagram.com/v_i_s_w_a___jith_111" target="_blank" rel="noopener noreferrer"> Instagram</a>, 
              <a href="https://www.facebook.com/profile.php?id=100087957264398" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
              <a href="https://linkedin.com/in/viswajith-haridas-a21876245" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
              <a href="https://wa.me/9633266549" target="_blank" rel="noopener noreferrer"> Whatsapp</a>
          
          
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
