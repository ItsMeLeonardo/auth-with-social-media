import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      404
      <Link to="/">Go to home</Link>
    </div>
  );
}

export default NotFound;
