import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Page.css'

const About = () => {
    return (
        <div>
            <Container>
                <Row className='text-align-center '>
                    <h4 className='h5-about'>About</h4>

                    <p className='p-about' >
                        Hi, I'm Viswajith Haridas, a MERN stack developer. Although I am a recent Postgraduate and still gaining experience, I have a solid understanding of key technologies such as MongoDB, React.js, Express.js, and Node.js. I have already completed several projects, including Bulb.js, a Chessboard application using JavaScript, and a Product App developed with React.js. You can find detailed information about these projects and more in this blog.
                    </p>
                </Row>


            </Container>

        </div>
    )
}

export default About
