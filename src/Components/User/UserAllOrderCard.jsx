import { Link } from "react-router-dom";

export const UserAllOrderCard = ({ item }) => {
  return (
    <>
      <div className="card border-0  rounded-4 p-3 mb-3">
        <div className="d-flex justify-content-between align-items-stretch">
          <div className="d-flex gap-3 align-items-start">
            <Link to={`/allprudcts/${item?.product?._id}`}>
              <img
                src={item?.product?.imageCover}
                alt="mobile"
                style={{ width: "90px", height: "130px", objectFit: "contain" }}
              />
            </Link>
            <div className="d-flex flex-column ">
              <h6
                className="fw-bold mb-1"
                style={{ fontSize: "15px", color: "#333" }}
              >
                {item?.product?.title}
              </h6>

              <span className="text-secondary small mb-2">
                <strong className="fw-bold ms-1">السعر:{item?.price} </strong>
              </span>

              <div
                className="rounded-circle mb-3"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: item?.color,
                  cursor: "pointer",
                }}
              ></div>

              <div className="d-flex align-items-center gap-2">
                <span className="text-secondary small">الكميه</span>
                <input
                  type="number"
                  value={item?.quantity}
                  disabled
                  className="form-control text-center p-1"
                  style={{ width: "50px", height: "32px", fontSize: "14px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
