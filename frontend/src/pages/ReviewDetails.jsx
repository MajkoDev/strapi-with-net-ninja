import { useParams } from "react-router-dom";

export default function ReviewDetails() {
  let data = {
    rating: 3,
    title: "Jojo",
    body: "Lorem ipsum",
  };

  return (
    <div className="review-card">
      <div className="rating">{data.rating}</div>
      <h2>{data.title}</h2>

      <small>console list</small>

      <p>{data.body}</p>
    </div>
  );
}
