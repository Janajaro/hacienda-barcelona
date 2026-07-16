import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div>404 error, page not found</div>

      <Link to="/">
        Home
      </Link>
    </>
  );
};

export default ErrorPage;