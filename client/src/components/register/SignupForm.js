import React from 'react';
import { Form } from 'react-bootstrap';

const SignupForm = () => {

  return (
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type='text'
          placeholder='Your email'
          name='email'
        />
      </Form.Group>
    </Form>
  );
};

export default SignupForm;