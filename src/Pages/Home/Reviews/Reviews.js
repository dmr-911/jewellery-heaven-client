import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-shore-83397.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <Container fluid className="reviews">
        <h2 className="text-white mb-2">
          <span className="text-white">User</span>{" "}
          <span className="color-orrange">Reviews</span>
        </h2>
        <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <Container className="pb-4">
                <Row xs={1} md={3}>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </Container>

        </Container>
    );
};

export default Reviews;