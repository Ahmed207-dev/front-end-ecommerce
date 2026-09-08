import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="box-error">
        <h1 className="">Error</h1>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
};
