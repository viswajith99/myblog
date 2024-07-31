import React, { useEffect, useState } from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import CardDetails from './CardDetails';
import '../component/Header.jsx';
import '../component/Footer.jsx';
import './Page.css';
import WorkDetail from './WorkDetail.jsx';

const Home = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./card.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCardData(data.cardData);
      } catch (error) {
        console.error("Error fetching card data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='bg-div'>
      <div className='bg-light '>
       
          <h1 style={{ textAlign: 'center', padding: 20, fontSize:80 }} className='text-success'>Blog</h1>
        
        <Row>
          <Col md={8} className='text-align '>
            <p className='animated-text text-success font-weight'>Welcome To My Blog</p>
          </Col>
          <Col xs={6} md={3}>
            <Image src='../profilepic.JPG' className='img-fluid img' alt='profilepic' />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center py-2 mx-5">
          <Col md={12}>
            <Card style={{ width: '100%', margin: '10px', padding: '0px 40px' }}>
              <Card.Body>
                <Card.Title>MERN Stack Web developer</Card.Title>
                <Card.Text>
                  The MERN stack consists of MongoDB, Express.js, React.js, and Node.js. It is a popular stack for building full-stack web applications.
                </Card.Text>
                <Row>
                  <Col>
                    <Card.Img variant="top" src="https://www.mongodb.com/assets/images/global/leaf.png" alt="MongoDB" className="mb-3" />
                  </Col>
                  <Col>
                    <Card.Img variant="top" src="https://expressjs.com/images/express-facebook-share.png" alt="Express.js" className="mb-3" />
                  </Col>
                  <Col>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" className="mb-3" />
                  </Col>
                  <Col>
                    <Card.Img variant="top" src="https://nodejs.org/static/images/logo.svg" alt="Node.js" className="mb-3" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="d-flex justify-content-center cards-container  py-4 mx-5" md={12} >
          {cardData.map((card, index) => (
            <CardDetails key={index} card={card} index={index} />
          ))}
        </Row>
        <Row>
          <WorkDetail/>
        </Row>
      </div>
    </div>
  );
};

export default Home;
