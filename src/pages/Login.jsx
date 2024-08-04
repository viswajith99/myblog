import React, { useState } from 'react'
import { Col, Container,Button, Form, Row } from 'react-bootstrap'

const Login = () => {
   

    const [validated, set_Validated] = useState(false);
    const [form_Data, set_Form_Data] = useState({
      name: "",
      pass: "",
      email: "",
  
    });
    const submitFn = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      set_Validated(true);
    };
    const chngFn = (event) => {
      const { name, value } = event.target;
      set_Form_Data({
        ...form_Data,
        [name]: value,
      });
    }

   
  return (
    <div>
      <Container className="my-5">
    <Row className="justify-content-center">
      <Col md={6} lg={4}>
        <h2 className="text-center mb-4">Login</h2>
        <Form noValidate validated={validated} onSubmit={submitFn}>
            <Form.Group className="mb-3" controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' value={form_Data.user}
                onChange={chngFn}
                pattern="^[a-zA-Z0-9]+$"
                required
                isInvalid={
                  validated &&
                  !/^[a-zA-Z0-9]+$/.test(form_Data.user)
                } />
              <Form.Control.Feedback type="invalid">
                Please enter a valid username (alphanumeric
                characters only).
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form_Data.email}
                onChange={chngFn}
                required
                isInvalid={
                  validated &&
                  !/^\S+@\S+\.\S+$/.test(form_Data.email)
                }
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='pass' value={form_Data.pass}
                onChange={chngFn}
                minLength={8}
                required
                isInvalid={
                  validated && form_Data.pass.length < 8
                }
              />
               <Form.Control.Feedback type="invalid">
                Passwords do not match.
              </Form.Control.Feedback>
            </Form.Group>

            
             
            
            <Button variant="primary" type="submit" className="w-100">
              Login 
            </Button>
          </Form>
      
      </Col>
      <Row>
       <Col>
          <p style={{ textAlign: 'center' }}>Don't have an account? <a href="/signup" >Signup</a></p>
        </Col>
      </Row>
      
    </Row>
  </Container>
    </div>
  )
}

export default Login
