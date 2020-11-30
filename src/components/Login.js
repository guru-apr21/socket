import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: '100vh' }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button variant="secondary">Create A new Id</Button>
      </Form>
    </Container>
  );
};

export default Login;
