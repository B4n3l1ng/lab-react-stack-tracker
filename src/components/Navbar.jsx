import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" style={{ color: "white" }}>
        StackTracker
      </Link>
    </nav>
  );
}

export default Navbar;
