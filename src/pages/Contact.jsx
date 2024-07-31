
import '../component/Header.css'
import '../component/Footer.jsx'
import { Button, Col, Container, Form, Row, } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaGithub }from 'react-icons/fa';

import './Contact.css'

function Contact() {
  return (
    <div className='bg-div' ><Container >
      <Row md={12}>
        <Form className='form my-3'>
          <Form.Group className="mb-3" controlId="enter name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label> Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="outline-primary my-2">SendMessage</Button>{' '}
        </Form>
      </Row>

      <Row className="justify-content-center  my-4">
        <Col xs="auto">
          <a href="https://www.instagram.com/v_i_s_w_a___jith_111" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={50}  className='instagram-icon '/>
          </a>
        </Col>
        <Col xs="auto">
          <a href="https://www.facebook.com/profile.php?id=100087957264398" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={50} className='facebook-icon' />
          </a>
        </Col>
        <Col xs="auto">
          <a href="https://linkedin.com/in/viswajith-haridas-a21876245" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={50} className='linkedin-icon' />
          </a>
        </Col>
        <Col xs="auto">
          <a href="https://wa.me/9633266549" >
            <FaWhatsapp size={50} className='whatsapp-icon' />
          </a>
        </Col>
        <Col xs="auto" >
          <a href="https://github.com/viswajith99">
            <FaGithub size={30}  className='github-icon '  />
          </a>
        </Col>
      </Row>
      

    </Container></div>

  );
}
export default Contact;



