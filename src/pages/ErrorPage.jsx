import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <i>Status 404 Not Found</i>
      <Link to="/">Volver Al inicio</Link>
    </div>
  );
}

export default ErrorPage;
