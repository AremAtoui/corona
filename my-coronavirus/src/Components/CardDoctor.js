import React from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function CardDoctor({ doctor, ping, setping }) {
  const dispatch = useDispatch();
  return (
    <div className="Card">
      <Link style={{ textDecoration: "none", color: "black" }} to={`/trailer/${doctor.name}`}>
        <Card style={{ width: '18rem', margin: "20px", borderRadius: "12px 12px 0px 0px", height: "686px" }}>
          <Card.Img variant="top" src={doctor.image} />

          <Card.Body>
            <Card.Text>
              {doctor.name}
            </Card.Text>
            <Card.Text>
              {doctor.specialité}
            </Card.Text>
       
            <Card.Text>
              {doctor.adresse}
            </Card.Text>
            <Card.Text>
              {doctor.email}
              </Card.Text>
              <Card.Text>
              {doctor.téléphone}
              </Card.Text>
              <Card.Text>
              {doctor.prix}
              </Card.Text>
              <Card.Text>
              {doctor.grade}
              </Card.Text>
              <Card.Text>
              {doctor.region}
            </Card.Text>
         
          </Card.Body>

        </Card>
      </Link>
    </div>
  )
}

export default CardDoctor;