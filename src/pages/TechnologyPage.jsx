import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
  let [params] = useSearchParams();
  const companySlug = params.get("q");
  const { slug } = useParams();
  const tech = technologies.find((element) => element.slug === slug);
  const [technology, setTechnology] = useState(tech);
  return (
    <div>
      <h1>Technology Details</h1>
      <button>
        <Link to={`/company/${companySlug}`}>Back</Link>
      </button>
      <div>
        {technology ? (
          <div className="companyCard">
            <img
              src={technology.image}
              alt={technology.name}
              style={{ width: "20vw" }}
            />
            <div>
              <h1>{technology.name}</h1>
              <h3>About</h3>
              <p>{technology.description}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default TechnologyPage;
