import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css';

const Review = ({ review }) => {
    const { name, rating, comment } = review;
    return (
        <Col>
            <Card className="product-card">
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
                        {comment.slice(0, 50)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;