import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const style = {
    padding: '20px'
  }

const btnStyle = {
    margin: '10px'
}

  const Edit = () => {
    const [validated, setValidated] = useState(false);
    const users = useSelector((state) => state.user.users)


    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

  return <Container className='mt-5'>
    <Card style={style}>
    <h3>Edit User</h3>
    <Form className='mt-3' noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" required />
            <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="abc@abc.com" required />
            <Form.Control.Feedback type="invalid">
            Email is Required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="abc" />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>City</Form.Label>
            <Form.Control type="password" placeholder="abc" />
        </Form.Group>
        
        <Row>
            <Col md={{ span: 3, offset: 9 }}>
                <Link to='/'>
                    <Button variant="outline-danger" type='button' style={btnStyle} >
                    Cancel
                    </Button>
                </Link>
            

            <Button  variant="primary" type="submit" style={btnStyle}>
            Submit
            </Button>
            </Col>
        </Row>
        
    </Form>
    </Card>
  </Container>;
}

export default Edit;
