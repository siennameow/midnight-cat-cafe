import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const LoginForm = () => {
  const [userLoginData, setUserLoginData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

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

export default LoginForm;