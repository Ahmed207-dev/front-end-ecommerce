import { Spinner } from "react-bootstrap";

const LoadingPage = () => {
  return (
    <div className="d-flex justify-content-center py-2">
      <Spinner animation="border" role="status" variant="primary"></Spinner>
    </div>
  );
};

export default LoadingPage;
