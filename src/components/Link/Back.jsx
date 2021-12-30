import { Link } from "react-router-dom";

function Back({ to }) {
  return (
    <Link to={to}>
      <button className="btn btn-back glass-lg">Back</button>
    </Link>
  );
}

export default Back;
