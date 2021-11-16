import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = ({ review }) => {
    const { name, _id, rating, comment } = review;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Rating
                    readonly
                    initialRating={rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star golden-rating"
                    />
                    <Card.Text>
                      Users comment :  {comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;