import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteProudct } from "../../ReduxTollKit/Slice/ProudctSlice";

export const AdminProudctsCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    const isconfrim = window.confirm("هل أنت متأكد من حذف هذا المنتج؟");
    if (isconfrim) {
      dispatch(DeleteProudct(item?._id));
    }
  };
  return (
    <>
      <div className="container">
        <div className="card admin-card">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a
              href=""
              onClick={handleDelete}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
              }}
            >
              ازاله
            </a>

            <Link
              to={`/admin/edit/${item?._id}`}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
              }}
            >
              تعديل
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={`/allprudcts/${item?._id}`}>
              <img src={item?.imageCover} className="card-img-top" alt="..." />
            </Link>
          </div>
          <div className="card-body">
            <p className="card-text"> {item?.title}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="text-warning ms-1">
              {item?.ratingsQuantity || 0}
            </span>
            <span>
              {item?.priceAfterDiscount ? (
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
                    {item?.price}جنيه
                  </span>
                  <span>{item?.priceAfterDiscount} جنيه</span>
                </div>
              ) : (
                <div className="fw-bold fs-5 text-dark">
                  {item?.price} <span className="fs-6 fw-normal">جنيه</span>
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
