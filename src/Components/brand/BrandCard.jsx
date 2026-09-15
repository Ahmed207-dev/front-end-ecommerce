import { Link } from "react-router-dom";

export const BrandCard = ({ item }) => {
  return (
    <>
      <div className=" col-6 col-sm-4 col-md-2 my-2 d-flex justify-content-center">
        <div
          className="card border-0 shadow-sm rounded-4 p-2  d-flex justify-content-center align-items-center"
          style={{ height: "100px", backgroundColor: "#F8F9FA" }}
        >
          <Link to={`/allbrand/${item?._id}`}>
            <img
              src={item?.image}
              className="img-fluid"
              style={{ maxHeight: "70px", objectFit: "contain" }}
              alt="brand"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
