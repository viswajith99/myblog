import React from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'

const WorkDetail = () => {
    return (
        <div>
            <h3 className='work-h4 my-4'> MyWorks</h3>
            <Row className='d-flex mx-5' >

                <Col xs={12} sm={6} md={4} lg={3} className='px-4 '>
                    <h4> HTML,CSS,Bootstrap & Javascript Project</h4>
                    <ListGroup className='bg my-4'>
                        <ListGroup.Item action variant="info" ><h5>Portfolio Website</h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Indian Express Newspaper</h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Chessboard </h5> </ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Tudo App</h5></ListGroup.Item>
                    </ListGroup>


                </Col>
                <Col md={6} className='my-4'>
                    <h4> React Js ,Express Js & Mongo Db</h4>
                    <ListGroup>
                        <ListGroup.Item action variant="info"><h5>Portfolio Website using Reactjs</h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Blog</h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Bulb using React Js</h5> </ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Product App using React js </h5></ListGroup.Item>
                        <ListGroup.Item action variant="info"><h5>Ecommerce Appjs</h5> </ListGroup.Item>

                    </ListGroup>
                    </Col>




            </Row>
        </div>




    )
}

export default WorkDetail
