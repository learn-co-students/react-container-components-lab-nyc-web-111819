import React from 'react';

function MovieReviews (props) {

    let reviewList = props.reviews.map(review => (
        <div className="review">
            <h1>{review.display_title}</h1>
            <h4>{review.headline}</h4>
            <p>{review.summary_short}</p>
        </div>
    ))

    return (
        <div className="review-list">
            { reviewList }
        <hr></hr>
        </div>
    )
}

export default MovieReviews