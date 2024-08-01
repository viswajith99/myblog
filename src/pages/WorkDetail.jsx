import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';

const WorkDetail = () => {
    return (
        <div>
            <h3 className='work-h4 my-4 text-center'>My Works</h3>
            <Row className='mx-3 mx-md-5'>
                <Col xs={12} md={6} className='px-3'>
                    <h4>HTML, CSS, Bootstrap & JavaScript Projects</h4>
                    <ListGroup className='bg my-4'>
                        <ListGroup.Item action variant="info"><h5>Portfolio Website</h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Indian Express Newspaper</h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Chessboard</h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Todo App</h5></ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={12} md={6} className='px-3'>
                    <h4>React.js, Express.js & MongoDB Projects</h4>
                    <ListGroup>
                        <ListGroup.Item action variant="info"><h5>Portfolio Website using React.js</h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Blog</h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Bulb using React.js</h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Product App using React.js</h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Ecommerce App</h5></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
}

export default WorkDetail;
