import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export default function SiteHeader() {
  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  let categories = data.categories.data;

  return (
    <div className="site-header">
      <Link to="/">
        <h1>Ninja Reviews</h1>
      </Link>

      <nav className="categories">
        <span>Filter reviews by category:</span>
        {categories.map((category) => (
          <Link
            className="nav-link"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.attributes.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
