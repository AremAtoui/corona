import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editdoctor } from '../redux/DoctorSlice';
function EditDoctor({ el, ping, setping }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const [edited, setedited] = useState({
        image: el.image,
  
        name:el.name,
     specialité:el.specialité,
       adresse: el.adresse,
    
      email: el.email,
      télépone: el.téléphone,
    prix: el.prix,
    grade: el.grade,
    region:el.region
    })
  return (
    <div>
           <div className="Aa" style={{ borderRadius: "7px"}}>
      <button onClick={handleShow} className="Btn" >
        <u style={{marginLeft: "-15px"}}>Edit </u>
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder={el.image} onChange={(e) => setedited({ ...edited, image: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={el.name} onChange={(e) => setedited({ ...edited, name: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Specialité</Form.Label>
            <Form.Control type="text" placeholder={el.specialité} onChange={(e) => setedited({ ...edited, specialité: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse</Form.Label>
            <Form.Control type="text" placeholder={el.adresse} onChange={(e) => setedited({ ...edited, adresse: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder={el.email} onChange={(e) => setedited({ ...edited, email: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control type="text" placeholder={el.téléphone} onChange={(e) => setedited({ ...edited, téléphone: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Prix</Form.Label>
            <Form.Control type="text" placeholder={el.prix} onChange={(e) => setedited({ ...edited, prix: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Grade</Form.Label>
            <Form.Control type="text" placeholder={el.grade}onChange={(e) => setedited({ ...edited, grade: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Region</Form.Label>
            <Form.Control type="text" placeholder={el.region}onChange={(e) => setedited({ ...edited, region: e.target.value })} />
          </Form.Group>

        </Form></Modal.Body>
        <Modal.Footer >
          <Button className="btn1" style={{width:"70px"}} onClick={handleClose}>
            Close
          </Button>
          <Button className="btn2" style={{width:"70px"}}onClick={() => { dispatch(editdoctor({id:el._id, edited})); setping(!ping); handleClose()}}>
            Edit 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  )
}

export default EditDoctor;