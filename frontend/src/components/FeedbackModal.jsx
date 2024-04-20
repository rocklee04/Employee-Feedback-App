// FeedbackModal.js
import React, { useState } from "react";
import axios from "axios";
import "../styles/feedback.css";

function FeedbackModal({ reviewId, onClose }) {
  const [feedbackText, setFeedbackText] = useState("");

  const handleFeedbackSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      };

      const data = { text: feedbackText };
      const response = await axios.post(
        `https://employee-feedback-api.onrender.com/feedback/${reviewId}/submit-feedback`,
        data,
        config
      );

      console.log("Feedback submitted:", response.data);
      alert("Feedback submitted successfully!");
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Give Feedback</h2>
        <textarea
          rows="4"
          cols="50"
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          placeholder="Enter your feedback..."
        />
        <button onClick={handleFeedbackSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default FeedbackModal;
