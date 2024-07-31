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
              Follow us on  <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
              <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer"> Instagram</a>, 
              <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
              <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
