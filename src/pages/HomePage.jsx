import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companiesContainer">
        {companies.map((company) => {
          return (
            <Link key={company.id} to={`/company/${company.slug}`}>
              <div>
                <h2>{company.name}</h2>
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{ width: "100px" }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
