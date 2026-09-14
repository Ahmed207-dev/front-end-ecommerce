import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProudctCardHook from "../../CustomHook/proudct/ProudctCardHook";

export const ProdctsCard = ({ items, favProd }) => {
  const [handleHeart, show] = ProudctCardHook(items, favProd);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-4">
      <div className="card h-100 border-0 shadow-sm rounded-4 p-2 text-end position-relative">
        <div
          className="d-flex justify-content-center align-items-center p-3"
          style={{ height: "200px" }}
        >
          <Link
            to={`/allprudcts/${items._id}`}
            style={{ textDecoration: "none" }}
          >
            <img
              src={items?.imageCover}
              className="card-img-top "
              style={{ objectFit: "cover", width: "150px", height: "150px" }}
              alt="product"
            />
          </Link>
        </div>
        <div className="px-2 pt-1">
          <FaHeart
            style={{ cursor: "pointer" }}
            className={show ? "text-danger" : "text-secondary"}
            onClick={handleHeart}
            size={20}
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between p-2">
          <p
            className="card-text text-dark fw-bold mb-2 fs-6"
            style={{ lineHeight: "1.4" }}
          >
            {items?.title}
          </p>
          <p
            className="card-text text-dark fw-bold mb-2 fs-6"
            style={{ lineHeight: "1.4" }}
          >
            {items?.description}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-2">
            {items?.priceAfterDiscount ? (
              <div
                className="fw-bold fs-5 text-dark m-2"
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  className="fs-6 fw-normal"
                  style={{ textDecoration: "line-through" }}
                >
                  {items?.price}جنيه
                </span>
                <span>{items?.priceAfterDiscount} جنيه</span>
              </div>
            ) : (
              <div className="fw-bold fs-5 text-dark">
                {items?.price} <span className="fs-6 fw-normal">جنيه</span>
              </div>
            )}

            <div className="d-flex align-items-center gap-1 text-warning fw-bold fs-6">
              <span>{items?.rate}</span>
              <FaStar size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
