import React from "react";
import { useState } from "react";
import Star from "../components/Star";
import Modal from "../components/Modal";
import Button from "../components/Button";

const Rating = ({
  heading = "Rate Your Experience",
  color = "gold",
  feedbackMessage = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleSubmit = () => {
    // console.log("clicked?");
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
          />

          // <span
          //   onClick={() => setRating(star)}
          //   onMouseEnter={() => setHover(star)}
          //   onMouseLeave={() => setHover(0)}
          //   key={star}
          //   className="star"
          //   style={{
          //     color: star <= (hover || rating) ? color : "#ccc",
          //   }}
          // >
          //   {"\u2605"}
          // </span>
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessage[rating - 1]}</p>}

      {/* <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button> */}

      <Button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </Button>

      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};

export default Rating;
