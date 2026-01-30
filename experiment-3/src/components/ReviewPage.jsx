import { useState } from "react";

function ReviewPage() {
  const reviews = [
    { id: 1, text: "Excellent product quality!", type: "positive" },
    { id: 2, text: "Very easy to use and reliable.", type: "positive" },
    { id: 3, text: "Customer support was amazing.", type: "positive" },
    { id: 4, text: "Worth the money.", type: "positive" },
    { id: 5, text: "Fast delivery and good packaging.", type: "positive" },

    { id: 6, text: "Product stopped working after a week.", type: "negative" },
    { id: 7, text: "Poor customer service experience.", type: "negative" },
    { id: 8, text: "Not worth the price.", type: "negative" },
    { id: 9, text: "Delivery was delayed.", type: "negative" },
    { id: 10, text: "Quality could have been better.", type: "negative" },
  ];

  const [selectedReviews, setSelectedReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [customReview, setCustomReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleReview = (id) => {
    setSelectedReviews((prev) =>
      prev.includes(id)
        ? prev.filter((r) => r !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "600px" }}>
      <h2>Write a Review</h2>

      {/* Star Rating */}
      <div style={{ fontSize: "24px", marginBottom: "20px" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{
              cursor: "pointer",
              color: star <= rating ? "gold" : "gray",
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Pre-written Reviews */}
      <h4>Select from existing reviews</h4>
      {reviews.map((review) => (
        <div key={review.id} style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={selectedReviews.includes(review.id)}
            onChange={() => toggleReview(review.id)}
          />
          <span
            style={{
              marginLeft: "10px",
              color: review.type === "positive" ? "green" : "red",
            }}
          >
            {review.text}
          </span>
        </div>
      ))}

      {/* Custom Review Box */}
      <h4 style={{ marginTop: "20px" }}>Write your own review</h4>
      <textarea
        rows="4"
        placeholder="Write your review here..."
        value={customReview}
        onChange={(e) => setCustomReview(e.target.value)}
        style={{ width: "100%", padding: "10px" }}
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Submit Review
      </button>

      {/* Submission Preview */}
      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h4>Submitted Review</h4>
          <p>⭐ Rating: {rating}</p>
          <p>Selected Reviews: {selectedReviews.length}</p>
          <p>Personal Review: {customReview || "No personal review written"}</p>
        </div>
      )}
    </div>
  );
}

export default ReviewPage;
