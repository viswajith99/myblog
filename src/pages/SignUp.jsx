import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'




const SignUp = () => {
  const [validated, set_Validated] = useState(false);
  const [form_Data, set_Form_Data] = useState({
    name: "",
    pass: "",
    confimPass: "",
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
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form noValidate validated={validated} onSubmit={submitFn}>
            <Form.Group className="mb-3" controlId="name">
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
                Password must be at least 8 characters long.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confimPass"
                value={form_Data.confimPass}
                onChange={chngFn}
                minLength={8}
                required
                pattern={form_Data.pass}
                isInvalid={
                  validated &&
                  form_Data.confimPass !== form_Data.pass
                }
              />
              <Form.Control.Feedback type="invalid">
                Passwords do not match.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>

        </Col>

        
       
        <Row> <Col>
          <p style={{ textAlign: 'center' }}>Already have an account? <a href="/login" >Login</a></p>
        </Col></Row>
      </Row>
    </Container>
  );

}

export default SignUp
