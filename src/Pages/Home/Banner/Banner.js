import React from 'react';
import './Banner.css';
import {useHistory} from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  const history = useHistory();
  const handleClick = () =>{
    history.push('/explore')
  };

    return (
<Container fluid id="banner">
<Row md={2} xs={1} className="h-100">
    <Col className="h-100 d-flex justify-content-center align-items-center">
    <div>
    <h3 className="fs-1 text-white" style={{height: '100px'}}>
        <Typewriter
        
        options={{
            autoStart: true,
            loop: true
        }}
        onInit={(typeWriter)=>{
            typeWriter.typeString("We are the largest import  and exporter of any type of jewels in Bangladesh. ")
            .pauseFor(2000)
            .start()
        }}
        />
    </h3>
    <button onClick={handleClick} className="btn-banner d-inline mt-5">EXPLORE</button>
</div>
    </Col>
    <Col></Col>
</Row>

</Container>
    );
};

export default Banner;