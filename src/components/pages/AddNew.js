import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AddUser } from '../../redux/User/actions';

const style = {
    padding: '20px'
  }

const btnStyle = {
    margin: '10px'
}



const AddNew = () => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate()
  const users = useSelector((state) => state.user.users)

const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
};


  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [city, setCity] = useState(false);



    const postData = () => {
      const body = {
        id: users.length + 1,
        name,
        email,
        username,
        city
      }
      dispatch(AddUser(body, history) 
      )
    }

   


  return <Container className='mt-5' >
    <Card style={style}>
    <h3>Add User</h3>
    <Form className='mt-3' noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" onChange={(e) => setName(e.target.value)} required  />
            <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="abc@abc.com" onChange={(e) => setEmail(e.target.value)} required/>
            <Form.Control.Feedback type="invalid">
            Email is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName" >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="abc"  onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="abc"  onChange={(e) => setCity(e.target.value)}  />
        </Form.Group>
        
        <Row>
            <Col md={{ span: 3, offset: 9 }}>
            <Link to='/'>
            <Button variant="outline-danger" type="submit" style={btnStyle}>
            Cancel
            </Button>
            </Link>

            <Button  variant="primary" onClick={postData} style={btnStyle}>
            Submit
            </Button>
            </Col>
        </Row>
        
    </Form>
    </Card>
  </Container>;
}

export default AddNew;
