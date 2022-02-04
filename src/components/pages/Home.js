import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Modal, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FetchUsers } from '../../redux/User/actions';


const style = {
  padding: '20px'
}

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedID, setSelectedID] = useState(null)

  const dispatch = useDispatch();
  const history = useNavigate();
  const users = useSelector((state) => state.user.users)

	useEffect(() => {
		if (users.length === 0) {
			dispatch(FetchUsers());
		}
	}, [users, dispatch]);

  const onDelete = (id) => {

    dispatch({type: 'DELETE_USER', payload: id})
    handleClose();

  }

  const onEdit =(id) => {
    dispatch({type: 'SELECTED_USER', payload: id})
    history('/edit')


  }

  // console.log(users)



  return <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Record?</Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => onDelete(selectedID)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <h1 className='mt-5'>
          Dashboard
      </h1>
      
      <Card  style={style}>
        <Row className='mt-3 mb-4'>
          <Col md={3}>
          <h3>User list</h3>
          </Col>


          <Col md={{ span: 3, offset: 6 }} >
          <Link to='/addnew'>
          <Button className="float-end" variant="primary">Add new</Button>{' '}
          </Link>
          </Col>

        
        </Row>


      <Card style={style}>

      <Table >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>



        <tbody>
         {users !== null && users.map((user, index)=> (
           <tr key={index}
           >
             <td>{user.id}</td>
             <td>{user.name}</td>
             <td>{user.username}</td>
             <td>{user.email}</td>
             <td>{user?.address?.city || user.city}</td>
             <td><Button variant="warning" onClick={() => onEdit(user.id)}>Edit</Button>{' '}</td>             
             <td><Button variant="danger" onClick={() => {handleShow(); setSelectedID(user.id)}}>Delete</Button>{' '}</td>
            
           </tr>

         ))}
        </tbody>

      </Table>

      </Card>

     
      </Card>
      
      
  </Container>;
};

export default Home;
