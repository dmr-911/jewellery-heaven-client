import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    // fetch("https://sleepy-shore-83397.herokuapp.com/services")
    fetch("https://infinite-stream-42915.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [])
  return (
    <Container fluid bg="primary" className="pt-3 py-5 bg-dark">
      <Container>
        <h2 className="text-white mb-2">
          <span className="text-white">Our</span>{" "}
          <span className="color-orrange">Services</span>
        </h2>
        <div className="divider bg-info rounded mb-3 mx-auto"></div>
        {services.length ? (
          <Row xs={1} md={4} className="g-4 text-white">
            {services.map((service) => (
              <Col key={service.key}>
                <div className="d-flex justify-content-evenly">
                  <img height="40px" src={service.image} alt="" />
                  <div>
                    <p>
                      <b>{service.name}</b>
                    </p>
                    <small className="text-secondary">
                      Morbi leo risus, porta ac
                    </small>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <Spinner className="my-5" animation="border" variant="light" />
        )}
      </Container>
    </Container>
  );
};

export default Services;