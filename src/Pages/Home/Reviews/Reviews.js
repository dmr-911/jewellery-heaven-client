import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div>
            <h2>Users Review</h2>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <Container className="mb-4">
                <Row xs={1} md={3}>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Reviews;