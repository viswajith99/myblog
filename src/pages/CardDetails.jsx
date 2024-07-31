import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Home.jsx'

const CardDetails = ({ card, index }) => {
  const backgroundColors = ['#589636',' #000000', '#61DBFB',' #8CC84B'];
  const textColors = ['#FFFFFF', '#FFFFFF', '#000000', '#000000'];
  
  const backgroundColor = backgroundColors[index] || 'honeydew';
  const textColor = textColors[index] || '#000000';
  return (
    <Col className='card mb-4'>
      <Card key={index}  style={{backgroundColor: backgroundColor,color: textColor}}className="h-100 my-2">
        <Card.Img 
          variant="top" 
          src={card.image} 
          alt={card.title} 
          className="card-img-top mx-2 my-2 w-100 " 
        />
        <Card.Body>
          <Card.Title className="card-title">{card.title}</Card.Title>
          <Card.Text className="card-text">{card.description}</Card.Text>
          
          <Card.Title className="mt-3">Concepts</Card.Title>
          <ul className="list-group list-group-flush">
            {card.concepts.map((concept, i) => (
              <li className="list-group-item" key={i}>{concept}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardDetails;
