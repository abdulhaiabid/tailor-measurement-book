import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  function handleGoToHomeButton() {
    navigate("/");
  }

  return (
    <>
      <h1>Error 404</h1>
      <p>
        Page not found.
      </p>
      <button
        onClick={handleGoToHomeButton}>
        Go to Home
      </button>
    </>
  );
}

export default ErrorPage;