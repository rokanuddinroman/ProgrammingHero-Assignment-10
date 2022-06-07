import React, { useState, useEffect } from 'react';
import './ReviewsSection.css'
const ReviewsSection = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className="reviews__container container">
                <h1 className='workout-heading'>Reviews</h1>
                <div>
                    <p className='workout-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aspernatur nisi ut dignissimos, mollitia autem repudiandae numquam fugiat dolor minima.</p>
                </div>
                <div className="reviews">
                    {
                        reviews.map(review => <div className='review__card'>
                            <p>
                                {review.message}
                            </p>
                            <div>
                                <h1>{review.name}</h1>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;