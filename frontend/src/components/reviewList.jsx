// ReviewList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import FeedbackModal from "./FeedbackModal"; // Import the FeedbackModal component
import "../styles/reviewList.css";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [reviewsPerPage] = useState(10);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const token = localStorage.getItem("token"); 
      const config = {
        headers: {
          Authorization: `${token}`, 
        },
      };

      const response = await axios.get("https://employee-feedback-api.onrender.com/feedback/requiring-feedback", config); 
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const data2 = page * reviewsPerPage;
  const data1 = data2 - reviewsPerPage;
  const currentReviews = reviews.slice(data1, data2);

  // Function to handle page change
  const paginate = (pageNumber) => setPage(pageNumber);

  // Function to open the feedback modal
  const openFeedbackModal = (reviewId) => {
    setSelectedReview(reviewId);
  };

  // Function to close the feedback modal
  const closeFeedbackModal = () => {
    setSelectedReview(null);
  };

  return (
    <div>
      <div className="review-container">
        {currentReviews.map((review) => (
          <div key={review._id} className="review-card">
            <h2>{review.title}</h2>
            <p>{review.description}</p>
            <p>Deadline: {review.deadline.split("T")[0]}</p>
            <button onClick={() => openFeedbackModal(review._id)}>Give Feedback</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={page === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>

      {selectedReview && <FeedbackModal reviewId={selectedReview} onClose={closeFeedbackModal} />}
    </div>
  );
}

export default ReviewList;
