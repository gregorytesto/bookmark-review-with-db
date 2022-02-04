import ReviewForm from "./ReviewForm";
import { useState } from "react";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, setViewEditForm] = useState(false);

  const toggleView = () => {
    setViewEditForm(!viewEditForm);
  };

  return (
    <div className="Review">
      <button onClick={toggleView}>edit this review</button>
      {viewEditForm ? (
        <ReviewForm
          handleSubmit={handleSubmit}
          toggleView={toggleView}
          reviewDetails={review}
        />
      ) : (
        <div>
          <h4>
            {review.title} <span>{review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
        </div>
      )}

      <button onClick={() => handleDelete(review.id)}>delete</button>
    </div>
  );
}

export default Review;
