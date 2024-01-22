import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        attributes {
          title
          rating
          body
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
        id
      }
    }
  }
`;

export default function Homepage() {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  console.log()

  return (
    <div>
      <h1>Homepage</h1>

      {data.reviews.data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>

          <small>console list</small>
          {review.attributes.category.data.map((c) => (
            <small key={c.id}>{c.id}</small>
          ))}

          <p>
            {review.attributes.body[0].children[0].text.substring(0, 200)}...
          </p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
