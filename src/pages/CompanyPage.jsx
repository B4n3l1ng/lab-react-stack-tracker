import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const oneCompany = companies.find((element) => element.slug === companySlug);
  const [company, setCompany] = useState(oneCompany);

  return (
    <div>
      <h1>Company Profile</h1>
      <div>
        {company ? (
          <>
            <div className="companyCard">
              <img
                src={company.logo}
                alt={company.name}
                style={{ width: "20vw" }}
              />
              <div>
                <h1>{company.name}</h1>
                <h3>About</h3>
                <p>{company.description}</p>
              </div>
            </div>
            <div className="techScroller">
              {company.techStack.map((tech) => {
                return (
                  <Link
                    key={tech.slug}
                    to={`/tech/${tech.slug}?q=${company.slug}`}
                  >
                    <div>
                      <img
                        src={tech.image}
                        alt={tech.name}
                        style={{ width: "100px", height: "100px" }}
                      />
                      <span>{tech.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default CompanyPage;
