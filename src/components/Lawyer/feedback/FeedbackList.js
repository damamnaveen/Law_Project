// src/FeedbackList.js
import React from 'react';

const FeedbackList = ({ feedbacks }) => {
  return (
    <div>
      <h2>Client Feedback</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul>
          {feedbacks.map((feedback, index) => (
            <li key={index}>
              <strong>{feedback.name}:</strong> {feedback.feedback}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
