import { Col, Container, Row } from 'react-bootstrap';
// import { useForm } from "react-hook-form";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
// import { useState } from 'react';

const Footer = () => {
  // const [subscriber, setSubscriber] = useState({});
  const { user } = useAuth();
    const phone = <FontAwesomeIcon icon={faPhone} style={{color: 'tomato'}}/>;
    const message = <FontAwesomeIcon icon={faEnvelope} style={{color: 'tomato'}}/>;
  const location = <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'tomato' }} />;
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://infinite-stream-42915.herokuapp.com/subscriber", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      fetch(`https://infinite-stream-42915.herokuapp.com/subscriber?search=${user.email}`)
        .then((res) => res.json())
        // .then((data) => setSubscriber(data));
    });
  };
    return (
      <>
        <Container fluid className="bg-dark text-white py-5">
          <Row xs={1} md={4}>
            <Col>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div
                  style={{
                    backgroundColor: "tomato",
                    width: "4px",
                    height: "20px",
                  }}
                  className="me-4"
                ></div>
                <b>About Jewellery Heaven</b>
              </div>
              <p className="">
                Stay up to date with current travel guidelines for Bangladesh
                abroad. Check the latest updates here. Domestic Travel Advisory
                International Travel Advisory
              </p>
              <div className="divider bg-info rounded my-3 mx-auto"></div>
            </Col>
            <Col>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div
                  style={{
                    backgroundColor: "tomato",
                    width: "4px",
                    height: "20px",
                  }}
                  className="me-4"
                ></div>
                <b>CONTACT INFORMATION</b>
              </div>
              <p>
                Stay up to date with current shop guidelines for India and
                abroad. Check the latest updates here.
              </p>
              <p>
                <span>{phone}</span>
                <span> +88 011111111</span>
              </p>
              <p>
                <span>{message} </span>
                <span> mizanur911@gmail.com</span>
              </p>
              <p>
                <span>{location} </span>
                <span> 3146 Koontz, California</span>
              </p>
              <div className="divider bg-info rounded my-3 mx-auto"></div>
            </Col>
            <Col>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div
                  style={{
                    backgroundColor: "tomato",
                    width: "4px",
                    height: "20px",
                  }}
                  className="me-4"
                ></div>
                <b>RECENT POSTS</b>
              </div>
              <p className="mb-3">
                Life is a beautiful journey not a destination
              </p>
              <p className="mb-3">Take only memories, leave only footprints</p>
              <div className="divider bg-info rounded my-3 mx-auto"></div>
            </Col>
            <Col>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div
                  style={{
                    backgroundColor: "tomato",
                    width: "4px",
                    height: "20px",
                  }}
                  className="me-4"
                ></div>
                <b>SUBSCRIBE US</b>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* {subscriber ? (
                  <input type="submit" className="text-white" value="Subscribed" disabled/>
                ) : ( */}
                    <>
                <input
                  // defaultValue={user.email}
                  placeholder="Your email"
                  {...register("email", { required: true })}
                  style={{ width: "90%" }}
                  className="mb-3 rounded"
                />
                <br />
                  <input type="submit" className="bg-primary text-white" value="Subscribe"/>
                  </>
                {/* )} */}
              </form>
              <div className="divider bg-info rounded my-3 mx-auto"></div>
            </Col>
          </Row>
        </Container>
        <Container
          fluid
          style={{ backgroundColor: "black" }}
          className="text-white py-5"
        >
          <Row xs={1} md={3}>
            <Col>
              <p>Win The World With Your Beauty, Enjoy like a free bird</p>
            </Col>
            <Col>
            </Col>
            <Col>
              <small>
                Copyright ©DMR 2021 Jewellery Heaven. All rights reserved.
              </small>
            </Col>
          </Row>
        </Container>
      </>
    );
};

export default Footer;